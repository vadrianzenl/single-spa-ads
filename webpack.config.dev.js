const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

process.env.NODE_ENV = "development";

const preactBabelConfig = getBabelConfig();
preactBabelConfig.presets.splice(0, 1);
preactBabelConfig.plugins.push(['@babel/plugin-transform-react-jsx', {pragma: 'h'}])

module.exports = {
  mode: 'development',
  target: "web",  
  devtool: 'cheap-module-source-map',
  entry: {
    'single-spa.config': './single-spa.config.js',
  },
  output: {
    publicPath: '/build/',
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    port: 3000,
    stats: "minimal",
    publicPath: '/build/',
    overlay: true,
    historyApiFallback: true,
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false
  }, 
  plugins: [
    new webpack.DefinePlugin({
      "process.env.API_URL": JSON.stringify("http://localhost:7000")
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
      favicon: "./favicon.ico"
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    alias: {
      api: path.resolve(__dirname, 'src/api/'),
      services: path.resolve(__dirname, 'src/services/')
    }
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
        test: /\.(js|jsx)$/,
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
        test: /\.svelte$/,
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
      '@babel/plugin-proposal-function-bind',
      '@babel/plugin-transform-runtime'
    ],
  };
}