'use strict';
let express = require('express');
let router = express.Router();

let infoRouter = require('./info');

router.use('/info', infoRouter);

module.exports = router;