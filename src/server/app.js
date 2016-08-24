'use strict';
const pkg = require('../../package.json');
const express = require('express');
const log = require('debug')(`${pkg.name}:app`);
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const Utils = require('./lib/utils');
const infoRouter = require('./routes/info');
const publicRouter = require('./routes/public');
const spaRouter = require('./routes/spa');

let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());

app.use('/api/info', infoRouter);
app.use('/public', publicRouter);
app.get('/', spaRouter);

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
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
