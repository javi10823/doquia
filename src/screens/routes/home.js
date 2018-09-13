import {
  navBarBackgroundColor,
  navBarTextColor,
  navBarButtonColor,
} from '../../config/theme/colors';

const goHome = (navigator) => {
  navigator.push({
    screen: 'doquia.Home',
    overrideBackPress: true,
    title: 'Home',
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

const goHomeMapResults = (navigator) => {
  navigator.push({
    screen: 'doquia.HomeMapResults',
    title: '',
    animationType: 'fade',
  });
};

const goHomeListResults = (navigator) => {
  navigator.push({
    screen: 'doquia.HomeListResults',
    title: '',
    animationType: 'fade',
  });
};

export { goHome, goHomeMapResults, goHomeListResults };
