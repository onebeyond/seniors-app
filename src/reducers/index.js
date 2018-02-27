import { combineReducers } from 'redux';

import { user } from './user/user';
import { ui } from './ui/ui';


const AppReducer = combineReducers({
  root: combineReducers({
    user,
    ui
  })
});

const RootReducer = (state = { root: {}}, action) => {
  if (action.type === 'TOTAL_LOGOUT') {
    state = undefined;
  }
  return AppReducer(state, action);
};


export default RootReducer;
