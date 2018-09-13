/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import ButtonGreen from '../../components/buttonGreen';
import CommentaryStyles from './style';
import goHomeMapResults from '../routes/home';

export default class Commentary extends Component {
  render() {
    const {
      navigator,
    } = this.props;
    return (
      <View style={CommentaryStyles.container}>
        <View style={CommentaryStyles.sectionComentary}>
          <Text style={CommentaryStyles.textTitulo}>¿Querés comentarnos algo más?</Text>
          <TextInput
            style={CommentaryStyles.textInputCommentary}
            multiline
            numberOfLines={10}
            placeholder={'Ingrese sus comenarios, cuentenos otro detalles sobre la atecion recibida, el tiempo de espera o  lo que desee..'}
          />
        </View>
        <View style={CommentaryStyles.sectionButtons}>
          <ButtonGreen
            text={'Enviar comentario'}
            onPress={() => this.goToGuardiaDetails()}
          />
          <TouchableOpacity activeOpacity={0.5} onPress={() => goHomeMapResults(navigator)}>
            <Text style={CommentaryStyles.textOmitir}>
              Omitr comentario
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
