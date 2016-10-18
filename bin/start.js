#! /usr/bin/env node
'use strict';
require('./prestart');
const root = require('@ddlees/module-root');
const shell = require('shelljs');

const WWW = `${root.path}/bin/www.js`;
const NODE = process.env.NODE_ENV === 'production' ?
  'node' :
  `${root.path}/node_modules/.bin/nodemon --config ${root.path}/nodemon.json`;

shell.exec(`${NODE} ${WWW}`, {async:true});