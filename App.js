/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableHighlight
} from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppNavigation from './src/Navigation';

import configureStore from './src/configureStore.js';

const { width } = Dimensions.get('window');

type Props = {};
class App extends Component {
  constructor(props) {
    super(props);

    this.store = configureStore();
  }

  render() {
    return (
      <Provider store={this.store}>
        <AppNavigation />
      </Provider>
    );
  }
}

export default App;
