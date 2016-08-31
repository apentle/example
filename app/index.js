/**
 * Copyright (c) 2016 Apentle.com
 *
 * This source code is licensed under the MIT-style license found in
 * the LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

const React = require('react');
const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = require('react-native');
const { Provider } = require('react-redux');
const theme = require('react-native-theme');

module.exports = function() {
  // Bootstrap environment
  require('./bootstrap')();

  // Create root component
  class Root extends React.Component {
    componentDidMount() {
      theme.setRoot(this);
    }

    componentWillUnmount() {
      theme.setRoot();
    }

    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            {__('welcome')}
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.[android|ios].js
          </Text>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

  AppRegistry.registerComponent('Example', () => Root);
};
