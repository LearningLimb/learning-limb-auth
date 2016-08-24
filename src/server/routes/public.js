'use strict';

const express = require('express');
const Utils = require('../lib/utils');
const webpack = require('../lib/webpack');

let router = express.Router();
let middleware = Utils.isProduction ? express.static(webpack.config.output.path) : webpack.middleware;

module.exports = router.use('/', middleware);
