import { combineReducers } from 'redux';

import { candidates } from './candidates/candidates';
import { ui } from './ui/ui';


const AppReducer = combineReducers({
  root: combineReducers({
    candidates,
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
