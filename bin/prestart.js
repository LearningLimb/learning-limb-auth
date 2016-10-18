#! /usr/bin/env node
'use strict';
const env = require('node-env-file');
const root = require('@ddlees/module-root');
const shell = require('shelljs');
const DB_PATH = `${root.path}/tmp/db`;

try {
    env(`${root.path}/development.env`);
} catch (e) {
    if (process.env.NODE_ENV !== 'production'){
        console.log(`
    ///////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////
    //                                                                               //
    //  WARNING: Starting server in development mode without a development.env file  //
    //                                                                               //   
    ///////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////
        `);
    }
}

if (process.env.NODE_ENV !== 'production') {
    if (!shell.which('mongod')) {
        shell.echo('Please install MongoDB to run locally');
        process.exit(1);
    } else {
        shell.mkdir('-p', DB_PATH);
        shell.exec(`mongod --dbpath=${DB_PATH}`, {async:true, silent: true});
    }
}