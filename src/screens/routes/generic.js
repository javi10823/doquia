import {
  navBarBackgroundColor,
  navBarTextColor,
  navBarButtonColor,
} from '../../config/theme/colors';

const goGeneric = (navigator, screenParam, title) => {
  navigator.push({
    screen: screenParam,
    overrideBackPress: true,
    title,
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

export default goGeneric;
