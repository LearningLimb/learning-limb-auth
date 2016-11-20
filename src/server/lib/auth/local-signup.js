'use strict';

const LocalStrategy = require('passport-local').Strategy;
const User = require('../db/user');

module.exports = new LocalStrategy({
    usernameField: 'local[email]',
    passwordField: 'local[password]',
    passReqToCallback: true
}, function(req, email, password, done) {

    User.findOne({ 'local.email': email }, (err, user) => {
        if (err) return done(err);
        if (user) return done(null, false, { message: 'That email is already registerd.'});

        let newUser = new User();

        newUser.local.email = email;
        newUser.local.password = newUser.generateHash(password);
        newUser.name.givenName = req.body.name.givenName;
        newUser.name.familyName = req.body.name.familyName;

        newUser.save((error) => {
            if (error) return done(error);

            return done(null, newUser);
        });
    });
});