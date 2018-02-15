import React from 'react'
import {
	View,
	StyleSheet,
	Text,
	TouchableHighlight,
	Dimensions
} from 'react-native'

const {height, width} = Dimensions.get('window');

const Header = ({ rightBtnLabel, rightBtnAction, title }) => 
	<View style={styles.header}>
		<View style={{width: 50}}>
			<Text></Text>
		</View>

		<View style={{flex: 1, alignItems: 'center'}}>
			<Text>{title}</Text>
		</View>
			
		<TouchableHighlight onPress={() => rightBtnAction()} style={{width: 50}}>
			<Text> {rightBtnLabel} </Text>
		</TouchableHighlight>

	</View>

const styles = StyleSheet.create({
  header:{
	backgroundColor: '#61DAFB',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'row',
	width: width,
	height: 50,
  }
});

export default Header;