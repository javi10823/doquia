import React, { Component } from 'react';
import {
  View,
  FlatList,
  Alert,
} from 'react-native';

import { connect } from 'react-redux';
import { compose } from 'redux';

import {
  setPrepaid,
  setParticular,
  setSocialWork,
  getSocialWorks,
  setSocialWorks,
  setPlans,
  getPlans,
} from '../../actions';

import ItemList from '../../components/itemList';
import goGeneric from '../routes/generic';
import { SocialWorkStyles } from './style';
import Button from '../../components/button';


class SocialWorks extends Component {
  constructor(props) {
    super(props);
    const {
      getSocialWorksConnect,
    } = this.props;
    getSocialWorksConnect();
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
      socialworks,
      setSocialWorkConnect,
      setSocialWorksConnect,
      getPlansConnect,
    } = this.props;

    const objects = socialworks;

    // primero setear todas las especialidades a false
    for (let i = 0; i < socialworks.length; i += 1) {
      objects[i].checked = false;
    }

    // checkear la obra social elegida
    const data = socialworks;
    const targetItem = data[index];
    targetItem.checked = !targetItem.checked;

    // mapeando planes
    if (targetItem.plans.length > 0) {
      getPlansConnect(targetItem.plans);
    }

    setSocialWorkConnect(targetItem);
    setSocialWorksConnect(data);
  }


  evaluateSelectedItem() {
    const {
      setPrepaidConnect,
      setParticularConnect,
      socialwork,
      previousScreen,
      navigator,
    } = this.props;

    setPrepaidConnect(null);
    setParticularConnect(false);

    const ADVANCED_SEARCH = 'AdvancedSearch';

    let destinyScreen = 'doquia.HomeMapResults';
    const ScreenHomeResults = 'doquia.HomeMapResults';
    const ScreenPlans = 'doquia.Plans';
    const screenAdvancedSearch = 'doquia.AdvancedSearch';
    let title = '';

    if (socialwork != null) {
      if (socialwork.plans.length > 0) {
        // hay mas de 1 plan --> debe ir a la pantalla de selección de plan
        destinyScreen = ScreenPlans;
        title = 'Seleccione Plan';
      } else if (socialwork.plans.length === 1) {
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
        Alert.alert('No hay planes cargados para esa Obra Social');
      }
      goGeneric(navigator, destinyScreen, title);
    } else {
      Alert.alert('Por favor, seleccione una obra social');
    }
  }

  render() {
    const {
      socialworks,
    } = this.props;
    return (
      <View style={SocialWorkStyles.container}>
        <View style={SocialWorkStyles.sectionList}>
          <FlatList
            data={socialworks}
            renderItem={({ item, index }) => this.renderItem(item, index)}
            style={SocialWorkStyles.list}
            keyExtractor={this._keyExtractor}
            extraData={this.state}
          />
        </View>
        <View style={SocialWorkStyles.sectionButton}>
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
    socialwork: state.params.socialwork,
    plans: state.params.plans,
    socialworks: state.socialworks,
  };
}

export default compose(connect(mapStateToProps, {
  getPlansConnect: getPlans,
  setPrepaidConnect: setPrepaid,
  setParticularConnect: setParticular,
  setSocialWorkConnect: setSocialWork,
  getSocialWorksConnect: getSocialWorks,
  setSocialWorksConnect: setSocialWorks,
  setPlansConnect: setPlans,
}))(SocialWorks);
