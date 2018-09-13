import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';

import { connect } from 'react-redux';
import { compose } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Swiper from 'react-native-swiper';

import { setEstablishment } from '../../actions/establishmentActions';

import PharmacyStyles from './style';

class Pharmacy extends Component {
  render() {
    const {
      establishment,
    } = this.props;

    const photos = [];

    establishment.photos.forEach((photo) => {
      photos.push(photo.url);
    });

    const arrayAddress = establishment.address.split(',');
    const address = arrayAddress[0];

    const specialities = [];

    establishment.specialties.forEach((speciality) => {
      specialities.push(speciality.name);
    });

    return (
      <View style={PharmacyStyles.container}>
        <ScrollView contentContainerStyle={PharmacyStyles.contentContainer}>
          <View style={PharmacyStyles.foto}>
            <Swiper style={PharmacyStyles.wrapper} showsButtons={false} dotColor={'white'} activeDotColor={'white'} dotStyle={PharmacyStyles.punto}>
              {
                photos.map((item, index) => {
                  return (
                    <View style={PharmacyStyles[`slider${index}`]} key={item}>
                      <Image
                        style={PharmacyStyles.imgGuardia}
                        source={{
                          uri: item,
                        }}
                      />
                    </View>
                  );
                })
                  }
            </Swiper>
          </View>
          <View style={PharmacyStyles.titulo}>
            <View style={PharmacyStyles.filatitulo1}>
              <Text style={PharmacyStyles.textTitulo}>{establishment.name}</Text>
            </View>
            <View style={PharmacyStyles.filatitulo2}>
              <Icon name="place" size={23} color="#8a8a8a" style={PharmacyStyles.iconMarker} />
              <Text style={PharmacyStyles.textDireccion}>{address}</Text>
            </View>
            <View style={PharmacyStyles.filatitulo2}>
              <Icon name="phone" size={21} color="#8a8a8a" style={PharmacyStyles.iconMarker} />
              <Text style={PharmacyStyles.textPhone}>{establishment.phone}</Text>
            </View>
            <View style={PharmacyStyles.lineSeparator} />
          </View>
          <View style={PharmacyStyles.description}>
            <Text style={PharmacyStyles.textDetalles}>Detalles</Text>
            <Text style={PharmacyStyles.textDescription}>{establishment.description}</Text>
            <Text />
            <Text />
            <Text />
            <Text />
            <Text />
            <Text />
            <Text />
          </View>
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    establishment: state.establishment.establishment,
  };
}

export default compose(connect(mapStateToProps, { setEstablishment }))(Pharmacy);
