import React, { Component } from 'react';
import {
  View,
  FlatList,
  Alert,
} from 'react-native';

import { connect } from 'react-redux';
import { compose } from 'redux';

import {
  setSpeciality,
  getSpecialities,
  setSpecialities,
  setCoberture,
  setCobertures,
  getCobertures,
} from '../../actions';

import goGeneric from '../routes/generic';
import Button from '../../components/button';
import { SpecialityStyles } from './style';
import ItemList from '../../components/itemList';

class Specialities extends Component {
  constructor(props) {
    super(props);
    const {
      getSpecialitiesConnect,
    } = this.props;
    getSpecialitiesConnect();
  }

  goThenSpecialities(destinyScreen, title) {
    const {
      navigator,
    } = this.props;
    goGeneric(navigator, destinyScreen, title);
  }


  evaluateSelectedItem() {
    const {
      previousScreen,
      speciality,
    } = this.props;
    const HOME = 'Home';
    let title = '';
    const HOME_LIST_RESULTS = 'HomeListResults';
    const ADVANCED_SEARCH = 'AdvancedSearch';
    let destinyScreen = '';

    switch (previousScreen) {
      case HOME:
        destinyScreen = 'doquia.MedicalCoberture';
        title = 'Seleccione cobertura';
        if (speciality === null) {
          Alert.alert('Por favor, seleccione una especialidad');
        } else {
          this.goThenSpecialities(destinyScreen);
        }
        break;
      case HOME_LIST_RESULTS:
        destinyScreen = 'doquia.HomeMapResults';
        this.goThenSpecialities(destinyScreen);
        break;
      case ADVANCED_SEARCH:
        destinyScreen = 'doquia.AdvancedSearch';
        this.goThenSpecialities(destinyScreen);
        break;
      default:
        destinyScreen = 'doquia.HomeMapResults';
        this.goThenSpecialities(destinyScreen, title);
    }
  }

_keyExtractor = item => item.id.toString();

renderItem(item, index) {
  return (
    <ItemList
      onPress={() => this.onCheckedItem({ index })}
      text={item.name}
      checked={item.checked}
    />
  );
}

onCheckedItem({ index }) {
  const {
    specialities,
    setSpecialityConnect,
    setSpecialitiesConnect,
  } = this.props;

  const objects = specialities;

  // primero setear todas las especialidades a false
  for (let i = 0; i < specialities.length; i += 1) {
    objects[i].checked = false;
  }

  // checkear la especialidad elegida
  const data = specialities;
  const targetItem = data[index];
  targetItem.checked = !targetItem.checked;

  setSpecialityConnect(targetItem);
  setSpecialitiesConnect(data);
}

render() {
  const {
    specialities,
  } = this.props;
  return (
    <View style={SpecialityStyles.container}>
      <View style={SpecialityStyles.sectionList}>
        <FlatList
          data={specialities}
          renderItem={({ item, index }) => this.renderItem(item, index)}
          style={SpecialityStyles.list}
          keyExtractor={this._keyExtractor}
          extraData={this.state}
        />
      </View>
      <View style={SpecialityStyles.sectionButton}>
        <Button
          text={'Seleccionar'}
          onPress={() => this.evaluateSelectedItem()}
        />
      </View>
    </View>
  );
}
}

function mapStateToProps(state) {
  return {
    speciality: state.params.speciality,
    specialities: state.specialities,
    coberture: state.params.coberture,
    previousScreen: state.params.previousScreen,
  };
}

export default compose(connect(mapStateToProps, {
  setSpecialityConnect: setSpeciality,
  getSpecialitiesConnect: getSpecialities,
  setSpecialitiesConnect: setSpecialities,
  setCobertureConnect: setCoberture,
  setCoberturesConnect: setCobertures,
  getCoberturesConnect: getCobertures,
}))(Specialities);
