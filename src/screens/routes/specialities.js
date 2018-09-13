import {
  navBarBackgroundColor,
  navBarTextColor,
  navBarButtonColor,
} from '../../config/theme/colors';

const goSpecialities = (navigator) => {
  navigator.push({
    screen: 'doquia.Specialities',
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

export default goSpecialities;
