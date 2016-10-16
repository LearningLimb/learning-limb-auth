'use strict';
const express = require('express');
const router = express.Router();
const auth = require('../../lib/auth');

router.get('/', auth.authenticate('google', {scope: 'profile'}));

router.get('/callback', auth.authenticate('google', {
    successRedirect: '/home',
    failureRedirect: '/login'
}));

module.exports = router;