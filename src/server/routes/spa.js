'use strict';

const express = require('express');
const Utils = require('../lib/utils');
const webpack = require('../lib/webpack');

function fs(req, res) {
    res.sendFile(`${webpack.config.output.path}/index.html`);
}

function inMemory(req, res) {
    res.write(webpack.middleware.fileSystem.readFileSync(`${webpack.config.output.path}/index.html`));
    res.end();
}

let middleware = Utils.isProduction ? fs : inMemory;
let router = express.Router();
 
/**
 * Handle 404s and serve Single Page Application (SPA)
 */
module.exports = router.use(middleware);