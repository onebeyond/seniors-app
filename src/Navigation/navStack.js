import { StackNavigator } from 'react-navigation';
import Login from '../components/Login';
import MainScreen from '../screens/MainScreen';

const navigationOptions = (title, visible) => {
  return {
    title: title,
    header: visible || null
  };
};

const navigator = StackNavigator(
  {
    Login: {
      screen: Login
    },
    MainScreen: {
      screen: MainScreen,
      navigationOptions: navigationOptions('MainScreen')
    }
  },
  {
    initialRouteName: 'Login'
  }
);

export default navigator;
