import {
  Platform,
} from 'react-native';

import { Navigation } from 'react-native-navigation';

const showMenu = (navigator) => {
  if (Platform.OS === 'ios') {
    Navigation.showModal({
      screen: 'doquia.Menu',
      overrideBackPress: true,
      // title: 'Modal',
      passProps: {},
      navigatorStyle: {},
      navigatorButtons: {},
      animationType: 'slide-up',
    });
  } else {
    navigator.push({
      screen: 'doquia.Menu',
      title: 'Búsqueda avanzada',
      backButtonTitle: '',
    });
  }
};

export default showMenu;
