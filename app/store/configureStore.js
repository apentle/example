/**
 * Copyright (c) 2016 Apentle.com
 *
 * This source code is licensed under the MIT-style license found in
 * the LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

const {applyMiddleware, createStore} = require('redux');

import thunk from 'redux-thunk'; // es-module
const createLogger = require('redux-logger');

const reducers = require('redux-reducers-hub');

// f8app style logger
// @see http://makeitopen.com
var isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
var logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});

/**
 * configureStore - create redux-store
 *
 * @param  {function} onComplete callback after init store
 * @returns {object}             redux-store
 */
function configureStore(onComplete) {
  // Apply middleware
  var middlewares = [thunk];
  events.emit('middlewaresWillApply', middlewares);
  middlewares.push(logger);

  // Create store
  var storeCreator = applyMiddleware.apply(null, middlewares)(createStore);
  var result = {}; // {store: <created store>}
  events.emit('storeWillCreate', storeCreator, reducers, onComplete, result);

  if (result.store === undefined) {
    result.store = storeCreator(reducers);
    setTimeout(onComplete, 0);
  }

  // allow access store from chrome
  if (isDebuggingInChrome) {
    window.store = result.store;
  }
  return result.store;
}

module.exports = configureStore;
