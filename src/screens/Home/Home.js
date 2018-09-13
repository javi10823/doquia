import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';


import { connect } from 'react-redux';
import { compose } from 'redux';

import MapView from 'react-native-maps';
import { setPreviousScreen, setCoords } from '../../actions/paramsActions';
import { saveKeyFirstLoad } from '../../utilities/localstorage';
import showMenu from '../routes/menuModal';
import goSpecialities from '../routes/specialities';

import { Homestyles } from './styles';

import IsoButton from '../../components/isoButton';
import ButtonSearchMap from '../../components/buttonSearchMap';

const IMG_HOSP = 'hospmarker';
const TEXT_BUSCAR_GUARDIA = 'Buscar Guardia';

class Home extends Component {
  constructor(props) {
    super(props);
    const {
      setPreviousScreenConnect,
    } = this.props;
    setPreviousScreenConnect('Home');
  }

  componentDidMount() {
    const {
      setCoordsConnect,
    } = this.props;
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCoordsConnect(coords);
    }, () => {
      // console.log(error);
    });

    saveKeyFirstLoad('YES');
    // clearStorage();
  }

  static navigatorStyle = { navBarHidden: true };

  render() {
    const {
      navigator,
      coords,
    } = this.props;
    return (
      <View style={Homestyles.container}>
        <MapView
          showsUserLocation
          showsMyLocationButton={false}
          style={Homestyles.map}
          provider="google"
          region={{
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.009,
            longitudeDelta: 0.009,
          }}
        />
        <View style={Homestyles.header}>
          <View style={Homestyles.isologo}>
            <IsoButton
              onPress={() => showMenu()}
            />
          </View>
        </View>
        <View style={Homestyles.medium}>
          <ButtonSearchMap
            text={TEXT_BUSCAR_GUARDIA}
            onPress={() => goSpecialities(navigator)}
          />
        </View>
        <View>
          <Image
            source={{
              uri: IMG_HOSP,
              isStatic: true,
            }}
          />
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    speciality: state.params.speciality,
    particular: state.params.particular,
    prepaid: state.params.prepaid,
    socialwork: state.params.socialwork,
    plan: state.params.plan,
    previousScreen: state.params.previousScreen,
    coords: state.params.coords,
  };
}

export default compose(connect(mapStateToProps,
  {
    setPreviousScreenConnect: setPreviousScreen,
    setCoordsConnect: setCoords,
  }))(Home);
