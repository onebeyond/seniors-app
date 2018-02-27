export const SHOW_ERROR = 'SHOW_ERROR';
export const CLOSE_ERROR = 'CLOSE_ERROR';
export const OPEN_FILTER = 'OPEN_FILTER';
export const CLOSE_FILTER = 'CLOSE_FILTER';

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


