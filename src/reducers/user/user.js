import {
  BAR
} from '../../actions/ui/ui';


const initiaUser = {
  bar: 0,
};

export function user(state = initiaUser, action) {
  let nextState;
  switch (action.type) {
    case BAR:
      nextState = {
        count: state.user.bar + 1
      };
      break;
    default:
      return state;
  }
  return nextState || state;
}
