'use strict';
const express = require('express');
const router = express.Router();
const auth = require('../../lib/auth');

router.get('/', auth.authenticate('facebook', {scope: 'public_profile'}));

router.get('/callback', auth.authenticate('facebook', {
    successRedirect: '/home',
    failureRedirect: '/login'
}));

module.exports = router;