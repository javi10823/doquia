import {
  navBarBackgroundColor,
  navBarTextColor,
  navBarButtonColor,
} from '../../config/theme/colors';

const goEstablishment = (navigator) => {
  navigator.push({
    screen: 'doquia.Establishment',
    overrideBackPress: true,
    title: 'Guardia',
    backButtonTitle: '',
    leftButtonTitle: '',
    navigatorStyle: {
      navBarBackgroundColor,
      navBarTextColor,
      navBarNoBorder: true,
      navBarTextFontSize: 16,
      navBarButtonColor,
    },
    navigatorButtons: {},
  });
};

const goPharmacy = (navigator) => {
  navigator.push({
    screen: 'doquia.Pharmacy',
    overrideBackPress: true,
    title: 'Farmacia',
    backButtonTitle: '',
    leftButtonTitle: '',
    navigatorStyle: {
      navBarBackgroundColor,
      navBarTextColor,
      navBarNoBorder: true,
      navBarTextFontSize: 16,
      navBarButtonColor,
    },
    navigatorButtons: {},
    // passProps: { pharmacy },
  });
};

export { goEstablishment, goPharmacy };
