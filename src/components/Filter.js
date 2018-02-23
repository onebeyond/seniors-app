import React from 'react'
import {
	View,
	StyleSheet,
	Text,
	Dimensions
} from 'react-native'

const { height } = Dimensions.get('window');

const duties = [ 'Lavar', 'Planchar', 'Cocinar', 'Enfermería'];
const languages = [ 'Español', 'Vasco', 'Francés', 'Inglés', 'Gallego'];

const Filter = ({ changeDuty }) =>
	<View style={styles.filter}>
		<Text style={{ fontWeight: 'bold', fontSize: 20 }}>Duties</Text>
		{duties.map((duty) => <Text>{duty}</Text>)}
		<Text style={{ fontWeight: 'bold', fontSize: 20 }}>Languages</Text>
		{languages.map((lang) => <Text>{lang}</Text>)}
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