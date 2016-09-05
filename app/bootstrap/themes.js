/**
 * Copyright (c) 2016 Apentle.com
 *
 * This source code is licensed under the MIT-style license found in
 * the LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

/**
 * Default theme to run app
 *
 * You can change this name to your custom theme.
 * This name does not include 'apentle-theme-' prefix
 *
 * @const {string}
 */
const DEFAULT_THEME = 'default';

const loadModule = require('./loadModule');

module.exports = function() {
  loadModule(require('apentle-theme-default'), DEFAULT_THEME || 'default');
};
