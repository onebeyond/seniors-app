import {
  StyleSheet,
  Dimensions
} from 'react-native';


const {height, width} = Dimensions.get('window');


export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 3,
    minHeight: 50,
    padding: 10
  },
});