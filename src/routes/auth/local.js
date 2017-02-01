'use strict';
const express = require('express');
const router = express.Router();
const auth = require('../../lib/auth');

router.post('/register', auth.authenticate('local-signup'), (req, res) => res.json(req.user));

router.post('/login', auth.authenticate('local-login'), (req, res) => res.json(req.user));

module.exports = router;