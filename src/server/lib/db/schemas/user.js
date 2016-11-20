const mongoose = require('mongoose');
const ProfileSchema = require('./profile');
const bcrypt = require('bcrypt-nodejs');

const User = mongoose.Schema({
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

User.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = User;