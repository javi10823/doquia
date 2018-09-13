import { SET_PLANS } from '../actions/types';


const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLANS:
      return [...action.payload];
    default:
      return state;
  }
};
