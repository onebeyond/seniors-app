import React, { Component } from 'react';
import CheckBox from 'react-native-check-box';
import {
	View,
	StyleSheet,
	Text,
	Dimensions,
	TouchableHighlight
} from 'react-native';

const { height } = Dimensions.get('window');

const duties = [ 'Lavar', 'Planchar', 'Cocinar', 'Enfermería'];
const languages = [ 'Español', 'Vasco', 'Francés', 'Inglés', 'Gallego'];

export default class Filter extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      filter: {
        duties: {},
        languages: {},
        postCode: null,
        priceRange: {}
      }
    }
    this.changeFilter = this.changeFilter.bind(this);
	}

	changeFilter(category, value) {
    const newFilter = this.state.filter;
    newFilter[category][value] = !this.state.filter[category][value];
    this.setState({ filter: newFilter });
  }

	render() {
    return (
      <View style={styles.filter}>
				<Text style={{ fontWeight: 'bold', fontSize: 20 }}>Duties</Text>
				{ duties.map((duty) => <CheckBox leftText={duty} key={duty} onClick={(value) => this.changeFilter('duties', duty)}/>) }
				<Text style={{ fontWeight: 'bold', fontSize: 20 }}>Languages</Text>
				{ languages.map((lang) => <CheckBox leftText={lang} key={lang} onClick={(value) => this.changeFilter('languages', lang)}/>) }
				<TouchableHighlight>
					<Text style={styles.button}>
						Apply
					</Text>
				</TouchableHighlight>
				<TouchableHighlight>
					<Text style={styles.button}>
						Reset
					</Text>
				</TouchableHighlight>
		</View>
    );
	}
};

const styles = StyleSheet.create({
  filter:{
    backgroundColor: '#fff',
		margin: 5,
		borderRadius: 3,
		height,
		padding: 10
	},
	button: {
		borderWidth: 1,
		padding: 25,
		borderColor: 'white',
		padding: 10,
		color: 'white',
		width: 100,
		backgroundColor: 'blue',
		textAlign: 'center'
 }
});
