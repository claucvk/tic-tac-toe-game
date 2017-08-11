'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts
require('./assets/scripts/index.js');

// styles
require('./assets/styles/index.scss');

const authEvents = require('./games/events.js')

// On document ready
$(() => {
  authEvents.addHandlers()
})
