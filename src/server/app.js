'use strict';
let pkg = require('../../package.json');

let express = require('express');
let log = require('debug')(`${pkg.name}:app`);
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let infoRouter = require('./routes/info');
let wwwRouter = require('./routes/www');


let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());

app.use('/api/info', infoRouter);
app.use(wwwRouter);

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
        log(err);
    });
}

module.exports = app;
