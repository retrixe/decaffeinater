/* eslint-env node */
var CopyWebpackPlugin = require("copy-webpack-plugin");

const config = {
  target: "electron",
  entry: {
    main: "./src/main.js",
    index: "./src/index.js"
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/app",
    sourceMapFilename: "[file].map"
  },
  devtool: "source-map",
  node: {
    __dirname: false,
    __filename: false
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin(
      [{ from: "src/index.html", to: "index.html"}],
      { copyUnmodified: true }
    )
  ]
};

module.exports = config;