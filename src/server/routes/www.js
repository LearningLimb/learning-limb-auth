'use strict';
const PRODUCTION = process.env.NODE_ENV === 'production';
let root = require('@ddlees/module-root');

let express = require('express');
let config = PRODUCTION ? root.require('build/webpack.prod') : root.require('webpack.config');

let router = express.Router();

if (PRODUCTION) {
    router.use('/public', express.static(config.output.path));

    // catch 404s and return to /index.html
    router.use(function(req, res, next) {
        res.sendFile(`${config.output.path}/index.html`);
    });
} else {
    let webpack = require('webpack');
    let webpackMiddleware = require('webpack-dev-middleware');

    let bundler = webpack(config);
    let middleware = webpackMiddleware(bundler, {
        publicPath: config.output.publicPath,
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    });

    router.use(middleware);

    // catch 404s and return to /index.html
    router.use(function(req, res, next) {
        res.write(middleware.fileSystem.readFileSync(`${config.output.path}/index.html`));
        res.end();
    });
}

module.exports = router;
