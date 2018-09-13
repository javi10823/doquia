import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Swiper from 'react-native-swiper';
import EstablishmentStyles from './style';
import PointStatus from '../../components/PointStatus';


export default class Establishment extends Component {
  render() {
    const {
      photos,
      status,
      establishment,
      address,
      uriFluido,
      uriAtascado,
      uriColapsado,
      specialities,
      fluidoOnOff,
      atascadoOnOff,
      colapsadoOnOff,
    } = this.props;
    return (
      <View style={EstablishmentStyles.container}>
        <ScrollView contentContainerStyle={EstablishmentStyles.contentContainer}>
          <View style={EstablishmentStyles.foto}>
            <Swiper
              style={EstablishmentStyles.wrapper}
              showsButtons={false}
              dotColor={'white'}
              activeDotColor={'white'}
              dotStyle={EstablishmentStyles.punto}
            >
              {
                          photos.map((item, index) => {
                            return (
                              <View style={EstablishmentStyles[`slider${index}`]} key={item}>
                                <Image
                                  style={EstablishmentStyles.imgGuardia}
                                  source={{
                                    uri: item.toString().replace('http://', 'https://'),
                                  }}
                                />
                              </View>
                            );
                          })
                    }
            </Swiper>
          </View>
          <View style={EstablishmentStyles.titulo}>
            <View style={EstablishmentStyles.filatitulo1}>
              <PointStatus status_guardia={status} />
              <Text style={EstablishmentStyles.textTitulo}>{ establishment.name }</Text>
            </View>
            <View style={EstablishmentStyles.filatitulo2}>
              <Icon name="place" size={23} color="#8a8a8a" style={EstablishmentStyles.iconMarker} />
              <Text style={EstablishmentStyles.textDireccion}>
                { address }
              </Text>
            </View>
            <View style={EstablishmentStyles.lineSeparator} />
          </View>
          <View style={EstablishmentStyles.status}>
            <Text style={EstablishmentStyles.textComoEsta}>¿Cómo está la guardia?</Text>
            <View style={EstablishmentStyles.statusGuardia}>
              <View style={EstablishmentStyles.statusfluido}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => fluidoOnOff()}>
                  <Image style={EstablishmentStyles.imgFluido} source={uriFluido} />
                </TouchableOpacity>
                <Text style={EstablishmentStyles.textStatus}>Fluído</Text>
              </View>
              <View style={EstablishmentStyles.statusfluido}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => atascadoOnOff()}>
                  <Image
                    style={EstablishmentStyles.imgFluido}
                    source={uriAtascado}
                  />
                </TouchableOpacity>
                <Text style={EstablishmentStyles.textStatus}>Atascado</Text>
              </View>
              <View style={EstablishmentStyles.statusfluido}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => colapsadoOnOff()}>
                  <Image style={EstablishmentStyles.imgFluido} source={uriColapsado} />
                </TouchableOpacity>
                <Text style={EstablishmentStyles.textStatus}>Colapsó</Text>
              </View>
            </View>
            <View style={EstablishmentStyles.lineSeparator} />
          </View>
          <View style={EstablishmentStyles.specialities}>
            <Text style={EstablishmentStyles.textEspecialidades}>Especialidades</Text>
            {
              specialities.map((item) => {
                return (
                  <View style={EstablishmentStyles.tableEspecialidades} key={item}>
                    <View style={EstablishmentStyles.pointItem} />
                    <Text style={EstablishmentStyles.textItemEspecialidad}>{ item }</Text>
                  </View>
                );
              })
                    }
            <View style={EstablishmentStyles.lineSeparator} />
          </View>
          <View style={EstablishmentStyles.description}>
            <Text style={EstablishmentStyles.textDescription}>{establishment.description}</Text>
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
