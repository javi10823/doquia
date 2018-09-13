import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {
  UIButtonText,
  UIButtonBackgroundColor,
} from '../config/theme/colors';

export default class Button extends Component {
  render() {
    const { text, onPress } = this.props;
    return (
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() => onPress()}
      >
        <Text style={styles.textButton}>
          { text }
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textButton: {
    color: UIButtonText,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    width: '80%',
    marginTop: 13,
  },
  button: {
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: UIButtonBackgroundColor,
    borderRadius: 15,
    height: 60,
    width: 320,
    alignItems: 'center',
  },
});
