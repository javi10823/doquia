import { SET_PREPAIDS } from '../actions/types';


const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PREPAIDS:
      return [...action.payload];
    default:
      return state;
  }
};
