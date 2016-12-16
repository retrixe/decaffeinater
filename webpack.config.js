var CopyWebpackPlugin = require("copy-webpack-plugin");
var json = require("json-loader");

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
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: "src/index.html", to: "index.html"}
    ],
    {
      copyUnmodified: true
    })
  ]
}

module.exports = config;