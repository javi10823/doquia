import { Navigation } from 'react-native-navigation';

import registerScreens from './src/screens';

registerScreens() // this is where you register all of your app's screens
  .then(value => Navigation.startSingleScreenApp({
    screen: {
      screen: value, // unique ID registered with Navigation.registerScreen
    },
  }));
