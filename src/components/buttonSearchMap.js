import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Text,
} from 'react-native';

import {
  UIButtonSearchMapBorderColor,
  UIButtonSearchMapShadowColor,
  UIButtonSearchMapText,
} from '../config/theme/colors';

const IMG_SEARCH = 'search';

export default class ButtonSearchMap extends Component {
  render() {
    const { text, onPress } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => onPress()}
      >
        <View style={styles.buscar}>
          <Image
            style={styles.imgSearch}
            source={{
              uri: IMG_SEARCH,
              isStatic: true,
            }}
          />
          <Text style={styles.txtBuscarGuardia}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buscar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: UIButtonSearchMapBorderColor,
    borderRadius: 200,
    height: 50,
    shadowColor: UIButtonSearchMapShadowColor,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    marginTop: 10,
  },
  imgSearch: {
    marginLeft: 20,
    width: 15,
    height: 15,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  txtBuscarGuardia: {
    flex: 1,
    textAlign: 'left',
    marginLeft: 15,
    fontSize: 17,
    fontWeight: '300',
    color: UIButtonSearchMapText,
  },
});
