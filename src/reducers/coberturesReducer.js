import { SET_COBERTURES } from '../actions/types';


const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_COBERTURES:
      return [...action.payload];
    default:
      return state;
  }
};
