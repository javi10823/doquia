import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';

import {
  UIButtonIsoMenuBackgroundColor,
  shadowGray,
  borderGray,
} from '../config/theme/colors';

const IMG_LOGO_ISO = 'logowhite';

export default class IsoButton extends Component {
  render() {
    const { onPress } = this.props;
    return (
      <TouchableOpacity
        style={styles.modal}
        activeOpacity={0.9}
        onPress={() => onPress()}
      >
        <View style={styles.circle}>
          <Image
            style={styles.imgIso2}
            source={{
              uri: IMG_LOGO_ISO,
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
  modal: {
    width: 100,
    height: 100,
  },
  circle: {
    width: 45,
    height: 45,
    backgroundColor: UIButtonIsoMenuBackgroundColor,
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginLeft: 13,
    shadowColor: shadowGray,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: borderGray,
  },
  imgIso2: {
    width: 19,
    height: 22,
  },
});
