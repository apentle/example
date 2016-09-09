/**
 * Copyright (c) 2016 Apentle.com
 *
 * This source code is licensed under the MIT-style license found in
 * the LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

const React = require('react');
const {Text, View} = require('react-native');

import {styles} from 'react-native-theme';

if (__DEV__) { // hot reload dependencies
  require('../styles');
  require('../i18n');
}

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {__('welcome')}
        </Text>
        <Text style={styles.instructions}>
          {__('get_started')}
        </Text>
      </View>
    );
  }
}

module.exports = App;
