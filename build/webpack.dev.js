var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: path.join(__dirname, '..', 'dist'),
        publicPath: '/public/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
});
