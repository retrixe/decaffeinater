/* eslint-disable */
const CopyWebpackPlugin = require("copy-webpack-plugin");

const config = {
  target: "electron",
  entry: {
    main: "./src/main.js",
    index: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: `${__dirname}/app`,
    sourceMapFilename: "[file].map",
  },
  devtool: "source-map",
  node: {
    __dirname: false,
    __filename: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin(
      [{ from: "src/index.html", to: "index.html" }],
      { copyUnmodified: true }
    ),
  ],
};

module.exports = config;
