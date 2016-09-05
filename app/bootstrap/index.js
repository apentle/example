/**
 * Copyright (c) 2016 Apentle.com
 *
 * This source code is licensed under the MIT-style license found in
 * the LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

const theme = require('react-native-theme');

module.exports = function() {
  // Bootstrap current app
  theme.addComponents(require('../containers'));
  theme.addComponents(require('../components'));
  require('../styles').forEach(function(styles) {
    theme.add(styles);
  });

  // Bootstrap themes
  require('./themes')();

  // Bootstrap plugins
  require('./plugins')();
};
