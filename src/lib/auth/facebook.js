const FacebookStrategy = require('passport-facebook').Strategy;
const verifyProvider = require('./verifyProvider');

module.exports = new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: `${process.env.REDIRECT_HOST}/auth/facebook/callback`,
  passReqToCallback: true,
  profileFields: ['id', 'displayName', 'first_name', 'last_name', 'gender', 'photos', 'email']
}, verifyProvider('facebook'));