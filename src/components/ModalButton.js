import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';

/* import {
  UIButtonText,
  UIButtonBackgroundColor,
} from '../config/theme/colors'; */

const IMG_LIST = 'list';
const IMG_ICON_MAP = 'mapa';
const TYPE_LIST = 'list';

export default class ModalButton extends Component {
  render() {
    const { onPress, type } = this.props;
    return (
      <TouchableOpacity
        style={styles.modalButton}
        activeOpacity={0.7}
        onPress={() => onPress()}
      >
        <View style={styles.circleButton}>
          <Image
            style={styles.imgButtonLista}
            source={{
              uri: type === TYPE_LIST ? IMG_LIST : IMG_ICON_MAP,
              isStatic: true,
            }}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgButtonLista: {
    width: 23,
    height: 30,
  },
  modalButton: {
    width: 80,
    height: 100,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  circleButton: {
    width: 66,
    height: 66,
    backgroundColor: '#00bfa5',
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 0,
    shadowColor: '#bfbfbf',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    borderWidth: 0.5,
    borderColor: '#04e2c5',
  },
});
