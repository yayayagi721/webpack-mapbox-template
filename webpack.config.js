const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const Dotenv = require("dotenv-webpack");
// replace accordingly './.env' with the path of your .env file
require("dotenv").config({ path: "./.env" });

module.exports = {
  mode: "development",
  entry: {
    index: path.join(__dirname, "/src/index.ts"),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },

  devServer: {
    port: 3000,
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(html)$/,
        use: ["html-loader"],
      },
      {
        test: /\.scss/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: true,
              importLoaders: 2,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/src/html/index.html"),
    }),
    new Dotenv(),
  ],

  resolve: {
    extensions: [".ts", ".js"],
  },
};
