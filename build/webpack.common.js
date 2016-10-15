var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const SRC_PATH = path.join(__dirname, '../src/client');

module.exports = {
  entry: {
    polyfills: path.join(SRC_PATH, 'polyfills.ts'),
    vendor: path.join(SRC_PATH, 'vendor.ts'),
    app: path.join(SRC_PATH, 'main.ts')
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module: {
    loaders: [{
      test: /\.ts$/,
      loader: 'awesome-typescript-loader'
    }, {
      test: /\.html$/,
      loader: 'html'
    }, {
      test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file?name=assets/[name].[hash].[ext]'
    }, {
      test: /\.scss$/,
      include: `${SRC_PATH}/modules`,
      loader: 'css-to-string-loader!css?sourceMap!sass?sourceMap'
    }, {
      test: /\.scss$/,
      exclude: `${SRC_PATH}/modules`,
      loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap')
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/client/index.html',
      favicon: 'src/client/favicon.png'
    }),

    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      Tether: 'tether',
      'window.Tether': 'tether'
    })
  ]
};