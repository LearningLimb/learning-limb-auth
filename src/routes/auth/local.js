'use strict';
const express = require('express');
const router = express.Router();
const auth = require('../../lib/auth');

router.post('/register', auth.authenticate('local-signup'));

router.post('/login', auth.authenticate('local-login'));

module.exports = router;