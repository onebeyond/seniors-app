import React from 'react';
import CheckBox from 'react-native-check-box';
import {
	View,
	StyleSheet,
	Text,
	Dimensions
} from 'react-native';

const { height } = Dimensions.get('window');

const duties = [ 'Lavar', 'Planchar', 'Cocinar', 'Enfermería'];
const languages = [ 'Español', 'Vasco', 'Francés', 'Inglés', 'Gallego'];

const Filter = ({ changeFilter }) =>
	<View style={styles.filter}>
		<Text style={{ fontWeight: 'bold', fontSize: 20 }}>Duties</Text>
		{ duties.map((duty) => <CheckBox leftText={duty} key={duty} onClick={(value) => changeFilter('duties', duty)}/>) }
		<Text style={{ fontWeight: 'bold', fontSize: 20 }}>Languages</Text>
		{ languages.map((lang) => <CheckBox leftText={lang} key={lang} onClick={(value) => changeFilter('languages', lang)}/>) }
	</View>

const styles = StyleSheet.create({
  filter:{
    backgroundColor: '#fff',
		margin: 5,
		borderRadius: 3,
		height,
		padding: 10
  }
});

export default Filter;