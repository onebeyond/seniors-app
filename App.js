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
import Filter from './src/components/Filter';
import CardList from './src/components/CardList';
import * as assistantApi from './src/api/assistant.api.js';

const { width } = Dimensions.get('window');

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props)
    this.state = {
      filterOpen: false,
      error: false,
      loading: false,
      data: []
    }

    this.switchFilter = this.switchFilter.bind(this);
  }

  switchFilter(){
    this.setState({filterOpen: !this.state.filterOpen});
  }

  refreshData(filter) {
    assistantApi.fetchData(filter)
      .then((response) => this.setState({ data: response.data, loading: false, error: false }))
      .catch((err) => this.setState({ data: [], loading: false, error: true }));
  }

  componentDidMount(){
    this.setState({ loading: true })
    this.refreshData();
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
         <Header title="seniors" rightBtnLabel="Filter" rightBtnAction={()=> this.switchFilter()}/>
          <View style={styles.main}>
            <Text style={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}>{this.state.filterOpen ? 'Filter' : 'List'}</Text>
            {this.state.loading && <Text style={{color: '#fff'}}>loading..</Text>}
            {this.state.error && <Text style={{color: '#fff'}}>error</Text>}
            {this.state.filterOpen && <Filter/>}
            {!this.state.filterOpen && <CardList data={this.state.data}/>}
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
    width,
    height: 50,
  },
  main:{
    backgroundColor: '#2f2f2f',
    flex: 1,
    width,
  }
});
