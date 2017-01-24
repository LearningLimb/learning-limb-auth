'use strict';

const LocalStrategy = require('passport-local').Strategy;
const User = require('../db/user');

module.exports = new LocalStrategy({
    usernameField: 'local[email]',
    passwordField: 'local[password]',
    passReqToCallback: true
}, function (req, email, password, done) {
    setImmediate(() => {
        User.findOne({ 'local.email': email }, (err, user) => {
            if (err) return done(err);
            if (!user) return done(null, false, { message: 'No user found.' });
            if (!user.validPassword(password)) return done(null, false, { message: 'Wrong password.' });

            return done(null, user);
        });
    });
});