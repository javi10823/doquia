import React, { Component } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';


import { searchMedicalEstablishments } from '../../actions/searchActions';

import {
  setSpecialities,
  setCoberture,
  setSpeciality,
  setParticular,
  setPrepaid,
  setSocialWork,
  setPlan,
  setPlans,
  setPreviousScreen,
  setCoords,
} from '../../actions/paramsActions';

import { setEstablishment } from '../../actions/establishmentActions';

import { goHome } from '../routes/home';
import { goEstablishment, goPharmacy } from '../routes/establishment';

import MapResults from './MapResults';


const TEXT_PARTICULAR = 'Particular';

class HomeMapResults extends Component {
  constructor(props) {
    super(props);
    this.executeSearch();
  }

  executeSearch() {
    const {
      speciality,
      particular,
      prepaid,
      plan,
      socialwork,
      range,
      coords,
      searchMedicalEstablishmentsConnect,
    } = this.props;
    const specialityParam = speciality != null
      ? speciality.id
      : null;
    const particularParam = particular;
    const prepaidParam = prepaid != null
      ? prepaid.id
      : null;
    const planParam = plan != null
      ? plan.id
      : null;
    const socialworkParam = socialwork != null
      ? socialwork.id
      : null;

    const longitudeParam = coords.longitude;
    const latitudeParam = coords.latitude;

    const rangeParam = range * 1000;

    searchMedicalEstablishmentsConnect(
      specialityParam,
      particularParam,
      rangeParam,
      latitudeParam,
      longitudeParam,
      prepaidParam,
      planParam,
      socialworkParam,
    );
  }

  componentDidMount() {
    const {
      setPreviousScreenConnect,
      setCoordsConnect,
    } = this.props;
    setPreviousScreenConnect('HomeListResults');

    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCoordsConnect(coords);
    }, () => {
      // console.log(error)
    });
  }


  static navigatorStyle = { navBarHidden: true };

  resetSpecialities() {
    const emptySpecialities = [];
    const {
      setSpecialitiesConnect,
    } = this.props;
    setSpecialitiesConnect(emptySpecialities);
  }

  resetCoberture() {
    const emptyPlans = [];
    const {
      setPlansConnect,
      setCobertureConnect,
      setParticularConnect,
      setPrepaidConnect,
      setSocialWorkConnect,
      setPlanConnect,
    } = this.props;
    setPlansConnect(emptyPlans);
    setCobertureConnect(null);
    setParticularConnect(false);
    setPrepaidConnect(null);
    setSocialWorkConnect(null);
    setPlanConnect(null);
  }

  resetStateParams() {
    const emptyPlans = [];
    const {
      setPlansConnect,
      setCobertureConnect,
      setSpecialityConnect,
      setParticularConnect,
      setPrepaidConnect,
      setSocialWorkConnect,
      setPlanConnect,
    } = this.props;
    setPlansConnect(emptyPlans);
    setCobertureConnect(null);
    setSpecialityConnect(null);
    setParticularConnect(false);
    setPrepaidConnect(null);
    setSocialWorkConnect(null);
    setPlanConnect(null);
  }

  clearResults = () => {
    this.resetStateParams();
    const {
      navigator,
    } = this.props;
    goHome(navigator);
  }

  getCobertureName() {
    const {
      particular,
      socialwork,
      prepaid,
    } = this.props;
    let coberture = '';

    if (particular) {
      coberture = TEXT_PARTICULAR;
    } else if (socialwork != null) {
      coberture = socialwork.name;
    } else if (prepaid != null) {
      coberture = prepaid.name;
    }

    return coberture;
  }

  goToEstablishment = (establishment) => {
    const {
      setEstablishmentConnect,
      navigator,
    } = this.props;
    setEstablishmentConnect(establishment);
    goEstablishment(navigator);
  }

  goToPharmacy = (pharmacy) => {
    const {
      setEstablishmentConnect,
      navigator,
    } = this.props;
    setEstablishmentConnect(pharmacy);
    goPharmacy(navigator);
  }

  render() {
    const {
      speciality,
      results,
      coords,
      navigator,
    } = this.props;

    return (
      <MapResults
        results={results}
        coords={coords}
        speciality={speciality != null ? speciality.name : ''}
        goToEstablishment={this.goToEstablishment}
        goToPharmacy={this.goToPharmacy}
        clearResults={this.clearResults}
        coberture={this.getCobertureName()}
        navigator={navigator}
      />
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
    results: state.results,
    establishment: state.establishment,
    previousScreen: state.params.previousScreen,
    range: state.params.range,
    coords: state.params.coords,
  };
}

export default compose(connect(mapStateToProps, {
  setCoordsConnect: setCoords,
  setSpecialitiesConnect: setSpecialities,
  setPreviousScreenConnect: setPreviousScreen,
  setEstablishmentConnect: setEstablishment,
  searchMedicalEstablishmentsConnect: searchMedicalEstablishments,
  setCobertureConnect: setCoberture,
  setSpecialityConnect: setSpeciality,
  setParticularConnect: setParticular,
  setPrepaidConnect: setPrepaid,
  setSocialWorkConnect: setSocialWork,
  setPlanConnect: setPlan,
  setPlansConnect: setPlans,
}))(HomeMapResults);
