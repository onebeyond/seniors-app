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
import { StackNavigator } from 'react-navigation';

import MainScreen from './src/screens/MainScreen';
import Login from './src/components/Login';

import configureStore from './src/configureStore.js';


const { width } = Dimensions.get('window');

{/*
  TODO:
    1. Here some usefull links:
      - https://m.oursky.com/how-we-restructured-our-app-with-react-navigation-98a89e219c26
      - https://github.com/react-navigation/react-navigation/tree/master/examples/ReduxExample
      - Este el mejor https://github.com/shubhnik/redux-react-navigation-demos/tree/master/src
      - https://medium.freecodecamp.org/managing-state-in-a-react-navigation-app-with-redux-6d0b680fb595
      - Curso: https://www.udemy.com/the-complete-react-native-and-redux-course/
    3. 
*/
}
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
