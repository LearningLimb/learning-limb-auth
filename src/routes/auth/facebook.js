'use strict';
const express = require('express');
const router = express.Router();
const auth = require('../../lib/auth');

router.get('/', auth.authenticate('facebook', {scope: 'public_profile'}));

router.get('/callback', auth.authenticate('facebook', {
    successRedirect: `${process.env.REDIRECT_HOST}/home`,
    failureRedirect: `${process.env.REDIRECT_HOST}/login`
}));

module.exports = router;