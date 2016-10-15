#! /usr/bin/env node
'use strict';

const root = require('@ddlees/module-root');
const shell = require('shelljs');
const DB_PATH = `${root.path}/tmp/db`;

if (process.env.NODE_ENV !== 'production') {
    if (!shell.which('mongod')) {
        shell.echo('Please install MongoDB to run locally');
        process.exit(1);
    } else {
        shell.mkdir('-p', DB_PATH);
        shell.exec(`mongod --dbpath=${DB_PATH}`, {async:true, silent: true});
    }
}