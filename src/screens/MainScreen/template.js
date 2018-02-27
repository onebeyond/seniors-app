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

import Header from '../../components/commons/header/Header';
import Filter from '../../components/Filter/Filter';
import CardList from '../../components/CardList/CardList';
import * as assistantApi from '../../api/assistant.api.js';

import { styles } from './styles';


const { width } = Dimensions.get('window');

type Props = {};
export default class MainScreen extends Component<Props> {
  constructor(props){
    super(props)
    this.state = {
      error: false,
      //loading: false,
      data: []
    }

    this.switchFilter = this.switchFilter.bind(this);
    this.refreshData = this.refreshData.bind(this);
  }

  switchFilter(){
    const { openFilter, closeFilter, filterOpen} = this.props;
    filterOpen ? closeFilter() : openFilter();
  }

  refreshData(filter) {
    const { setLoadingState, showError} = this.props;
    return assistantApi.fetchData(filter)
      .then((response) => {
        this.setState({ data: response.data })
        setLoadingState({ loading: false });
      })
      .catch((err) => {
        this.setState({ data: [] });
        setLoadingState({ loading: false });
        showError({ error: err.message });
      });
  }



  componentDidMount(){
    this.props.setLoadingState({ loading: true });
    this.refreshData();
  }

  render() {

    const { filterOpen, loading, error } = this.props;
    
    return (
      <SafeAreaView style={styles.safeArea}>
        {<View style={styles.container}>
         <Header title="seniors" rightBtnLabel={filterOpen ? 'List' : 'Filter'} rightBtnAction={()=> this.switchFilter()}/>
          <View style={styles.main}>
            <Text style={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}>{filterOpen ? 'Filter' : 'List'}</Text>
            {loading && <Text style={{color: '#fff'}}>Loading..</Text>}
            {error && <Text style={{color: '#fff'}}>{error}</Text>}
            {filterOpen && <Filter onClick={this.refreshData}/>}
            {!filterOpen && <CardList data={this.state.data}/>}
          </View>
        </View>}
      </SafeAreaView>
    );
  }
}
