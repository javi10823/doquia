import { SET_SPECIALITIES } from '../actions/types';


const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SPECIALITIES:
      return [...action.payload];
    default:
      return state;
  }
};
