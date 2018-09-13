import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';


import {
  AsyncStorage,
} from 'react-native';

import reducer from '../reducers';

import { Onboarding1, Onboarding2 } from './Onboarding';
import Gps from './Onboarding/Gps';
import { Home, HomeListResults, HomeMapResults } from './Home';
import Specialities from './Params/Specialities';
import MedicalCoberture from './Params/MedicalCoberture';
import Prepaids from './Params/Prepaids';
import SocialWorks from './Params/SocialWorks';
import Plans from './Params/Plans';
import Establishment from './Establishment';
import Pharmacy from './Establishment/Pharmacy';
import Commentary from './Establishment/Commentary';
import Thanks from './Establishment/Thanks';
import Menu from './Menu';
import AdvancedSearch from './AdvancedSearch';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

const screenHome = 'doquia.Home';
let initialScreen = '';

async function getInitialScreen() {
  try {
    const screenOnboarding1 = 'doquia.Onboarding1';
    const value = await AsyncStorage.getItem('@firstLoad');

    if (value != null) {
      initialScreen = screenHome;
    } else {
      initialScreen = screenOnboarding1;
    }

    return initialScreen;
  } catch (error) {
    // console.log(`Error retrieving data${error}`);
    initialScreen = screenHome;
    return initialScreen;
  }
}


// register all screens of the app (including internal ones)
export default function registerScreens() {
  Navigation.registerComponent('doquia.Onboarding1', () => Onboarding1);
  Navigation.registerComponent('doquia.Onboarding2', () => Onboarding2);
  Navigation.registerComponent('doquia.Gps', () => Gps);
  Navigation.registerComponent('doquia.Home', () => Home, store, Provider);
  Navigation.registerComponent('doquia.HomeListResults', () => HomeListResults, store, Provider);
  Navigation.registerComponent('doquia.HomeMapResults', () => HomeMapResults, store, Provider);
  Navigation.registerComponent('doquia.Specialities', () => Specialities, store, Provider);
  Navigation.registerComponent('doquia.MedicalCoberture', () => MedicalCoberture, store, Provider);
  Navigation.registerComponent('doquia.Prepaids', () => Prepaids, store, Provider);
  Navigation.registerComponent('doquia.SocialWorks', () => SocialWorks, store, Provider);
  Navigation.registerComponent('doquia.Plans', () => Plans, store, Provider);
  Navigation.registerComponent('doquia.Establishment', () => Establishment, store, Provider);
  Navigation.registerComponent('doquia.Pharmacy', () => Pharmacy, store, Provider);
  Navigation.registerComponent('doquia.Commentary', () => Commentary, store, Provider);
  Navigation.registerComponent('doquia.Thanks', () => Thanks, store, Provider);
  Navigation.registerComponent('doquia.Menu', () => Menu);
  Navigation.registerComponent('doquia.AdvancedSearch', () => AdvancedSearch, store, Provider);

  const value = getInitialScreen();
  return value;
}
