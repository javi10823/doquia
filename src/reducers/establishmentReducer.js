import { SET_ESTABLISHMENT } from '../actions/types';

const initialState = {
  establishment: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ESTABLISHMENT:
      return { establishment: action.payload };
    default:
      return state;
  }
};
