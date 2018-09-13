import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import goHomeMapResults from '../routes/home';
import Button from '../../components/button';
import Thanksstyles from './style';

const TEXT = 'Estás ayudando a otros pacientes a atenderse MEJOR.';

export default class Thanks extends Component {
  static navigatorStyle = { navBarHidden: true };

  render() {
    const {
      navigator,
    } = this.props;
    return (
      <View style={Thanksstyles.container}>
        <View style={Thanksstyles.sectionThanks}>
          <Image
            style={Thanksstyles.imgLogo}
            source={{
              uri: 'isowhite2',
              isStatic: true,
            }}
          />
          <Text style={Thanksstyles.textThanks}>¡Gracias!</Text>
          <Text style={Thanksstyles.textThanks2}>{TEXT}</Text>
          <Text style={Thanksstyles.textThanks3}>- Doquia Team</Text>
        </View>
        <View style={Thanksstyles.sectionButton}>
          <Button
            text={'Continuar'}
            onPress={() => goHomeMapResults(navigator)}
          />
        </View>
      </View>
    );
  }
}
