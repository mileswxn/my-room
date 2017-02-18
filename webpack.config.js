var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var publicPath = __dirname + '/public';
var NODE_ENV = process.env.NODE_ENV || 'develop';


module.exports = {
  watch: NODE_ENV === 'develop',
  entry: './src/app.js',
  output: {
    path: __dirname,
    filename: 'public/main.js',
    publicPath: '/public/'
  },
  devtool: '#sourcemap',
  plugins: [
    // new webpack.DefinePlugin(
    //   {
    //     'process.env': {
    //       'NODE_ENV': JSON.stringify(NODE_ENV)
    //     }
    //   }),
    new ExtractTextPlugin('public/app.css')
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      },
      {test: /\.(jpg|png|svg|ttf|woff2|woff|eot)(\?.*)?$/, loader: "file?name=tmp/assets/[name]-[hash].[ext]"},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract( "css?camelCase&modules&sourceMap&localIdentName=[local]--from--[path][name][ext]&root=" + publicPath + "!sass?sourceMap")}, //autoprefix
      {test: /\.css$/, loader: ExtractTextPlugin.extract("css?sourceMap&root=" + publicPath + "")} //autoprefix
    ]
  },
  devServer: {
    publicPath: '/',
    port: 9000
  }
};