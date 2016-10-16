'use strict';

class Utils {
    get isProduction() {
        return process.env.NODE_ENV === 'production';
    }

    get isFacebookAuthEnabled() {
        return process.env.FACEBOOK_APP_ID && process.env.FACEBOOK_APP_SECRET;
    }

    get isGoogleAuthEnabled() {
        return process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET;
    }
}

module.exports = new Utils();