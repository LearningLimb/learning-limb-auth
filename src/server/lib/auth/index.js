const passport = require('passport');
const Utils = require('../utils');
const User = require('../db/user');
const facebook = require('./facebook');
const google = require('./google');

if (Utils.isFacebookAuthEnabled) {
  passport.use(facebook);
}

if (Utils.isGoogleAuthEnabled) {
  passport.use(google);
}

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

module.exports = passport;