import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import MapView from 'react-native-maps';
import { HomeMapStyles } from './styles';

import showMenu from '../routes/menuModal';
import goSpecialities from '../routes/specialities';
import goCoberture from '../routes/coberture';
import { goHomeListResults } from '../routes/home';

import ModalButton from '../../components/ModalButton';
import MapSelector from '../../components/map/mapSelector';
import MarkerMapEstablishment from '../../components/map/markerMapEstablishment';
import MarkerMapPharmacy from '../../components/map/markerMapPharmacy';


const COLLAPSED = 'collapsed';
const LOCKED = 'locked';
const FLOWING = 'flowing';
const NOREPORTS = 'no-reports';
const TYPE_MODAL = 'list';
let TYPE_MARKER_ESTABLISHMENT = 0;

export default class MapResults extends Component {
  render() {
    const {
      coords,
      results,
      goToEstablishment,
      goToPharmacy,
      speciality,
      coberture,
      clearResults,
      navigator,
    } = this.props;
    return (
      <View style={HomeMapStyles.container}>
        <MapView
          showsUserLocation
          style={HomeMapStyles.map}
          provider="google"
          showsMyLocationButton={false}
          region={{
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.009,
            longitudeDelta: 0.009,
          }}
        >
          {
            results.map((item) => {
              let isFarmacy = false;

              if (typeof item.specialties === 'undefined') {
                isFarmacy = true;
              }

              if (!isFarmacy) {
                switch (item.state) {
                  case FLOWING:
                    TYPE_MARKER_ESTABLISHMENT = 1;
                    break;
                  case LOCKED:
                    TYPE_MARKER_ESTABLISHMENT = 2;
                    break;
                  case COLLAPSED:
                    TYPE_MARKER_ESTABLISHMENT = 3;
                    break;
                  case NOREPORTS:
                    TYPE_MARKER_ESTABLISHMENT = 4;
                    break;
                  default:
                    TYPE_MARKER_ESTABLISHMENT = 0;
                    break;
                }
                return (
                  <MarkerMapEstablishment
                    type={TYPE_MARKER_ESTABLISHMENT}
                    item={item}
                    key={item.id}
                    onPress={() => goToEstablishment(item)}
                  />
                );
              }
              return (
                <MarkerMapPharmacy
                  item={item}
                  key={item.id}
                  onPress={() => goToPharmacy(item)}
                />
              );
            })
          }
        </MapView>
        <View style={HomeMapStyles.header}>
          <View style={HomeMapStyles.columna1}>
            <View style={HomeMapStyles.isologo}>
              <TouchableOpacity
                style={HomeMapStyles.modal}
                activeOpacity={0.7}
                onPress={() => showMenu(navigator)}
              >
                <View style={HomeMapStyles.circle}>
                  <Image
                    style={HomeMapStyles.imgIso2}
                    source={{
                      uri: 'logowhite',
                      isStatic: true,
                    }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={HomeMapStyles.columna2}>
            <View style={HomeMapStyles.clear}>
              <TouchableOpacity
                style={HomeMapStyles.modal}
                activeOpacity={0.7}
                onPress={() => clearResults()}
              >
                <View style={HomeMapStyles.circleClear}>
                  <Image
                    style={HomeMapStyles.imgCloseHome}
                    source={{
                      uri: 'closehome',
                      isStatic: true,
                    }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={HomeMapStyles.medium}>
          <MapSelector
            onPress={() => goSpecialities(navigator)}
            value={speciality}
          />
          <MapSelector
            onPress={() => goCoberture(navigator)}
            value={coberture}
          />
        </View>
        <ModalButton
          onPress={() => goHomeListResults(navigator)}
          type={TYPE_MODAL}
        />
      </View>
    );
  }
}
