import {
  StyleSheet,
} from 'react-native';

import {
  UITitle,
  UITitleValue,
} from '../../config/theme/colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  slider: {
    width: '90%',
    marginTop: 10,
  },
  titulo: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: '100%',
    marginLeft: 10,
    marginTop: 45,
  },
  txtTitulo: {
    textAlign: 'left',
    marginLeft: 20,
    fontSize: 17,
    fontWeight: '400',
    color: UITitle,
  },
  txtTituloKM: {
    textAlign: 'left',
    marginLeft: 50,
    fontSize: 17,
    fontWeight: '400',
    color: UITitleValue,
    justifyContent: 'flex-end',
  },
  texto: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagen: {
    flexDirection: 'row',
    width: '12%',
  },
  imgSearch: {
    width: 31,
    height: 31,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  sectionOptions: {
    flex: 1,
    alignItems: 'center',
  },
  sectionButton: {
    height: 130,
    alignItems: 'center',
  },
});

export default style;
