import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';

import goHome from './routes/home';
import goAdvancedSearch from './routes/advancedSearch';

export default class Menu extends Component {
  static navigatorStyle = { navBarHidden: true };

  render() {
    const {
      navigator,
    } = this.props;
    let imageLogo = '';

    if (Platform.OS === 'ios') {
      imageLogo = 'doquialogo-1';
    } else {
      imageLogo = 'doquialogo1';
    }

    return (
      <View style={styles.container}>
        <View style={styles.sectionBack}>
          <TouchableWithoutFeedback onPress={() => goHome(navigator)}>
            <Image
              style={styles.imgBack}
              source={{
                uri: 'back',
                isStatic: true,
              }}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.sectionBusquedaAvanzada}>
          <Image
            style={styles.imgLogo}
            source={{
              uri: imageLogo,
              isStatic: true,
            }}
          />
          <TouchableOpacity
            style={styles.next}
            activeOpacity={0.7}
            onPress={() => goAdvancedSearch(navigator)}
          >
            <View style={styles.round}>
              <Image style={styles.imgSearch} source={{ uri: 'advancedsearch', isStatic: true }} />
            </View>
            <Text style={styles.TextStyleNext}>Búsqueda Avanzada</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionMenu}>
          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.filaMenu}>
              <View style={styles.columnaMenuIcon}>
                <Image
                  style={styles.imgShare}
                  source={{
                    uri: 'share',
                    isStatic: true,
                  }}
                />
              </View>
              <View style={styles.columnaMenuText}>
                <Text style={styles.TextMenu}>Comparte Doquia</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.filaMenu}>
              <View style={styles.columnaMenuIcon}>
                <Image
                  style={styles.imgAcerca}
                  source={{
                    uri: 'acerca',
                    isStatic: true,
                  }}
                />
              </View>
              <View style={styles.columnaMenuText}>
                <Text style={styles.TextMenu}>Acerca de</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.filaMenu}>
              <View style={styles.columnaMenuIcon}>
                <Image
                  style={styles.imgPoliticas}
                  source={{
                    uri: 't_rminos',
                    isStatic: true,
                  }}
                />
              </View>
              <View style={styles.columnaMenuText}>
                <Text style={styles.TextMenu}>Políticas de privacidad</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00bfa5',
  },
  filaMenu: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  columnaMenuIcon: {
    justifyContent: 'center',
    width: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  columnaMenuText: {
    justifyContent: 'flex-start',
    width: 220,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgShare: {
    width: Platform.OS === 'ios' ? 20 : 18,
    height: Platform.OS === 'ios' ? 26 : 21,
    marginTop: 5,
  },
  imgAcerca: {
    width: 9,
    height: 20,
    marginTop: 5,
  },
  imgPoliticas: {
    width: 20,
    height: 20,
    marginTop: 5,
  },
  TextMenu: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    marginLeft: 25,
    marginTop: 8,
  },
  imgSearch: {
    width: 27,
    height: 27,
  },
  round: {
    width: 65,
    height: 43,
    backgroundColor: '#ffff00',
    borderRadius: 30,
    marginTop: 4,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  next: {
    marginLeft: 5,
    marginRight: 5,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 30,
    width: 270,
    height: 53,
    marginTop: 40,
    flexDirection: 'row',
  },
  TextStyleNext: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 20,
    marginTop: 15,
  },
  imgLogo: {
    height: 46,
    width: 212,
    marginTop: 50,
  },
  imgBack: {
    height: Platform.OS === 'ios' ? 23 : 16,
    width: Platform.OS === 'ios' ? 13 : 15,
    marginLeft: 20,
  },
  sectionBack: {
    height: 80,
    justifyContent: 'flex-end',
    width: '100%',
  },
  sectionBusquedaAvanzada: {
    height: 215,
    alignItems: 'center',
  },
  sectionMenu: {
    flex: 1,
  },
});
