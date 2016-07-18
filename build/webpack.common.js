var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

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
            loader: 'ts'
        }, {
            test: /\.html$/,
            loader: 'html'
        }, {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: 'file?name=assets/[name].[hash].[ext]'
        }, {
            test: /\.css$/,
            loader: 'css-to-string-loader!css-loader'
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/client/index.html'
        })
    ]
};
