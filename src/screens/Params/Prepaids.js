import React, { Component } from 'react';
import {
  View,
  FlatList,
  Alert,
} from 'react-native';


import { connect } from 'react-redux';
import { compose } from 'redux';

import {
  setSocialWork,
  setParticular,
  setPrepaid,
  getPrepaids,
  setPrepaids,
  setPlans,
  getPlans,
  setPlan,
} from '../../actions';

import ItemList from '../../components/itemList';
import goGeneric from '../routes/generic';
import Button from '../../components/button';
import { PrepaidStyles } from './style';

class Prepaids extends Component {
  constructor(props) {
    super(props);
    const {
      getPrepaidsConnect,
    } = this.props;
    getPrepaidsConnect();
  }

  _keyExtractor = item => item.id;

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
      prepaids,
      getPlansConnect,
      setPrepaidsConnect,
      setPrepaidConnect,
    } = this.props;

    const objects = prepaids;

    // primero setear todas las especialidades a false
    for (let i = 0; i < prepaids.length; i += 1) {
      objects[i].checked = false;
    }

    // checkear la obra social elegida
    const data = prepaids;
    const targetItem = data[index];
    targetItem.checked = !targetItem.checked;

    // mapeando planes
    getPlansConnect(targetItem.plans);

    setPrepaidsConnect(data);
    setPrepaidConnect(targetItem);
  }


  evaluateSelectedItem() {
    const {
      setSocialWorkConnect,
      setParticularConnect,
      prepaid,
      plans,
      previousScreen,
      navigator,
    } = this.props;
    setSocialWorkConnect(null);
    setParticularConnect(false);

    const ADVANCED_SEARCH = 'AdvancedSearch';

    let destinyScreen = null;
    const ScreenHomeResults = 'doquia.HomeMapResults';
    const screenAdvancedSearch = 'doquia.AdvancedSearch';
    const ScreenPlans = 'doquia.Plans';
    let title = '';

    if (prepaid != null) {
      if (plans.length > 0) {
        // hay mas de 1 plan --> debe ir a la pantalla de selección de plan
        destinyScreen = ScreenPlans;
        title = 'Seleccione Plan';
      } else if (prepaid.plans.length === 1) {
        // hay solo 1 plan --> debe ir a resultados o advanced search
        if (previousScreen === ADVANCED_SEARCH) {
          destinyScreen = screenAdvancedSearch;
          title = 'Búsqueda avanzada';
        } else {
          destinyScreen = ScreenHomeResults;
          title = 'Doquia';
        }
      } else {
        // No hay planes
        Alert.alert('No hay planes cargados - ERROR');
      }

      goGeneric(navigator, destinyScreen, title);
    } else {
      Alert.alert('Por favor, seleccione una prepaga');
    }
  }

  render() {
    const {
      prepaids,
    } = this.props;
    return (
      <View style={PrepaidStyles.container}>
        <View style={PrepaidStyles.sectionList}>
          <FlatList
            data={prepaids}
            renderItem={({ item, index }) => this.renderItem(item, index)}
            style={PrepaidStyles.list}
            keyExtractor={this._keyExtractor}
            extraData={this.state}
          />
        </View>
        <View style={PrepaidStyles.sectionButton}>
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
    prepaid: state.params.prepaid,
    plan: state.params.plan,
    plans: state.plans,
    prepaids: state.prepaids,
    previousScreen: state.params.previousScreen,
  };
}

export default compose(connect(mapStateToProps, {
  setSocialWorkConnect: setSocialWork,
  setParticularConnect: setParticular,
  setPrepaidConnect: setPrepaid,
  getPrepaidsConnect: getPrepaids,
  setPrepaidsConnect: setPrepaids,
  setPlansConnect: setPlans,
  getPlansConnect: getPlans,
  setPlanConnect: setPlan,
}))(Prepaids);
