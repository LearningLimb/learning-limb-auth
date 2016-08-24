#! /usr/bin/env node
'use strict';
let root = require('@ddlees/module-root');
let pkg = root.require('package.json');
let debug = require('debug')(`${pkg.name}:server`);
let http = require('http');

let app = root.require('src/server/app');
const PORT = process.env.PORT || '3000';

/**
 * Get port from environment and store in Express.
 */
app.set('port', PORT);

/**
 * Create HTTP server.
 */
let server = http.createServer(app);

/**
 * Event listener for HTTP server "error" event.
 */
server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof PORT === 'string'
    ? 'Pipe ' + PORT
    : 'Port ' + PORT;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      debug(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      debug(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
});

/**
 * Event listener for HTTP server "listening" event.
 */
server.on('listening', () => {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
});

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(app.get('port'));
