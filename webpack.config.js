/* eslint-disable */
const CopyWebpackPlugin = require("copy-webpack-plugin");

const config = {
  target: "electron",
  entry: {
    main: "./src/main.ts",
    index: "./src/index.tsx",
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
        enforce: 'pre',
        test: /\.(js|tsx?)$/,
        use: "source-map-loader"
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          "ts-loader"
        ]
      },
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
  resolve: {
    extensions: [`.ts`, `.tsx`, `.js`, `.jsx`]
  }
};

module.exports = config;
