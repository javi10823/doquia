/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

import { Navigation } from 'react-native-navigation';
//import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";


export default class Gps extends Component {



  goToHome() {

    // this would go inside the Component implementation of one of your screens, like FirstTabScreen.js
    this.props.navigator.push({
      screen: 'doquia.Home',
      title: ''
     });

  }

  static navigatorStyle = {
     navBarHidden: true, // make the nav bar hidden
   };


  enableLocation() {


    LocationServicesDialogBox.checkLocationServicesIsEnabled({
      message: "Use Location ?",
      ok: "YES",
      cancel: "NO"
    }).then(function(success) {
      console.log(success); // success => "enabled"
    }
    ).catch((error) => {
      console.log(error.message); // error.message => "disabled"
    });


  }




  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.imgfondo} source={{
            uri: 'fondo2',
            isStatic: true
          }}>
            <View style={styles.header}>
                  <Image style={styles.imgLogo} source={{
                      uri: 'iso_2',
                      isStatic: true
                    }}></Image>
                    <Text style={styles.textActivarUbicacion}>
                      Activar tu ubicación
                    </Text>
            </View>
            <View style={styles.medium}>
            <Image style={styles.imgLocation} source={{
                uri: 'location',
                isStatic: true
              }}></Image>
              <Text style={styles.textActivarUbicacion}>
                  Para una mejor experiencia precisamos encendido tu GPS.
              </Text>
            </View>
            <View style={styles.footer}>

              <TouchableOpacity style={styles.next} activeOpacity={.5} onPress={() => this.enableLocation() }>

                <Text style={styles.textNext}>
                  Continuar
                </Text>
              </TouchableOpacity>
            </View>
                  </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgLogo:{
    width: 40,
    height: 45,
    marginTop: 50,
  },
  textActivarUbicacion:{
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400',
    width: '80%',
    marginTop: 20,
  },
  next: {
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#ffeb3b',
    borderRadius: 15,
    height: 60,
    width: 320,
    alignItems: 'center',
  },
  textNext: {
    color: '#00816f',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    width: '80%',
    marginTop: 13
  },
  text2: {
    color: '#2d2d2d',
    textAlign: 'center',
    fontSize: 16,
    width: '85%',
    marginTop: 10
  },
  imgfondo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null
  },
  header: {
    height: 220,
    width: '100%',
    alignItems: 'center',

  },
  imgLocation:{
    width: 252,
    height: 177,
    marginTop: 0,
  },
  medium: {
    height: 250,
    width: '100%',
    alignItems: 'center',
  },
  footer: {
    flex:1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
