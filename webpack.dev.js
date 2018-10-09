const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
  plugins:[
    new webpack.HotModuleReplacementPlugin()    
  ],
  devtool: 'source-map',
  devServer: {
    //contentBase: path.resolve(__dirname, './src/content/img'),
    port: 9000,
    hot: true,
    compress:true,
    host:"0.0.0.0",
    historyApiFallback: true
  }
});