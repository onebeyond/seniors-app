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

import Header from './src/components/Commons/Header';

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
  constructor(props){
    super(props)
    this.state = {
      filterOpen: false
    }

    this.switchFilter = this.switchFilter.bind(this)
  }

  switchFilter(){
    this.setState({filterOpen: !this.state.filterOpen})
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
         
         <Header title="seniors" rightBtnLabel="Filter" rightBtnAction={()=> this.switchFilter()}/>

          <View style={styles.main}>
            <Text style={{color: '#fff'}}>{this.state.filterOpen ? 'Filter' : 'List'}</Text>
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
    width: width,
  }
});
