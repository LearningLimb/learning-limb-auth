'use strict';
let root = require('@ddlees/module-root');
let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
  res.json(root.require('package.json'));
});

module.exports = router;
