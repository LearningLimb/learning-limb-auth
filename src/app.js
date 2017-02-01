'use strict';
const pkg = require('../package.json');
const express = require('express');
const log = require('debug')(`${pkg.name}:app`);
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');
const cors = require('cors');
const Utils = require('./lib/utils');
const db = require('./lib/db');
const auth = require('./lib/auth');
const routes = require('./routes');

let app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(session({
    name: 'sessionId',
    secret: process.env.SESSION_SECRET,
    store: new MongoStore({ mongooseConnection: db }),
    resave: true,
    saveUninitialized: true
}));
app.use(auth.initialize());
app.use(auth.session());
app.use(flash());
app.use(cookieParser());

app.use(routes);

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