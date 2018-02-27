import {
  FOO
} from '../../actions/ui/ui';


const initiaUi = {
  foo: 0,
};

export function ui(state = initiaUi, action) {
  let nextState;
  switch (action.type) {
    case FOO:
      nextState = {
        foo: state.ui.foo + 1
      };
      break;
    default:
      return state;
  }
  return nextState || state;
}
