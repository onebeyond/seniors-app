import AppNavigator from "../../Navigation/navStack";

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams("Login")
);

const navigationReducer = (state = initialState, action) => {
  console.log(state, "navState");
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

export default navigationReducer;
