import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
} from 'react-native';

import styles from './style';
import ButtonGreen from '../../components/buttonGreen';
import goToNextOnboarding from '../routes/onboarding';

const IMG_BACK_WHITE = 'fondowhite';
const IMG_DOQUIA_LOGO = 'doquialogo';
const IMG_HOSP = 'hospf';
const TEXT1 = 'Encontrá la mejor guardia';
const TEXT2 = 'Buscá por especialidad, cobertura y su estado de ocupación, accede a su ruta y a farmacias cercanas.';
const TEXT_FLUID = 'Fluído';
const TEXT_BLOCKED = 'Trabado';
const TEXT_COLLAPSED = 'Colapsado';
const TEXT_NO_REPORT = 'Sin reportes';
const TEXT_BUTTON = 'Continuar';

export default class Onboarding1 extends Component {
static navigatorStyle = { navBardHidden: true };

render() {
  const {
    navigator,
  } = this.props;
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgfondo}
        source={{
          uri: IMG_BACK_WHITE,
          isStatic: true,
        }}
      >
        <View style={styles.header}>
          <Image
            style={styles.imgLogo}
            source={{
              uri: IMG_DOQUIA_LOGO,
              isStatic: true,
            }}
          />
          <Text style={styles.text1}>{TEXT1}</Text>
          <Text style={styles.text2}>
            {TEXT2}
          </Text>
        </View>
        <View style={styles.medium}>
          <View style={styles.filareporte}>
            <View style={styles.itemReporteIcono}>
              <View style={styles.ovaloBlue}>
                <Image
                  style={styles.imgHosp}
                  source={{
                    uri: IMG_HOSP,
                    isStatic: true,
                  }}
                />
              </View>
            </View>
            <View style={styles.itemReporteTexto}>
              <Text style={styles.textItemreporte}>{TEXT_FLUID}</Text>
            </View>
          </View>
          <View style={styles.filareporte}>
            <View style={styles.itemReporteIcono}>
              <View style={styles.ovaloOrange}>
                <Image
                  style={styles.imgHosp}
                  source={{
                    uri: IMG_HOSP,
                    isStatic: true,
                  }}
                />
              </View>
            </View>
            <View style={styles.itemReporteTexto}>
              <Text style={styles.textItemreporte}>{TEXT_BLOCKED}</Text>
            </View>
          </View>
          <View style={styles.filareporte}>
            <View style={styles.itemReporteIcono}>
              <View style={styles.ovaloRed}>
                <Image
                  style={styles.imgHosp}
                  source={{
                    uri: IMG_HOSP,
                    isStatic: true,
                  }}
                />
              </View>
            </View>
            <View style={styles.itemReporteTexto}>
              <Text style={styles.textItemreporte}>{TEXT_COLLAPSED}</Text>
            </View>
          </View>
          <View style={styles.filareporte}>
            <View style={styles.itemReporteIcono}>
              <View style={styles.ovaloGreen}>
                <Image
                  style={styles.imgHosp}
                  source={{
                    uri: IMG_HOSP,
                    isStatic: true,
                  }}
                />
              </View>
            </View>
            <View style={styles.itemReporteTexto}>
              <Text style={styles.textItemreporte}>{TEXT_NO_REPORT}</Text>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <ButtonGreen
            onPress={() => goToNextOnboarding(navigator)}
            text={TEXT_BUTTON}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
}
