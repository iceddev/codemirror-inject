'use strict';

var path = require('path');

var shouldWatch = (process.argv.indexOf('--watch') !== -1);

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'codemirror-inject.js',
    library: 'codemirror-inject',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ]
  },
  bail: true,
  watch: shouldWatch
};
