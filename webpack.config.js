const path = require("path");
const webpack = require("webpack");

const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./client/src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "client", "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["env", "react"]
          }
        }
      },
      {
        test: [/\.css$/],
        use: ["style-loader", "css-loader"]
      },

      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./client/src/index.html",
      filename: "./index.html"
    })
  ]
};
