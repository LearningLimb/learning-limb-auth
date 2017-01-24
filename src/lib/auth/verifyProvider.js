'use strict';
const User = require('../db/user');

module.exports = function(provider) {

  return function(req, accessToken, refreshToken, profile, done) {

    if (!req.user) { // Not logged-in. Authenticate based on provider account.
      
      let predicate = {};
      predicate[`${provider}.id`] = profile.id;

      // find User based on provider id
      User.findOne(predicate, (error, user) => {
        if (error) return done(error);

        // if the user is found, then log them in
        if (user) {
          return done(null, user); // user found, return that user
        } else {
          // no user found with that provider id, create user
          let user = new User();
          user.name = profile.name;
          user[provider] = profile;
          user[provider].token = accessToken;

          // save user to db
          user.save((error) => {
            if (error) return done(error);
            return done(null, user);
          });
        }
      });
    } else {
      // Logged in. Associate account with user.  Preserve the login
      // state by supplying the existing user after association.

      let user = req.user;
      user[provider] = profile;
      user[provider].token = accessToken;

      // save updated user to db
      user.save((error) => {
        if (error) return done(error);
        return done(null, user);
      });
    }
  }
}