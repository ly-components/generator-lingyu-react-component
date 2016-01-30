'use strict';
const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: [
    './test/test.jsx'
  ],
  output: {
    path: path.join(__dirname, 'test'),
    filename: 'test.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('test')
      }
    })
  ],
  postcss: [require('autoprefixer')],
  resolve: {
    modulesDirectories: ['node_modules', './src', './test'],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      exclude: [path.resolve('src/')]
    }, {
      test: /\.jsx?$/,
      include: [path.resolve('src/')],
      loader: 'babel-istanbul',
      query: {
        coverageVariable: '__coverage__'
      }
    }, {
      test: /\.less$/,
      loaders: ['style', 'css', 'postcss', 'less']
    }, {
      test: /\.css$/,
      loaders: ['style', 'css', 'postcss']
    }]
  }
};
