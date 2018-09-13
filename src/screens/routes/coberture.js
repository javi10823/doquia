import {
  navBarBackgroundColor,
  navBarTextColor,
  navBarButtonColor,
} from '../../config/theme/colors';

const goCoberture = (navigator) => {
  navigator.push({
    screen: 'doquia.MedicalCoberture',
    overrideBackPress: true,
    title: 'Seleccione cobertura',
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

export default goCoberture;
