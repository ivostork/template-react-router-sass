const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    styleguide: './src/apps/styleguide/index.jsx',
    app: './src/apps/app/index.jsx'
  },
  plugins: [
    new CleanWebpackPlugin(['dist/*.*'], {root: path.resolve(__dirname , './'), exclude: ['_redirects'], verbose: true }),
    new HtmlWebpackPlugin({
      template: './src/styleguide.html',
      inject: false,
      chunks: ['styleguide'],
      filename:'styleguide.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/app.html',
      inject: false,
      chunks: ['app'],
      filename:'app.html'
    }),
    new ExtractTextPlugin('style.css')    
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist/')
  },
  resolve: {
    extensions:['.js','.jsx']
  },
  module: {
    rules: [   
      {
        test: /\.jsx?/,
        include:[
          path.resolve(__dirname,'src')
        ],
        exclude: [
          path.resolve(__dirname,'node_modules')
        ],
        loader:'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {                
                sourcemap: true,
                minimize: true
              }
            }, 
            {
              loader: 'sass-loader',
              options: {
                sourcemap:true
              }            
            }
          ]
        })
      },
      {
        test: /\.(gif|png|jpe?g|svg|webp|woff|woff2)$/,
        use: [
          {
            loader:'file-loader',
            options:{
              name:'[name].[hash].[ext]',
              publicPath:''
            }
          }
        ],
      }
    ]
  }
};
