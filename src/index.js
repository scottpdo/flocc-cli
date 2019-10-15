#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const shell = require("shelljs");
const argv = require("yargs").argv;

function createFloccProject(name = "flocc-project") {
  const cwd = process.cwd();
  let dir = cwd + "/" + name;
  let num = 0;
  while (fs.existsSync(dir + (num > 0 ? "-" + num : ""))) {
    num++;
  }
  if (num) dir += "-" + num;
  fs.mkdirSync(dir);
  fs.mkdirSync(dir + "/src");

  const files = [
    "index.html",
    "src/script.js",
    "package.json",
    "webpack.config.js"
  ];

  files.forEach((filename, i) => {
    console.log(`Creating file ${filename}... [${i + 1} / ${files.length}]`);
    fs.writeFileSync(
      path.resolve(dir, filename),
      fs.readFileSync(path.resolve(__dirname, "templates/", filename)),
      "utf-8"
    );
  });

  console.log("Installing dependencies...");
  shell.cd(dir);
  shell.exec("npm install");
  shell.cd("..");

  console.log("Created new project!");
}

createFloccProject(argv.name);
