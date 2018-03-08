import { StackNavigator } from 'react-navigation';
import Login from '../components/Login';
import MainScreen from '../screens/MainScreen';


const navigator = StackNavigator({
    login: {
        screen: Login
    },
    mainScreen: {
        screen: MainScreen
    }
})


export default navigator;