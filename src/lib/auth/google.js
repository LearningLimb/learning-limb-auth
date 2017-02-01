const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const verifyProvider = require('./verifyProvider');

module.exports = new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: `${process.env.REDIRECT_HOST}/auth/google/callback`,
  passReqToCallback: true,
  profileFields: ['id', 'displayName', 'first_name', 'last_name', 'gender', 'photos', 'email']
}, verifyProvider('google'));