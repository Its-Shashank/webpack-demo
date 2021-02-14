const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    server: "./server.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    compress: true,
    port: 9000,
  },
};
