'use strict';

var winston = require('winston');
var config = require('config');

winston.addColors({
  error: 'red',
  warn: 'yellow',
  info: 'cyan',
  verbose: 'grey',
  debug: 'blue',
  silly: 'magenta'
});

var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)(config.get('winston.console'))
  ],
  exceptionHandlers: [
    new (winston.transports.Console)(config.get('winston.console'))
  ],
  exitOnError: false
});

module.exports = logger;
