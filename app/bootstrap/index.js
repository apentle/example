/**
 * Copyright (c) 2016 Apentle.com
 *
 * This source code is licensed under the MIT-style license found in
 * the LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

const theme = require('react-native-theme');
const layout = require('react-native-theme/layout');
const EventEmitter = require('EventEmitter');
const addActions = require('./addActions');

module.exports = function() {
  // Allow hot reload themes and plugins
  if (__DEV__) {
    // Reset all hub data
    theme.reset();
    layout.reset();
    const actions = require('redux-actions-hub');
    const reducers = require('redux-reducers-hub');
    actions.reset();
    reducers.reset();
  }

  // Global event emitter
  global.events = new EventEmitter();

  // Bootstrap current app
  theme.addComponents(require('../containers'));
  theme.addComponents(require('../components'));
  require('../styles').forEach(function(styles) {
    theme.add(styles);
  });
  addActions(require('../actions'));
  require('../reducers')();

  // Bootstrap themes
  require('./themes')();

  // Bootstrap plugins
  require('./plugins')();
};
