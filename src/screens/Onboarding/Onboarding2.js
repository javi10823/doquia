import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
} from 'react-native';

import styles from './style';
import { goHome } from '../routes/home';
import ButtonGreen from '../../components/buttonGreen';

const IMG_BACK_WHITE = 'fondowhite';
const IMG_FLUID = 'fluido';
const IMG_BLOCKED = 'atascado';
const IMG_COLLAPSED = 'colapso';
const IMG_DOQUIA_LOGO = 'doquialogo';
const TEXT1 = 'Reportá a la comunidad';
const TEXT2 = 'El estado de la guardia médica en un momento determinado.';
const TEXT_FLUID = 'Fluído';
const TEXT_BLOCKED = 'Trabado';
const TEXT_COLLAPSED = 'Colapsado';
const TEXT_BUTTON = 'Continuar';

export default class Onboarding2 extends Component {
  static navigatorStyle = { navBarHidden: true };

  render() {
    const {
      navigator,
    } = this.props;
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.imgfondo2}
          source={{
            uri: IMG_BACK_WHITE,
            isStatic: true,
          }}
        >
          <View style={styles.header2}>
            <Image
              style={styles.imgLogo2}
              source={{
                uri: IMG_DOQUIA_LOGO,
                isStatic: true,
              }}
            />
            <Text style={styles.text12}>{TEXT1}</Text>
            <Text style={styles.text22}>{TEXT2}</Text>
          </View>
          <View style={styles.medium2}>
            <View style={styles.filareporte2}>
              <View style={styles.itemFluido2}>
                <Image
                  style={styles.imgfluido2}
                  source={{
                    uri: IMG_FLUID,
                    isStatic: true,
                  }}
                />
                <Text style={styles.txtfluido2}>{TEXT_FLUID}</Text>
              </View>
              <View style={styles.itemAtascado2}>
                <Image
                  style={styles.imgfluido2}
                  source={{
                    uri: IMG_BLOCKED,
                    isStatic: true,
                  }}
                />
                <Text style={styles.txtfluido2}>{TEXT_BLOCKED}</Text>
              </View>
              <View style={styles.itemColapso2}>
                <Image
                  style={styles.imgfluido2}
                  source={{
                    uri: IMG_COLLAPSED,
                    isStatic: true,
                  }}
                />
                <Text style={styles.txtfluido2}>{TEXT_COLLAPSED}</Text>
              </View>
            </View>
          </View>
          <View style={styles.footer2}>
            <ButtonGreen
              onPress={() => goHome(navigator)}
              text={TEXT_BUTTON}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}
