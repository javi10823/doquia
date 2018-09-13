import React, { Component } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import {
  setCoberture,
  setRange,
  setPreviousScreen,
  setSpeciality,
  setParticular,
  getSpecialities,
  getCobertures,
} from '../../actions/paramsActions';

import AdvancedSearch from './AdvancedSearch';
import goSearch from '../routes/search';

class AdvancedSearchContainer extends Component {
  constructor(props) {
    super(props);
    const {
      getSpecialitiesConnect,
      getCoberturesConnect,
    } = this.props;
    getSpecialitiesConnect();
    getCoberturesConnect();
    this.state = {
      localRange: 5,
    };
  }

  getCobertureName = () => {
    const {
      particular,
      socialwork,
      prepaid,
    } = this.props;
    let coberture = '';

    if (particular) {
      coberture = 'Particular';
    } else if (socialwork != null) {
      coberture = socialwork.name;
    } else if (prepaid != null) {
      coberture = prepaid.name;
    }
    return coberture;
  }

  componentDidMount() {
    const {
      setPreviousScreenConnect,
    } = this.props;
    setPreviousScreenConnect('AdvancedSearch');
  }

  updateParameters() {
    const {
      specialities,
      speciality,
      setSpecialityConnect,
      cobertures,
      setParticularConnect,
      socialwork,
      prepaid,
    } = this.props;

    if (specialities.length > 0) {
      if (speciality == null) {
        setSpecialityConnect(specialities[0]);
      }
    }

    if (cobertures.length > 2) {
      if (speciality == null) {
        setParticularConnect(true);
      }
    }

    if (socialwork != null || prepaid != null) {
      setParticularConnect(false);
    }
  }

  componentWillUpdate() {
    this.updateParameters();
  }

Search = (Range) => {
  const {
    setRangeConnect,
    navigator,
  } = this.props;
  setRangeConnect(Range);

  goSearch(navigator);
}

  updateLocalRange = (val) => {
    this.setState({ localRange: val });
  }

  render() {
    const {
      navigator,
      speciality,
    } = this.props;
    const {
      localRange,
    } = this.state;
    return (
      <AdvancedSearch
        speciality={speciality === null ? '' : speciality.name}
        coberture={this.getCobertureName()}
        Search={this.Search}
        Range={localRange}
        updateLocalRange={this.updateLocalRange}
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
    previousScreen: state.params.previousScreen,
    specialities: state.specialities,
    coberture: state.params.coberture,
    cobertures: state.cobertures,
    range: state.params.range,

  };
}

export default compose(connect(mapStateToProps, {
  setRangeConnect: setRange,
  getCoberturesConnect: getCobertures,
  setParticularConnect: setParticular,
  setPreviousScreenConnect: setPreviousScreen,
  getSpecialitiesConnect: getSpecialities,
  setSpecialityConnect: setSpeciality,
  setCobertureConnect: setCoberture,
}))(AdvancedSearchContainer);
