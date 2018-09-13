import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const IMG_FARM = 'farm2';
const IMG_LOCATION = 'location2';
const IMG_HOW_COME = 'comollego2';
const TEXT_HOW_COME = '¿Cómo llego?';

export default class ItemFarmacy extends Component {
  render() {
    const {
      onPress,
      url,
      name,
      address,
    } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => onPress()}
      >
        <View style={styles.container}>
          <View style={styles.itemList}>
            <View style={styles.guardiaFila}>
              <View style={styles.guardiaColumna1}>
                <Image
                  style={styles.imgHosp}
                  source={{ uri: url }}
                />
                <View style={styles.itemIcon}>
                  <Image
                    style={styles.imgHospSmall}
                    source={{
                      uri: IMG_FARM,
                      isStatic: true,
                    }}
                  />
                </View>
              </View>
              <View style={styles.guardiaColumna2}>
                <Text style={styles.textTituloGuardia}>{ name }</Text>
              </View>
            </View>
            <View style={styles.itemButtonsRow}>
              <View style={styles.itemButtonsColumna1}>
                <Image
                  style={styles.imgLocation}
                  source={{
                    uri: IMG_LOCATION,
                    isStatic: true,
                  }}
                />
                <Text style={styles.textItemDirection}>{address}</Text>
              </View>
              <View style={styles.itemButtonsColumna2}>
                <Image
                  style={styles.imgComoLlego}
                  source={{
                    uri: IMG_HOW_COME,
                    isStatic: true,
                  }}
                />
                <Text style={styles.textItemDirection2}>{TEXT_HOW_COME}</Text>
              </View>
            </View>
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
  imgLocation: {
    width: 17.7,
    height: 21.3,
    marginLeft: 10,
  },
  imgComoLlego: {
    width: 23,
    height: 23,
    marginLeft: 15,
  },
  textItemDirection: {
    color: 'white',
    fontSize: 13,
    fontWeight: '400',
    marginLeft: 10,
  },
  textItemDirection2: {
    color: 'white',
    fontSize: 13,
    fontWeight: '400',
    marginLeft: 5,
  },
  itemButtonsColumna1: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  itemButtonsColumna2: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: 180,
  },
  itemButtonsRow: {
    height: 48,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#029a85',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemIcon: {
    borderRadius: 360,
    width: 30,
    height: 30,
    backgroundColor: '#00bfa5',
    position: 'absolute',
    bottom: 16,
    right: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTituloGuardia: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 40,
    marginLeft: 15,
  },
  textSubTituloGuardia: {
    color: '#2d2d2d',
    fontSize: 13,
    fontWeight: '400',
    marginTop: 5,
    marginLeft: 15,
  },
  imgHospSmall: {
    width: 16,
    height: 16,
  },
  imgHosp: {
    width: 113,
    height: 113,
    marginTop: 15,
    marginLeft: 15,
    borderRadius: 55,
    borderColor: 'black',
  },
  guardiaFila: {
    flexDirection: 'row',
    height: 150,
  },
  guardiaColumna1: {
    width: 130,
  },
  guardiaColumna2: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  itemList: {
    height: 200,
    backgroundColor: '#02b098',
    width: '94%',
    marginTop: 8,
    borderRadius: 3,
    marginLeft: '3%',
  },
});
