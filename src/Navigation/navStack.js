import { StackNavigator } from 'react-navigation';
import { DrawerNavigation } from './drawerStack';
import Login from '../components/Login';

/* const navigationOptions = (title, visible) => {
  return {
    title: title,
    header: visible || null
  };
}; */

const navigator = StackNavigator(
  {
    Login: {
      screen: Login
    },
    SideMenu: {
      screen: DrawerNavigation
    }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);

export default navigator;
