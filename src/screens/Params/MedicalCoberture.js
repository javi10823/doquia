import React, { Component } from 'react';
import {
  View,
  FlatList,
  Alert,
} from 'react-native';

import { connect } from 'react-redux';
import { compose } from 'redux';

import {
  setParticular,
  setCoberture,
  setCobertures,
  getCobertures,
} from '../../actions/paramsActions';

import { MedicalCobertureStyles } from './style';
import goGeneric from '../routes/generic';
import Button from '../../components/button';
import ItemList from '../../components/itemList';


class MedicalCoberture extends Component {
  constructor(props) {
    super(props);
    const {
      getCoberturesConnect,
    } = this.props;
    getCoberturesConnect();
  }

  componentDidMount() {
    const {
      setParticularConnect,
    } = this.props;
    setParticularConnect(true);
  }

  renderItem(item, index) {
    return (
      <ItemList
        onPress={() => this.onCheckedItem({ index })}
        text={item.name}
        checked={item.checked}
      />
    );
  }

  _keyExtractor = item => item.id.toString();


  evaluateSelectedItem() {
    const {
      navigator,
      coberture,
      previousScreen,
    } = this.props;

    const ADVANCED_SEARCH = 'AdvancedSearch';

    if (coberture != null) {
      const screenObraSocial = 'doquia.SocialWorks';
      const screenPrepaga = 'doquia.Prepaids';
      const screenHomeListResults = 'doquia.HomeMapResults';
      const screenAdvancedSearch = 'doquia.AdvancedSearch';
      let destinyScreen = null;
      let title = '';

      switch (coberture.id) {
        case 1:
          destinyScreen = screenObraSocial;
          title = 'Seleccione Obra Social';
          break;
        case 2:
          destinyScreen = screenPrepaga;
          title = 'Seleccione Prepaga';
          break;
        case 3:
          if (previousScreen === ADVANCED_SEARCH) {
            destinyScreen = screenAdvancedSearch;
          } else {
            destinyScreen = screenHomeListResults;
          }
          break;
        default:
          destinyScreen = screenHomeListResults;
          break;
      }

      goGeneric(navigator, destinyScreen, title);
    } else {
      Alert.alert('Por favor, seleccione una cobertura');
    }
  }


  onCheckedItem({ index }) {
    const {
      cobertures,
      setParticularConnect,
      setCobertureConnect,
      setCoberturesConnect,
    } = this.props;

    setParticularConnect(false);

    const objects = cobertures;

    // primero setear todas las especialidades a false
    for (let i = 0; i < cobertures.length; i += 1) {
      objects[i].checked = false;
    }

    // checkear la especialidad elegida
    const data = cobertures;
    const targetItem = data[index];
    targetItem.checked = !targetItem.checked;

    setCobertureConnect(targetItem);
    setCoberturesConnect(data);

    if (index === 2) {
      setParticularConnect(true);
    } else {
      setParticularConnect(false);
    }
  }


  render() {
    const {
      cobertures,
    } = this.props;
    return (
      <View style={MedicalCobertureStyles.container}>
        <View style={MedicalCobertureStyles.sectionList}>
          <FlatList
            data={cobertures}
            renderItem={({ item, index }) => this.renderItem(item, index)}
            style={MedicalCobertureStyles.list}
            keyExtractor={this._keyExtractor}
            extraData={this.state}
          />
        </View>
        <View style={MedicalCobertureStyles.sectionButton}>
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
    particular: state.params.particular,
    coberture: state.params.coberture,
    cobertures: state.cobertures,
    prepaid: state.params.prepaid,
    socialwork: state.params.prepaid,
    previousScreen: state.params.previousScreen,
  };
}

export default compose(connect(mapStateToProps,
  {
    setParticularConnect: setParticular,
    setCobertureConnect: setCoberture,
    setCoberturesConnect: setCobertures,
    getCoberturesConnect: getCobertures,
  }))(MedicalCoberture);
