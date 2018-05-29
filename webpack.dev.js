const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
// const {srcPath, outPath} = require('./filePaths');

const srcPath = "./src";
const outPath = "./out";

const entryFiles = {
  layout: `${srcPath}/layout.js`
}

module.exports = {
    devtool: 'inline-source-map',
  entry: entryFiles,
  mode: 'development',
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, outPath)
  },
  resolve: {
    symlinks: false,
    alias: {
      jquery: 'jquery/src/jquery',
      fonts: path.resolve(__dirname, `${srcPath}/fonts`)
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
    },
  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          include: path.resolve(__dirname, `${srcPath}/js/`),
          use: ['babel-loader']
        },
      ]
    }
};