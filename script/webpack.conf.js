const webpack = require("webpack");
const path = require("path");

const pkg = require("../package.json");

const rootPath = path.resolve(__dirname, "../");

const config = {
  mode: "production",
  entry: path.resolve(rootPath, "src", "index.js"),
  output: {
    filename: `rook.min.js`,
    path: path.resolve(rootPath, "dist"),
    library: `rook`,
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      }
    ]
  }
};

module.exports = config;
