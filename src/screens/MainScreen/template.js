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
  ScrollView,
  Dimensions,
  TouchableHighlight
} from 'react-native';

import Header from '../../components/commons/header/Header';
import Filter from '../../components/Filter';
import FilterInfo from '../../components/FilterInfo';
import CardList from '../../components/CardList/CardList';
import * as assistantApi from '../../api/assistant.api.js';

import { styles } from './styles';


const { width } = Dimensions.get('window');

type Props = {};
export default class MainScreen extends Component<Props> {
  constructor(props){
    super(props)
    this.state = {
    }

    this.refreshData = this.refreshData.bind(this);
  }

  switchFilter(){
    const { openFilter, closeFilter, filterOpen} = this.props;
    filterOpen ? closeFilter() : openFilter();
  }


  getCandidates() {
    const { setAllCandidates, setLoadingState, showError } = this.props;
    assistantApi.fetchData()
      .then((response) => {
        setAllCandidates({ allCandidates: response.data });
        setLoadingState({ loading: false });
      })
      .catch((err) => {
        setLoadingState({ loading: false });
        showError({ error: err.message });
      });
  }

  refreshData(filter) {
    const { setLoadingState, showError, setAllCandidates, setMatchingCandidates, closeFilter, setCandidatesFilter } = this.props;
    setCandidatesFilter(filter);
    closeFilter();
    return assistantApi.fetchData(filter.filter)
      .then((response) => {
        setMatchingCandidates({ matchingCandidates: response.data });
        setLoadingState({ loading: false });
      })
      .catch((err) => {
        setLoadingState({ loading: false });
        showError({ error: err.message });
      });
  }


  componentDidMount(){
    this.props.setLoadingState({ loading: true });
    //this.refreshData();
    this.getCandidates();
  }

  render() {

    const { filterOpen, loading, error, allCandidates, candidatesFilter, matchingCandidates } = this.props;

    return (
      <SafeAreaView style={styles.safeArea}>
        {<View style={styles.container}>
         <Header title="seniors" rightBtnLabel={filterOpen ? 'List' : 'Filter'} rightBtnAction={()=> this.switchFilter()}/>
          <ScrollView style={styles.main}>
            <Text style={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}>{filterOpen ? 'Filter' : 'List'}</Text>
            {loading && <Text style={{color: '#fff'}}>Loading..</Text>}
            {error && <Text style={{color: '#fff'}}>{error}</Text>}
            {filterOpen &&
              <Filter data={allCandidates} refreshFilter={this.refreshData}/>
            }
            {!filterOpen &&
              <View style={styles.container}>
                <FilterInfo/>
                <CardList data={ candidatesFilter ? matchingCandidates : allCandidates}/>
              </View>
            }
          </ScrollView>
        </View>}
      </SafeAreaView>
    );
  }
}
