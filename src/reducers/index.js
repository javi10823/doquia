import { combineReducers } from 'redux';
import paramsReducer from './paramsReducer';
import specialitiesReducer from './specialitiesReducer';
import prepaidsReducer from './prepaidsReducer';
import socialworksReducer from './socialworksReducer';
import plansReducer from './plansReducer';
import searchReducer from './searchReducer';
import coberturesReducer from './coberturesReducer';
import establishmentReducer from './establishmentReducer';

const rootReducer = combineReducers({
  params: paramsReducer,
  specialities: specialitiesReducer,
  cobertures: coberturesReducer,
  prepaids: prepaidsReducer,
  socialworks: socialworksReducer,
  plans: plansReducer,
  results: searchReducer,
  establishment: establishmentReducer,
});

export default rootReducer;
