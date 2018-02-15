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
import * as assistantApi from './src/api/assistant.api.js';


const {height, width} = Dimensions.get('window');


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

    this.switchFilter = this.switchFilter.bind(this)
  }

  switchFilter(){
    this.setState({filterOpen: !this.state.filterOpen})
  }

  componentDidMount(){
    this.setState({loading: true})
    assistantApi.fetchData({})
      .then((response) => 
        this.setState({data: response.data, loading: false, error: false})
        )
      .catch((err)=>
        this.setState({data: [], loading: false, error: true}))
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
         
         <Header title="seniors" rightBtnLabel="Filter" rightBtnAction={()=> this.switchFilter()}/>

          <View style={styles.main}>
            
            <Text style={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}>{this.state.filterOpen ? 'Filter' : 'List'}</Text>
            
            {this.state.loading && 
              <Text style={{color: '#fff'}}>loading..</Text>
            }
            {this.state.error && 
              <Text style={{color: '#fff'}}>error</Text>
            }
            {this.state.data.map(
              (assistant) => 
              <View key={assistant.personal.id} style={styles.card}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                  {assistant.personal.name}
                </Text>
                <Text>{assistant.price.range.from}-{assistant.price.range.to}{assistant.price.currency}/h</Text>
                <Text style={{fontWeight: 'bold'}}>Duties</Text>
                {assistant.skills.duties.map((duty) => <Text key={assistant.personal.id+duty+'duty'}>{duty}</Text>)}
                <Text style={{fontWeight: 'bold'}}>languages</Text>
                {assistant.skills.languages.map((lang) => <Text key={assistant.personal.id+lang+'lang'}>{lang}</Text>)}
                </View>
              )
            }

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
  card :{
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 3,
    minHeight: 50,
    padding: 10
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
