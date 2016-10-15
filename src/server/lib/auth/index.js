const passport = require('passport');
const Utils = require('../utils');
const facebook = require('./facebook');
const User = require('../db/user');

if (Utils.isFacebookAuthEnabled) {
  passport.use(facebook);
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