const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./playground/index.js",
  output: {
    path: __dirname + "/playground",
    filename: "Hermes.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "playground/index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    host: "localhost",
    port: process.env.PORT || 8888,
    historyApiFallback: true,
    open: true
  }
};
