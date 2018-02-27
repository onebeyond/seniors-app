import {
  SHOW_ERROR, CLOSE_ERROR, OPEN_FILTER, CLOSE_FILTER,
} from '../../actions/ui/ui';


const initiaUi = {
  filterOpen: false,
  error: false,
  loading: false,
  data: []
};

export function ui(state = initiaUi, action) {
  let nextState;
  switch (action.type) {
    case SHOW_ERROR:
      nextState = {
        error: action.payload.error
      };
      break;
    case CLOSE_ERROR:
      nextState = {
        error: false
      };
      break;
    case OPEN_FILTER:
      nextState = {
        filterOpen: true
      };
      break;
    case CLOSE_FILTER:
      nextState = {
        filterOpen: false
      };
      break;
    default:
      return state;
  }
  return nextState || state;
}
