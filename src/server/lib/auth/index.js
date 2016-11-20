const passport = require('passport');
const Utils = require('../utils');
const User = require('../db/user');
const facebook = require('./facebook');
const google = require('./google');
const localLogin = require('./local-login');
const localSignup = require('./local-signup');

passport.use('local-signup', localSignup);
passport.use('local-login', localLogin);

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