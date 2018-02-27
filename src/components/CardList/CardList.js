import React from 'react';
import Card from '../Card';
import {
	View,
	StyleSheet,
	Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

const CardList = ({ data, index }) =>
	<View style={styles.main}>
		{ data.map((assistant) => <Card assistant={assistant}/>) }
	</View>

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#2f2f2f',
    flex: 1,
    width
	}
});

export default CardList;