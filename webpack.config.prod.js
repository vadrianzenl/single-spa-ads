const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

process.env.NODE_ENV = "production";

const preactBabelConfig = getBabelConfig();
preactBabelConfig.presets.splice(0, 1);
preactBabelConfig.plugins.push(['@babel/plugin-transform-react-jsx', {pragma: 'h'}])

module.exports = {
  mode: 'production',
  target: "web",  
  devtool: 'source-map',
  entry: {
    'single-spa.config': './single-spa.config.js',
  },
  output: {
    publicPath: '/build/',
    filename: "[name].[hash:20].js",
    path: path.resolve(__dirname, 'build'),
  }, 
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      "process.env.API_URL": JSON.stringify("http://localhost:3001")
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, 
      {
        test: /login.+\.js$/,
        loader: 'babel-loader',
        query: preactBabelConfig,
      },
      {
        test: /\.js$/,
        exclude: /node_modules|preact|login/,
        loader: 'babel-loader',
        query: getBabelConfig(),
      },
      {
        test: /\.html$/,
        exclude: /node_modules|svelte/,
        loader: 'html-loader',
      },
      {
        test: /svelte.+\.html$/,
        loader: 'svelte-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ],
  }  
};

function getBabelConfig() {
  return {
    presets: [
      ['@babel/preset-env', {
        targets : {
          browsers: ['last 2 versions']
        }
      }],
      ['@babel/preset-react']
    ],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-function-bind'
    ],
  };
}