const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js"
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist")
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html"
      }),
      new InjectManifest({
        swSrc: "./src-sw.js",
        swDest: "src-sw.js"
      }),
      new WebpackPwaManifest({
        name: "Text-Editor",
        short_name: "JATE",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        start_url: "/",
        publicPath: "/",
        display: "standalone",
        icons: [
          {
            src: path.resolve("/src/favicon.ico"),
            size: [72, 96, 128, 144, 152, 192, 384, 512],
            destination: path.join("src", "icons")
          }
        ]
      })
    ],

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: [
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/transform-runtime"
              ]
            }
          }
        }
      ]
    }
  };
};

// TODO: Add and configure workbox plugins for a service worker and manifest file.

// TODO: Add CSS loaders and babel to webpack.
