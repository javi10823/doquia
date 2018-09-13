import React, { Component } from 'react';
import {
  View,
  Text,
  Slider,
} from 'react-native';

import style from './style';
import goCoberture from '../routes/coberture';
import goSpecialities from '../routes/specialities';

import Button from '../../components/button';
import Selector from '../../components/selector';

const TEXT_SPECIALITY = 'Seleccione especialidad';
const TEXT_COBERTURE = 'Seleccione cobertura';
const TEXT_KM = 'KM';
const SEARCH = 'Buscar';
const MAX_DISTANCE = 'Distancia Máxima';

export default class AdvancedSearch extends Component {
  render() {
    const {
      speciality,
      coberture,
      Search,
      Range,
      updateLocalRange,
      navigator,
    } = this.props;
    return (
      <View style={style.container}>
        <View style={style.sectionOptions}>
          <View style={style.titulo}>
            <Text style={style.txtTitulo}>
              {TEXT_SPECIALITY}
            </Text>
          </View>
          <Selector
            defaultItemName={speciality}
            onPress={() => goSpecialities(navigator)}
          />
          <View style={style.titulo}>
            <Text style={style.txtTitulo}>
              {TEXT_COBERTURE}
            </Text>
          </View>
          <Selector
            defaultItemName={coberture}
            onPress={() => goCoberture(navigator)}
          />
          <View style={style.titulo}>
            <Text style={style.txtTitulo}>
              {MAX_DISTANCE}
            </Text>
            <Text style={style.txtTituloKM}>
              { Range }
              {TEXT_KM}
            </Text>
          </View>
          <Slider
            style={style.slider}
            step={1}
            minimumValue={1}
            maximumValue={200}
            value={Range}
            onValueChange={(val) => {
              updateLocalRange(val);
            }}
          />
        </View>
        <View style={style.sectionButton}>
          <Button
            onPress={() => Search(Range)}
            text={SEARCH}
          />
        </View>
      </View>
    );
  }
}
