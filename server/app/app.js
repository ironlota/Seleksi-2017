'use strict';

/**
 * Application module
 * @module app/app
 */
console.log('::::::::::::::::::::::::::::');
console.log('::       movieFreak       ::');
console.log(':: Created by Ray Andrew  ::');
console.log('::            Adrian HP   ::');
console.log('::::::::::::::::::::::::::::');
console.log(':: movieFreak initialized ::');
console.log('::::::::::::::::::::::::::::');

/**
 * Load dependencies
 */
const express = require('express');
const config = require('config');
const path = require('path');
const fs = require('fs-readdir-recursive');
const bluebird = require('bluebird');

/**
 * Creating apps
 */
var app = express();
global.appDir = path.resolve(__dirname);

/**
 * Creating logger
 */
const winston = require('./components/winston');

/**
 * Set up middleware
 */
winston.log('verbose', 'Setting up express middleware...');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

/**
 * Setting up Mongoose connection to MongoDB
 */
winston.log('verbose', 'Opening connection to MongoDB...');
const mongoose = require('mongoose');

mongoose.Promise = bluebird.Promise;
const option = {
  server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
};
mongoose.connect(config.get('mongodb')['url'], option).then(
    () => {
      winston.verbose('Connect successfully with MongoDB');
    },
    (err) => {
      winston.error(err);
    }
);

/**
 * Setting up CORS
 */
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

/**
 * Load and applying routes
 */

const projectPath = require('../../project-path');
app.use(express.static(projectPath.clientBuildDir));

const routeDirectory = global.appDir;
fs(routeDirectory).filter(file => file.endsWith('.routes.js')).forEach((file) => {
  const routerPath = path.join(routeDirectory, file);
  const router = require(routerPath);
  if (!router.baseRoute) router.baseRoute = '/';
  const completeRoute = config.get('routePrefix') + router.baseRoute;
  let filePath = file.substring(file.indexOf('/') + 1);
  let fileName = filePath.slice(0, -10);
  winston.verbose('Using route %s...', completeRoute + fileName);
  app.use(completeRoute + fileName, router);
});

/**
 * Setting up error handler middleware
 */
winston.verbose('Setting up error handler middleware');
const errorHandler = require('api-error-handler');
app.use(errorHandler());

/**
 * Setting the public file
 */
app.use('/public', express.static(projectPath.clientBuildDir));
app.get('*', (req, res) => {
  res.sendFile(path.join(projectPath.clientBuildDir, 'index.html'));
});

module.exports = app;
