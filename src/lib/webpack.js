'use strict';

const root = require('@ddlees/module-root');
const Utils = require('./utils');

if (Utils.isProduction) {
    exports.config = root.require('build/webpack.prod');
} else {
    exports.config = root.require('webpack.config');

    const webpack = require('webpack');
    const webpackMiddleware = require('webpack-dev-middleware');
    const DashboardPlugin = require('webpack-dashboard/plugin');

    let compiler = webpack(exports.config);
    compiler.apply(new DashboardPlugin());

    exports.middleware = webpackMiddleware(compiler, {
        publicPath: '/',
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    });
}