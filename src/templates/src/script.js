import { Agent, Environment, utils } from "flocc";

const environment = new Environment();

function tick(agent) {}

function setup() {
  // add agents here
}

function run() {
  environment.tick();
  window.requestAnimationFrame(run);
}

setup();
run();
