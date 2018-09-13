import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';

import MapView from 'react-native-maps';

export default class MarkerMapEstablishment extends Component {
  render() {
    const {
      onPress,
      item,
      type,
    } = this.props;
    return (
      <MapView.Marker
        coordinate={{
          latitude: item.location.coordinates[1],
          longitude: item.location.coordinates[0],
        }}
        title={item.name}
        onPress={() => onPress()}
      >
        <View style={styles.container}>
          <View style={styles[`markerBorder${type}`]}>
            <View style={styles[`marker${type}`]}>
              <Image
                style={styles.hospmarker}
                source={{
                  uri: 'hospmarker',
                  isStatic: true,
                }}
              />
            </View>
          </View>
        </View>
      </MapView.Marker>
    );
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
    alignItems: 'center',
  },

  marker4: {
    borderRadius: 360,
    backgroundColor: '#00bfa5',
    width: 46,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hospmarker: {
    width: 26,
    height: 18,
  },
  markerBorder1: {
    borderRadius: 360,
    backgroundColor: 'rgba(32,100,232,0.2)',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  marker1: {
    borderRadius: 360,
    backgroundColor: '#2064e8',
    width: 46,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
  },
  markerBorder2: {
    borderRadius: 360,
    backgroundColor: 'rgba(255,107,0,0.2)',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },

  marker2: {
    borderRadius: 360,
    backgroundColor: '#ff6b00',
    width: 46,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
  },
  markerBorder3: {
    borderRadius: 360,
    backgroundColor: 'rgba(229,28,35,0.2)',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },

  marker3: {
    borderRadius: 360,
    backgroundColor: '#e51c23',
    width: 46,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
  },

  markerBorderPharmacy: {
    borderRadius: 360,
    backgroundColor: 'rgba(149,167,175,0.2)',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },

  markerPharmacy: {
    borderRadius: 360,
    backgroundColor: '#95a7af',
    width: 46,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
  },
  markerBorder: {
    borderRadius: 360,
    backgroundColor: 'rgba(0,191,165,0.2)',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  marker: {
    borderRadius: 360,
    backgroundColor: '#00bfa5',
    width: 46,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
  },
  farmmarker: {
    width: 18,
    height: 18,
  },
});
