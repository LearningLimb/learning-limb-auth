'use strict';

const root = require('@ddlees/module-root');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const DashboardPlugin = require('webpack-dashboard/plugin');
const Utils = require('./utils');

exports.config = Utils.isProduction ? root.require('build/webpack.prod') : root.require('webpack.config');

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