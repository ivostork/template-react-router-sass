const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  plugins: [    
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new CopyWebpackPlugin([
      {
        from: '_redirects.txt',
        to: '_redirects',
        toType: 'file'
      }
    ])
  ]
});
