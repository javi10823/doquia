import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

/* import {
  UIButtonText,
  UIButtonBackgroundColor,
} from '../config/theme/colors'; */

const IMG_CHANGE = 'change';

export default class MapSelector extends Component {
  render() {
    const { value, onPress } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => onPress()}
      >
        <View style={styles.buscar}>
          <View style={styles.texto}>
            <Text style={styles.txtBuscarGuardia}>
              {value}
            </Text>
          </View>
          <View style={styles.imagen}>
            <Image
              style={styles.imgSearch}
              source={{
                uri: IMG_CHANGE,
                isStatic: true,
              }}
            />
          </View>
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
    width: 160,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ececec',
    borderRadius: 200,
    height: 45,
    shadowColor: '#ececec',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginTop: 20,
    marginLeft: 10,
  },
  texto: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBuscarGuardia: {
    flex: 1,
    textAlign: 'left',
    marginLeft: 5,
    fontSize: 12,
    fontWeight: '400',
    color: '#2d2d2d',
  },
  imgSearch: {
    width: 31,
    height: 31,
    resizeMode: 'stretch',
    alignItems: 'center',
    marginLeft: -5,
  },
});
