import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const IMG_HOSP_SMALL = 'hospsmall';
const IMG_LOCATION = 'location3';
const IMG_COMO_LLEGO = 'comollego';
const TEXT_HOW_COME = '¿Cómo llego?';

export default class ItemEstablishment extends Component {
  render() {
    const {
      onPress,
      specialty1,
      specialty2,
      url,
      name,
      address,
    } = this.props;
    const URL_PHOTO = url.toString().replace('http://', 'https://');
    // console.log(URL_PHOTO);
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
                  source={{
                    uri: URL_PHOTO,
                    isStatic: false,
                  }}
                />
                <View style={styles.itemIcon}>
                  <Image
                    style={styles.imgHospSmall}
                    source={{
                      uri: IMG_HOSP_SMALL,
                      isStatic: true,
                    }}
                  />
                </View>
              </View>
              <View style={styles.guardiaColumna2}>
                <Text style={styles.textTituloGuardia}>{ name }</Text>
                <Text style={styles.textSubTituloGuardia}>
                  { specialty1 }
                </Text>
                <Text style={styles.textSubTituloGuardia}>
                  { specialty2 }
                </Text>
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
                    uri: IMG_COMO_LLEGO,
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
    color: '#2d2d2d',
    fontSize: 13,
    fontWeight: '400',
    marginLeft: 10,
  },
  textItemDirection2: {
    color: '#2d2d2d',
    fontSize: 13,
    fontWeight: '400',
    marginLeft: 5,
  },
  itemButtonsColumna1: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
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
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemIcon: {
    borderRadius: 360,
    width: 30,
    height: 30,
    backgroundColor: '#ff6b00',
    position: 'absolute',
    bottom: 16,
    right: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTituloGuardia: {
    color: '#2d2d2d',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 10,
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
    width: 19,
    height: 13,
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
    justifyContent: 'center',
  },
  itemList: {
    height: 200,
    backgroundColor: '#ffffff',
    width: '94%',
    marginTop: 8,
    borderRadius: 3,
    marginLeft: '3%',
  },
});
