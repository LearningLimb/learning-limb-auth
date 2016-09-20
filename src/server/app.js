'use strict';
const pkg = require('../../package.json');
const express = require('express');
const log = require('debug')(`${pkg.name}:app`);
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const Utils = require('./lib/utils');
const apiRouter = require('./routes/api');
const publicRouter = require('./routes/public');
const spaRouter = require('./routes/spa');

let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());

app.use('/api', apiRouter);
app.use('/public', publicRouter);
app.use('/', spaRouter);

// error handlers

// development error handler
// will print stacktrace
if (!Utils.isProduction) {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
        log(err);
    });
}

module.exports = app;
