import React, { Component } from 'react';
import {
  Alert,
} from 'react-native';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { sendReport, setEstablishment } from '../../actions/establishmentActions';

import goThanks from '../routes/thanks';
import Establishment from './Establishment';

let status = 4;
const URI_FLUIDO_OFF = require('../../assets/fluido_off.png');
const URI_FLUIDO_ON = require('../../assets/fluido_on.png');
const URI_FLUIDO_GLB = require('../../assets/fluido_off.png');

const URI_ATASCADO_OFF = require('../../assets/atascado_off.png');
const URI_ATASCADO_ON = require('../../assets/atascado_on.png');
const URI_ATASCADO_GLB = require('../../assets/atascado_off.png');

const URI_COLAPSADO_OFF = require('../../assets/colapsado_off.png');
const URI_COLAPSADO_ON = require('../../assets/colapsado_on.png');
const URI_COLAPSADO_GLB = require('../../assets/colapsado_off.png');

class EstablishmentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fluido: false,
      URI_FLUIDO: URI_FLUIDO_GLB,
      atascado: false,
      URI_ATASCADO: URI_ATASCADO_GLB,
      colapsado: false,
      URI_COLAPSADO: URI_COLAPSADO_GLB,
      STATUS_GUARDIA: status,
    };
  }

  componentDidMount() {
    const {
      establishment,
    } = this.props;

    switch (establishment.state) {
      case 'no-reports':
        status = 4;
        break;
      case 'collapsed':
        status = 3;
        break;
      case 'locked':
        status = 2;
        break;
      case 'flowing':
        status = 1;
        break;
      default:
        status = 4;
        break;
    }
  }

  offButtonsState() {
    this.setState({
      URI_FLUIDO: URI_FLUIDO_OFF,
      fluido: false,
      URI_ATASCADO: URI_ATASCADO_OFF,
      atascado: false,
      URI_COLAPSADO: URI_COLAPSADO_OFF,
      colapsado: false,
    });
  }

  fluidoOnOff = () => {
    const {
      fluido,
    } = this.state;
    this.sendReportEstablishment('flowing');

    // pone todo en off
    this.offButtonsState();

    this.setState({
      URI_FLUIDO: !fluido ? URI_FLUIDO_ON : URI_FLUIDO_OFF,
      fluido: !fluido,
    });
  }

  atascadoOnOff = () => {
    const {
      atascado,
    } = this.state;
    this.sendReportEstablishment('locked');

    // pone todo en off
    this.offButtonsState();

    this.setState({
      URI_ATASCADO: !atascado ? URI_ATASCADO_ON : URI_ATASCADO_OFF,
      atascado: !atascado,
    });
  }

  colapsadoOnOff = () => {
    const {
      colapsado,
    } = this.state;
    this.sendReportEstablishment('collapsed');

    // pone todo en off
    this.offButtonsState();

    this.setState({
      URI_COLAPSADO: !colapsado ? URI_COLAPSADO_ON : URI_COLAPSADO_OFF,
      colapsado: !colapsado,
    });
  }

  sendReportEstablishment(STATUS_ESTABLISHMENT) {
    const {
      establishment,
      coords,
    } = this.props;

    const comment = '.';
    const self = this;

    sendReport(establishment.id,
      coords.latitude,
      coords.longitude,
      STATUS_ESTABLISHMENT,
      comment)
      .then((response) => {
        // console.log(response);
        if (response.data.establishment) {
        // console.log('reporte enviado con exito');
          /* collapsed
                locked
                flowing
                no-report */
          setTimeout(() => {
            goThanks(self.props.navigator);
          }, 700);
        }
      })
      .catch((error) => {
      // console.log(error.response.data);
        if (error.response.data === 'farAway') {
          Alert.alert(
            'Reporte No Enviado',
            'Estás lejos del establecimiento para enviar el reporte de estado',
            [
              { text: 'OK' },
            ],
            { cancelable: false },
          );
        } else {
          Alert.alert('Error de Servidor');
        }
      });
  }


  render() {
    const {
      establishment,
    } = this.props;
    const {
      STATUS_GUARDIA,
      URI_FLUIDO,
      URI_ATASCADO,
      URI_COLAPSADO,
    } = this.state;

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
      <Establishment
        address={address}
        photos={photos}
        establishment={establishment}
        specialities={specialities}
        status={STATUS_GUARDIA}
        uriFluido={URI_FLUIDO}
        uriAtascado={URI_ATASCADO}
        uriColapsado={URI_COLAPSADO}
        fluidoOnOff={this.fluidoOnOff}
        colapsadoOnOff={this.colapsadoOnOff}
        atascadoOnOff={this.atascadoOnOff}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    establishment: state.establishment.establishment,
    coords: state.params.coords,
  };
}

export default compose(connect(mapStateToProps, { setEstablishment }))(EstablishmentContainer);
