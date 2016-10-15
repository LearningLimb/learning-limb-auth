#!/usr/bin/env node
'use strict';

const shell = require('shelljs');

shell.exec('npm run typings install');

if (process.env.NPM_CONFIG_PRODUCTION) {
    shell.exec('npm run build');
}
