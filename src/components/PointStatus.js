/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { Navigation } from 'react-native-navigation';

export default class PointStatus extends Component {


  render() {



     let status = this.props.status_guardia;


      switch(status) {
       case 1:
           return   <View style={ styles.pointShadowFluido }><View style={styles.pointStateFluido}></View></View>;
           break;   
       case 2:
           return   <View style={ styles.pointShadowAtascado }><View style={styles.pointStateAtascado}></View></View>;
           break;
       case 3:
           return   <View style={ styles.pointShadowColapsado }><View style={styles.pointStateColapsado }></View></View>;
           break;
       case 4:
           return  <View style={styles.pointNoReports}></View>;
           break;
       default:
           return  <View style={styles.pointNoReports}></View>;
   }



  }
}

const styles = StyleSheet.create({
  container: {
  //  flex: 1,
  },
  pointNoReports: {
  //  marginTop: 7,
    width: 10,
    height: 0,

  },
  pointStateAtascado: {
  //  marginTop: 7,
    width: 16,
    height: 16,
    backgroundColor: '#ff6b00',
    borderRadius: 360,
      //marginLeft: 15
  },
  pointShadowAtascado: {
  //  marginTop: 7,
    width: 24,
    height: 24,
    backgroundColor: '#ffdec6',
    //opacity: 0.3,
    borderRadius: 360,
      marginLeft: 20,
      alignItems: 'center',
      justifyContent: 'center'
  },
  pointStateColapsado: {
  //  marginTop: 7,
    width: 16,
    height: 16,
    backgroundColor: '#e51c23',
    borderRadius: 360,
      //marginLeft: 15
  },
  pointShadowColapsado: {
  //  marginTop: 7,
    width: 24,
    height: 24,
    backgroundColor: '#ffd6d6',
    //opacity: 0.3,
    borderRadius: 360,
      marginLeft: 20,
      alignItems: 'center',
      justifyContent: 'center'
  },
  pointStateFluido: {
  //  marginTop: 7,
    width: 16,
    height: 16,
    backgroundColor: '#2064e8',
    borderRadius: 360,
      //marginLeft: 15
  },
  pointShadowFluido: {
  //  marginTop: 7,
    width: 24,
    height: 24,
    backgroundColor: '#d0d8e8',
    //opacity: 0.3,
    borderRadius: 360,
      marginLeft: 20,
      alignItems: 'center',
      justifyContent: 'center'
  },
});
