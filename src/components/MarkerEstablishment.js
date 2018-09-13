/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class MarkerEstablishment extends Component {


  constructor(props) {
    super(props);
    console.log('holaaa');
  }

  render() {

    console.log('holaaa 2222');

    let status = this.props.status_guardia;

    // 1 - fluido
    // 2 - Atascado
    // 3 - Colapsado
    // 4 - sin reportes

    console.log(status);

     switch(status) {
      case 1:
      return (
        <View style={styles.container}>
              <View style={styles.markerBorder1}>
                <View style={styles.marker1}>
                  <Image style={styles.hospmarker} source={{
                      uri: 'hospmarker',
                      isStatic: true
                    }}></Image>
                </View>
              </View>
        </View>
      );
      break;
      case 2:
      return (
        <View style={styles.container}>
              <View style={styles.markerBorder2}>
                <View style={styles.marker2}>
                  <Image style={styles.hospmarker} source={{
                      uri: 'hospmarker',
                      isStatic: true
                    }}></Image>
                </View>
              </View>
        </View>
      );
      break;
      case 3:
      return (
        <View style={styles.container}>
              <View style={styles.markerBorder3}>
                <View style={styles.marker3}>
                  <Image style={styles.hospmarker} source={{
                      uri: 'hospmarker',
                      isStatic: true
                    }}></Image>
                </View>
              </View>
        </View>
      );
          break;
      case 4:
      return (
        <View style={styles.container}>
              <View style={styles.markerBorder4}>
                <View style={styles.marker4}>
                  <Image style={styles.hospmarker} source={{
                      uri: 'hospmarker',
                      isStatic: true
                    }}></Image>
                </View>
              </View>
        </View>
      );
      break;
      default:
      return (
        <View style={styles.container}>
              <View style={styles.markerBorder4}>
                <View style={styles.marker4}>
                  <Image style={styles.hospmarker} source={{
                      uri: 'hospmarker',
                      isStatic: true
                    }}></Image>
                </View>
              </View>
        </View>
      );
  }



  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  markerBorder4: {
    borderRadius: 360,
    backgroundColor: 'rgba(0,191,165,0.2)',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },

  marker4: {
    borderRadius: 360,
    backgroundColor: '#00bfa5',
    width: 46,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center'
  },
  hospmarker: {
    width: 26,
    height: 18
  },
  markerBorder1: {
    borderRadius: 360,
    backgroundColor: 'rgba(32,100,232,0.2)',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },

  marker1: {
    borderRadius: 360,
    backgroundColor: '#2064e8',
    width: 46,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center'
  },
  markerBorder2: {
    borderRadius: 360,
    backgroundColor: 'rgba(255,107,0,0.2)',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },

  marker2: {
    borderRadius: 360,
    backgroundColor: '#ff6b00',
    width: 46,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center'
  },
  markerBorder3: {
    borderRadius: 360,
    backgroundColor: 'rgba(229,28,35,0.2)',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },

  marker3: {
    borderRadius: 360,
    backgroundColor: '#e51c23',
    width: 46,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
