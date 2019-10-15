const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/script.js",
  devServer: {
    contentBase: __dirname,
    compress: true,
    port: 8080
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  }
};
