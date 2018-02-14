/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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

//import Header from './src/components/Commons/Header';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const {height, width} = Dimensions.get('window');


//<Header title="seniors" rightBtnLabel="Filter" rightBtnAction="b"/>

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
         
          <View style={styles.header}>
            
            <View style={{width: 50}}>
              <Text></Text>
            </View>

            <View style={{flex: 1, alignItems: 'center'}}>
              <Text>Seniors</Text>
            </View>
            
            <TouchableHighlight style={{width: 50}}>
              <Text> filter </Text>
            </TouchableHighlight>

          </View>

          <View style={styles.main}>
            
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
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
  header:{
    backgroundColor: '#61DAFB',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: width,
    height: 50,
  },
  main:{
    backgroundColor: '#2f2f2f',
    flex: 1,
    width: width
  }
});
