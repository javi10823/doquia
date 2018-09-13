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
}
  from '../../actions/paramsActions';

import { setEstablishment } from '../../actions/establishmentActions';
import goCoberture from '../routes/coberture';
import goSpecialities from '../routes/specialities';
import { goEstablishment, goPharmacy } from '../routes/establishment';
import { goHome } from '../routes/home';

import ListResults from './ListResults';

const TEXT_PARTICULAR = 'Particular';

class HomeListResults extends Component {
  componentDidMount() {
    const {
      setPreviousScreenConnect,
    } = this.props;
    setPreviousScreenConnect('HomeListResults');
  }

  resetSpecialities() {
    const emptySpecialities = [];
    const { setSpecialitiesConnect } = this.props;
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

  goCobertureNavigator = () => {
    this.resetCoberture();
    const {
      navigator,
    } = this.props;
    goCoberture(navigator);
  }

  goSpecialitiesNavigator = () => {
    this.resetSpecialities();
    const {
      navigator,
    } = this.props;
    goSpecialities(navigator);
  }

  static navigatorStyle = { navBarHidden: true };

  clearResults = () => {
    this.resetStateParams();
    const {
      navigator,
    } = this.props;
    goHome(navigator);
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

  render() {
    const {
      speciality,
      results,
      navigator,
    } = this.props;

    return (
      <ListResults
        speciality={speciality != null ? speciality.name : ''}
        results={results}
        coberture={this.getCobertureName()}
        navigator={navigator}
        goToEstablishment={this.goToEstablishment}
        goToPharmacy={this.goToPharmacy}
        clearResults={this.clearResults}
        goSpecialitiesNavigator={this.goSpecialitiesNavigator}
        goCobertureNavigator={this.goCobertureNavigator}
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
  };
}

export default compose(connect(mapStateToProps,
  {
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
  }))(HomeListResults);
