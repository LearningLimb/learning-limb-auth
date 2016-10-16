'use strict';
const express = require('express');
const router = express.Router();
const Utils = require('../../lib/utils');
const facebookRouter = require('./facebook');
const googleRouter = require('./google');

if (Utils.isFacebookAuthEnabled) router.use('/facebook', facebookRouter);
if (Utils.isGoogleAuthEnabled) router.use('/google', googleRouter);

router.get('/authenticated', (req, res) => {
   if (req.isAuthenticated()) {
       return res.json(req.user);
   } else {
       res.status(401).send();
   }
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/home');
});

module.exports = router;