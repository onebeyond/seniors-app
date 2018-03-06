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
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import MainScreen from './src/screens/MainScreen';

import configureStore from './src/configureStore.js';

import Login from './src/components/Login';

const { width } = Dimensions.get('window');

type Props = {};
class App extends Component {
  constructor(props){
    super(props)
    
    this.store = configureStore();
  } 

  render() {
    return (
      <Provider store={this.store}>
        <Login/>
      </Provider>
    );
  }
}


export default App;
