/* eslint-disable prettier/prettier */
import * as React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  StyleSheet,
  View,
  Image,
  StatusBar,
  Text,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Color, Border, FontFamily} from '../GlobalStyles';

const Splash = () => {
  return (
    <View style={styles.splash}>
      <SafeAreaView style={[styles.bg, styles.bgPosition]}>
        <View style={[styles.brandColorBg, styles.brandPosition]}>
          <LinearGradient
            style={[styles.brandColorBg1, styles.brandPosition]}
            locations={[0, 1]}
            colors={['#3b89fd', '#003cd8']}
            useAngle={true}
            angle={180}
          />
        </View>
        <Image
          style={[styles.livingBackgroundIcon, styles.brandPosition]}
          resizeMode="cover"
          source={require('../assets/living-background.png')}
        />
      </SafeAreaView>
      <View style={[styles.deviceUi, styles.deviceUiFlexBox]}>
        <StatusBar barStyle="default" />
        <View style={styles.tabbarHandleIos}>
          <View style={[styles.brandColorBg, styles.brandPosition]}>
            <View style={styles.homeIndicator} />
          </View>
        </View>
      </View>
      <Image
        style={styles.logoIcon}
        resizeMode="cover"
        source={require('../assets/logo.png')}
      />
      <Text style={[styles.voiceToText, styles.deviceUiFlexBox]}>
        Voice-to-text
      </Text>
      <ImageBackground
        style={styles.untitled11}
        resizeMode="cover"
        source={require('../assets/openailogo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bgPosition: {
    top: 0,
    width: 375,
  },
  brandPosition: {
    bottom: '0%',
    right: '0%',
    top: '0%',
    height: '100%',
    left: '0%',
    position: 'absolute',
    width: '100%',
  },
  deviceUiFlexBox: {
    alignItems: 'center',
    position: 'absolute',
  },
  brandColorBg1: {
    backgroundColor: Color.backgroundBrandColor,
    left: '0%',
  },
  brandColorBg: {
    left: '0%',
  },
  livingBackgroundIcon: {
    maxWidth: '100%',
    maxHeight: '100%',
    display: 'none',
    left: '0%',
    overflow: 'hidden',
  },
  bg: {
    left: 0,
    width: 375,
    position: 'absolute',
    height: 812,
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: '50%',
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    position: 'absolute',
    backgroundColor: Color.white,
  },
  tabbarHandleIos: {
    height: 34,
    marginTop: 734,
    width: 375,
  },
  deviceUi: {
    left: -2,
    width: 375,
    top: 0,
  },
  logoIcon: {
    top: 220,
    left: 61,
    width: 257,
    height: 257,
    position: 'absolute',
  },
  voiceToText: {
    height: '11.95%',
    width: '101.6%',
    top: '51.72%',
    fontSize: 40,
    fontFamily: FontFamily.novaRoundRegular,
    color: Color.white,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    left: '0%',
    marginTop: 5,
  },
  untitled11: {
    top: 737,
    left: 119,
    width: 115,
    height: 32,
    position: 'absolute',
  },
  splash: {
    borderRadius: 0,
    shadowColor: 'rgba(7, 0, 83, 0.1)',
    shadowOffset: {
      width: 0,
      height: 40,
    },
    shadowRadius: 44,
    elevation: 44,
    shadowOpacity: 1,
    flex: 1,
    overflow: 'hidden',
    height: 812,
    width: '100%',
    backgroundColor: Color.white,
  },
});

export default Splash;
