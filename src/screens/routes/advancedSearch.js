import {
  navBarBackgroundColor,
  navBarTextColor,
  navBarButtonColor,
} from '../../config/theme/colors';

const goAdvancedSearch = (navigator) => {
  navigator.push({
    screen: 'doquia.AdvancedSearch',
    overrideBackPress: true,
    title: 'Búsqueda avanzada',
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

export default goAdvancedSearch;
