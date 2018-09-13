import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';

import {
  UISelectorText,
  UISelectorshadowColor,
  UISelectorborderColor,
} from '../config/theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  txtBuscarGuardia: {
    flex: 1,
    textAlign: 'left',
    marginLeft: 15,
    fontSize: 16,
    fontWeight: '400',
    color: UISelectorText,
  },
  texto: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buscar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    borderWidth: 1,
    borderColor: UISelectorborderColor,
    borderRadius: 200,
    height: 50,
    shadowColor: UISelectorshadowColor,
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginTop: 10,
  },
});


export default class Selector extends Component {
  render() {
    const { defaultItemName, onPress } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => onPress()}
      >
        <View style={styles.buscar}>
          <View style={styles.texto}>
            <Text style={styles.txtBuscarGuardia}>
              { defaultItemName }
            </Text>
          </View>
          <View style={styles.imagen}>
            <Image
              style={styles.imgSearch}
              source={{
                uri: 'change',
                isStatic: true,
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
