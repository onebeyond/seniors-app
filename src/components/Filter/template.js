import React, { Component } from 'react';
import CheckBox from 'react-native-checkbox';
import {
	View,
	StyleSheet,
	Text,
	Dimensions,
	TouchableHighlight
} from 'react-native';

import { styles } from './styles';


const { height } = Dimensions.get('window');

const duties = [ 'Lavar', 'Planchar', 'Cocinar', 'Enfermería'];
const languages = [ 'Español', 'Vasco', 'Francés', 'Inglés', 'Gallego'];
const initialFilter = {
	duties: {},
	languages: {},
	postCode: null,
	priceRange: {}
};


export default class Filter extends Component {
	constructor(props) {
		super(props);
		this.state = { filter: initialFilter }
    this.changeFilter = this.changeFilter.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
	}

	changeFilter(category, value) {
    const newFilter = this.state.filter;
    newFilter[category][value] = !this.state.filter[category][value];
    this.setState({ filter: newFilter });
	}

	resetFilter() {
		console.log('this.props', this.props);
		this.setState({
			filter: {
				duties: {},
				languages: {},
				postCode: null,
				priceRange: {}
			}
		});
	}

	render() {
		return (
				<View style={styles.filter}>
					<Text style={{ fontWeight: 'bold', fontSize: 20 }}>Duties</Text>
					{
						duties.map((duty) => {
							return <CheckBox
								checked={!!this.state.filter.duties[duty]}
								label={duty}
								key={duty}
								onChange={(value) => this.changeFilter('duties', duty)}
						/>
						})
					}
					<Text style={{ fontWeight: 'bold', fontSize: 20 }}>Languages</Text>
					{
						languages.map((lang) =>
						<CheckBox
							checked={!!this.state.filter.languages[lang]}
							label={lang}
							key={lang}
							onChange={(value) => this.changeFilter('languages', lang)}
						/>)
					}
					<TouchableHighlight onPress={() => this.props.refreshFilter({filter: this.state.filter})}>
						<Text style={styles.button}>
							Apply
						</Text>
					</TouchableHighlight>
					<TouchableHighlight onPress={() => this.resetFilter()}>
						<Text style={styles.button}>
							Reset
						</Text>
					</TouchableHighlight>
				</View>
		)
	}
}

{/* <TouchableHighlight onPress={() => this.props.onClick(this.state.filter)}> */}