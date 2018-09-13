import { EXECUTE_SEARCH } from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case EXECUTE_SEARCH:
      return [...action.payload];
    default:
      return state;
  }
};
