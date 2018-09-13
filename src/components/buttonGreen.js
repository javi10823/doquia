import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {
  UIButtonGreenText,
  UIButtonGreenBackgroundColor,
} from '../config/theme/colors';

export default class ButtonGreen extends Component {
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
    color: UIButtonGreenText,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '300',
    width: '80%',
  },
  button: {
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: UIButtonGreenBackgroundColor,
    borderRadius: 15,
    height: 60,
    width: 320,
    alignItems: 'center',
  },
});
