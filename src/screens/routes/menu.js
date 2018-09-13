import {
  navBarBackgroundColor,
  navBarTextColor,
  navBarButtonColor,
} from '../../config/theme/colors';

const goMenu = (navigator) => {
  navigator.push({
    screen: 'doquia.Menu',
    overrideBackPress: true,
    title: 'Seleccione especialidad',
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

export default goMenu;
