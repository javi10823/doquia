import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import showMenu from '../routes/menuModal';
import { HomeListstyles } from './styles';

import ItemEstablishment from '../../components/ItemEstablishment';
import ItemFarmacy from '../../components/ItemFarmacy';

import { goHomeMapResults } from '../routes/home';

import ModalButton from '../../components/ModalButton';

const IMG_LOGO = 'logocolor';
const IMG_CLOSE_HOME = 'closehome';
const IMG_CHANGE = 'change';
const TYPE_MODAL = 'map';


export default class ListResults extends Component {
  keyExtractor = item => item.id.toString();

  renderItem(item) {
    const {
      goToEstablishment,
      goToPharmacy,
    } = this.props;
    let isFarmacy = false;
    let specialitiesSize = 0;
    let specialty1 = '';
    let specialty2 = '';

    if (typeof item.specialties === 'undefined') {
      isFarmacy = true;
    } else {
      isFarmacy = false;
    }

    if (!isFarmacy) {
      specialitiesSize = item.specialties.length;
    }

    if (!isFarmacy && specialitiesSize > 0) {
      specialty1 = item.specialties[0].name;
    }

    if (!isFarmacy && specialitiesSize > 1) {
      specialty2 = item.specialties[1].name;
    }

    if (!isFarmacy) {
      return (
        <ItemEstablishment
          specialty1={specialty1}
          specialty2={specialty2}
          url={item.photos[0].url}
          name={item.name}
          address={item.address}
          onPress={() => goToEstablishment(item)}
        />
      );
    }

    return (
      <ItemFarmacy
        url={item.photos[0].url}
        name={item.name}
        address={item.address}
        onPress={() => goToPharmacy(item)}
      />
    );
  }

  render() {
    const {
      clearResults,
      goSpecialitiesNavigator,
      goCobertureNavigator,
      speciality,
      coberture,
      results,
      navigator,
    } = this.props;
    return (
      <View style={HomeListstyles.container}>
        <View style={HomeListstyles.header}>
          <View style={HomeListstyles.columna1}>
            <View style={HomeListstyles.isologo}>
              <TouchableOpacity
                style={HomeListstyles.modal}
                activeOpacity={0.7}
                onPress={() => showMenu(navigator)}
              >
                <View style={HomeListstyles.circle}>
                  <Image
                    style={HomeListstyles.imgIso2}
                    source={{
                      uri: IMG_LOGO,
                      isStatic: true,
                    }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={HomeListstyles.columna2}>
            <View style={HomeListstyles.clear}>
              <TouchableOpacity
                style={HomeListstyles.modal}
                activeOpacity={0.7}
                onPress={() => clearResults()}
              >
                <View style={HomeListstyles.circleClear}>
                  <Image
                    style={HomeListstyles.imgCloseHome}
                    source={{
                      uri: IMG_CLOSE_HOME,
                    }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={HomeListstyles.searchButtons}>
          <TouchableOpacity activeOpacity={0.7} onPress={() => goSpecialitiesNavigator()}>
            <View style={HomeListstyles.buscar}>
              <View style={HomeListstyles.texto}>
                <Text style={HomeListstyles.txtBuscarGuardia}>
                  { speciality }
                </Text>
              </View>
              <View style={HomeListstyles.imagen}>
                <Image
                  style={HomeListstyles.imgSearch}
                  source={{
                    uri: IMG_CHANGE,
                    isStatic: true,
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={() => goCobertureNavigator()}>
            <View style={HomeListstyles.buscar}>
              <View style={HomeListstyles.texto}>
                <Text style={HomeListstyles.txtBuscarGuardia}>
                  { coberture }
                </Text>
              </View>
              <View style={HomeListstyles.imagen}>
                <Image
                  style={HomeListstyles.imgSearch}
                  source={{
                    uri: IMG_CHANGE,
                    isStatic: true,
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={HomeListstyles.listContainer}>
          <FlatList
            data={results}
            renderItem={({ item }) => this.renderItem(item)}
            style={HomeListstyles.list}
            keyExtractor={this.keyExtractor}
            extraData={this.state}
          />
          <ModalButton
            onPress={() => goHomeMapResults(navigator)}
            type={TYPE_MODAL}
          />
        </View>
      </View>
    );
  }
}
