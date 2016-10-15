const mongoose = require('mongoose');
const ProfileSchema = require('./profile');

module.exports = mongoose.Schema({
    name: {
        // The family name of this user, or "last name" in most Western languages.
        familyName: String,

        // The given name of this user, or "first name" in most Western languages.
        givenName: String,

        // The middle name of this user.
        middleName: String
    },
    local: {
        email: String,
        password: String,
    },
    facebook: ProfileSchema,
    google: ProfileSchema
});