import React from 'react'
import {
	View,
	StyleSheet,
	Text,
	Dimensions
} from 'react-native'

const {height, width} = Dimensions.get('window');

const FilterScreen = () => 
	<View style={styles.main}>
		<Text>ListScreen</Text>
	</View>

const styles = StyleSheet.create({
  main:{
    backgroundColor: '#2f2f2f',
    flex: 1,
    width: width
  }
});

export default FilterScreen;