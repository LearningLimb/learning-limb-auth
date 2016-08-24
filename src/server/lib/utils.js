'use strict';

class Utils {
    get isProduction() {
        return process.env.NODE_ENV === 'production';
    }
}

module.exports = new Utils();