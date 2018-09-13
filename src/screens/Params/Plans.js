/* @flow */

import React, { Component } from 'react';
import {
  View,
  FlatList,
  Alert,
} from 'react-native';

import { connect } from 'react-redux';
import { compose } from 'redux';

import {
  setPlans,
  setPlan,
} from '../../actions';

import ItemList from '../../components/itemList';
import goGeneric from '../routes/generic';
import Button from '../../components/button';
import { PlanStyles } from './style';

class Plans extends Component {
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
      plans,
      setPlansConnect,
      setPlanConnect,
    } = this.props;

    const objects = plans;

    // primero setear todos los planes a false
    for (let i = 0; i < plans.length; i += 1) {
      objects[i].checked = false;
    }

    // checkear el elegido
    const data = plans;
    const targetItem = data[index];
    targetItem.checked = !targetItem.checked;

    setPlansConnect(data);
    setPlanConnect(targetItem);
  }

  executeSearch() {
    const {
      plan,
      previousScreen,
      navigator,
    } = this.props;
    const ADVANCED_SEARCH = 'AdvancedSearch';
    const ScreenHomeResults = 'doquia.HomeMapResults';
    const screenAdvancedSearch = 'doquia.AdvancedSearch';
    let title = '';

    let destinyScreen = null;

    if (plan === null) {
      Alert.alert('Por favor, seleccione un plan');
      return;
    }

    if (previousScreen === ADVANCED_SEARCH) {
      title = 'Búsqueda avanzada';
      destinyScreen = screenAdvancedSearch;
    } else {
      destinyScreen = ScreenHomeResults;
      title = 'Doquia';
    }

    goGeneric(navigator, destinyScreen, title);
  }

   _keyExtractor = item => item.id.toString();

   render() {
     const {
       plans,
     } = this.props;
     return (
       <View style={PlanStyles.container}>
         <View style={PlanStyles.sectionList}>
           <FlatList
             data={plans}
             renderItem={({ item, index }) => this.renderItem(item, index)}
             style={PlanStyles.list}
             keyExtractor={this._keyExtractor}
             extraData={this.state}
           />
         </View>
         <View style={PlanStyles.sectionButton}>
           <Button
             text={'Seleccionar'}
             onPress={() => this.executeSearch()}
           />
         </View>
       </View>
     );
   }
}

function mapStateToProps(state) {
  return {
    plan: state.params.plan,
    plans: state.plans,
    previousScreen: state.params.previousScreen,
  };
}

export default compose(connect(mapStateToProps, {
  setPlanConnect: setPlan,
  setPlansConnect: setPlans,
}))(Plans);
