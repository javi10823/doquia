import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

export default class ItemList extends Component {
  renderCheck = () => {
    return (
      <View style={styles.columnCheckItem}>
        <Image
          style={styles.imgCheck}
          source={{ uri: 'check', isStatic: true }}
        />
      </View>
    );
  }

  render() {
    const { text, onPress, checked } = this.props;
    return (
      <TouchableWithoutFeedback>
        <View style={styles.itemList}>
          <View style={styles.filaItem}>
            <View style={styles.columnTextItem}>
              <Text
                style={styles.textItemList}
                onPress={() => onPress()}
              >
                {text}
              </Text>
            </View>
            { checked ? this.renderCheck() : null}
          </View>
          <View style={styles.lineSeparator} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  itemList: {
    width: '100%',
    height: 65,
  },
  textItemList: {
    color: '#2d2d2d',
    marginLeft: 30,
    fontSize: 16,
  },
  lineSeparator: {
    borderWidth: 0.5,
    borderColor: '#dbdbdb',
    width: '100%',
    marginTop: 15,
    opacity: 0.5,
  },
  filaItem: {
    flexDirection: 'row',
  },
  columnTextItem: {
    flex: 1,
  },
  columnCheckItem: {
    width: 60,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imgCheck: {
    width: 27.3,
    height: 20,
  },
});
