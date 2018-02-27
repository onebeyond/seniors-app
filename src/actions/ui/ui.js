export const SHOW_ERROR = 'SHOW_ERROR';
export const CLOSE_ERROR = 'CLOSE_ERROR';
export const OPEN_FILTER = 'OPEN_FILTER';
export const CLOSE_FILTER = 'CLOSE_FILTER';
export const SET_LOADING_STATE = 'SET_LOADING_STATE';


export function showError(error) {
  return {
    type: SHOW_ERROR,
    payload: error
  };
}

export function closeError() {
  return {
    type: CLOSE_ERROR
  };
}

export function openFilter() {
  return {
    type: OPEN_FILTER
  };
}

export function closeFilter() {
  return {
    type: CLOSE_FILTER
  };
}

export function setLoadingState(payload) {
  return {
    type: SET_LOADING_STATE,
    payload
  };
}

