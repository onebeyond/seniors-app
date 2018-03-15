import AppNavigator from '../../navigation/navStack';

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Login')
);

export function navReducer (state = initialState, action) {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
}
