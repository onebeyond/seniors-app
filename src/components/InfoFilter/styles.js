import {
  StyleSheet,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
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