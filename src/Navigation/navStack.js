import { StackNavigator } from "react-navigation";
import Login from "../components/Login";
import MainScreen from "../screens/MainScreen";

const navigator = StackNavigator(
  {
    Login: {
      screen: Login
    },
    MainScreen: {
      screen: MainScreen
    }
  },
  {
    initialRouteName: "Login"
  }
);

export default navigator;
