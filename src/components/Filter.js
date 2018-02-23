import React from 'react'
import {
	View,
	StyleSheet,
	Text,
	Dimensions,
	TouchableHighlight
} from 'react-native'

const { height } = Dimensions.get('window');

const duties = [ 'Lavar', 'Planchar', 'Cocinar', 'Enfermería'];
const languages = [ 'Español', 'Vasco', 'Francés', 'Inglés', 'Gallego'];

const Filter = ({ changeFilter }) =>
	<View style={styles.filter}>
		<Text style={{ fontWeight: 'bold', fontSize: 20 }}>Duties</Text>
		{ duties.map((duty) =>
			<TouchableHighlight key={duty} onPress={() => changeFilter('duties', duty)} style={{ width: 100 }}>
				<Text>{duty}</Text>
			</TouchableHighlight>
		)
		}
		<Text style={{ fontWeight: 'bold', fontSize: 20 }}>Languages</Text>
		{ languages.map((lang) =>
			<TouchableHighlight key={lang} onPress={() => changeFilter('languages', lang)} style={{ width: 100 }}>
				<Text>{lang}</Text>
			</TouchableHighlight>
		)
		}
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