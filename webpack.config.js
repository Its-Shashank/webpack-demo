const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    hello: "./server.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
