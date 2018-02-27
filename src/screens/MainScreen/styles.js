import {
  StyleSheet,
  Dimensions
} from 'react-native';


const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  header:{
    backgroundColor: '#61DAFB',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    height: 50,
  },
  main:{
    backgroundColor: '#2f2f2f',
    flex: 1,
    width,
  }
});