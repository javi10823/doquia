import {
  SET_SPECIALITY,
  SET_PARTICULAR,
  SET_PREPAID,
  SET_SOCIALWORK,
  SET_PLAN,
  SET_COBERTURE,
  SET_PREVIOUS_SCREEN,
  SET_RANGE,
  SET_COORDS,
} from '../actions/types';

const initialState = {
  speciality: null,
  particular: false,
  prepaid: null,
  socialwork: null,
  plan: null,
  coberture: null,
  range: 5,
  previousScreen: '',
  coords: { latitude: 0, longitude: 0 },
};


export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SPECIALITY:
      return { ...state, speciality: action.payload };
    case SET_COBERTURE:
      return { ...state, coberture: action.payload };
    case SET_PARTICULAR:
      return { ...state, particular: action.payload };
    case SET_PREPAID:
      return { ...state, prepaid: action.payload };
    case SET_SOCIALWORK:
      return { ...state, socialwork: action.payload };
    case SET_PLAN:
      return { ...state, plan: action.payload };
    case SET_PREVIOUS_SCREEN:
      return { ...state, previousScreen: action.payload };
    case SET_RANGE:
      return { ...state, range: action.payload };
    case SET_COORDS:
      return { ...state, coords: action.payload };
    default:
      return state;
  }
};
