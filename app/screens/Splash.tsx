import * as React from "react";
import { StyleSheet, View, Image, StatusBar, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, FontFamily, Border } from "../GlobalStyles";

const Splash = () => {
  return (
    <View style={styles.splash}>
      <View style={styles.bg}>
        <View style={[styles.brandColorBg, styles.brandPosition]}>
          <LinearGradient
            style={[styles.brandColorBg1, styles.brandPosition]}
            locations={[0, 1]}
            colors={["#3b89fd", "#003cd8"]}
            useAngle={true}
            angle={180}
          />
        </View>
        <Image
          style={[styles.livingBackgroundIcon, styles.brandPosition]}
          resizeMode="cover"
          source={require("../assets/living-background.png")}
        />
      </View>
      <View style={[styles.deviceUi, styles.brandPosition1]}>
        <View style={[styles.tabbarHandleIos, styles.brandPosition]}>
          <View style={[styles.brandColorBg, styles.brandPosition]}>
            <View style={styles.homeIndicator} />
          </View>
        </View>
        <StatusBar style={styles.brandPosition} barStyle="default" />
      </View>
      <Image
        style={styles.logoIcon}
        resizeMode="cover"
        source={require("../assets/logo.png")}
      />
      <View style={[styles.recordedWords, styles.brandPosition]}>
        <Text style={[styles.voiceToText, styles.brandPosition]}>
          Voice-to-text
        </Text>
      </View>
      <Image
        style={styles.untitled11}
        resizeMode="cover"
        source={require("../assets/untitled-1-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  brandPosition: {
    left: "0%",
    position: "absolute",
  },
  brandPosition1: {
    bottom: "0%",
    width: "100%",
  },
  brandColorBg1: {
    backgroundColor: Color.backgroundBrandColor,
    bottom: "0%",
    width: "100%",
    right: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
  },
  brandColorBg: {
    bottom: "0%",
    width: "100%",
    right: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
  },
  livingBackgroundIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    display: "none",
    bottom: "0%",
    width: "100%",
    right: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    overflow: "hidden",
  },
  bg: {
    top: 0,
    left: 0,
    width: 375,
    position: "absolute",
    height: 812,
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: 100,
    width: 134,
    height: 5,
    position: "absolute",
    backgroundColor: Color.white,
  },
  tabbarHandleIos: {
    height: "4.19%",
    top: "95.81%",
    bottom: "0%",
    width: "100%",
    right: "0%",
    left: "0%",
  },
  deviceUi: {
    right: "0.53%",
    left: "-0.53%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  logoIcon: {
    top: 220,
    left: 61,
    width: 257,
    height: 257,
    position: "absolute",
  },
  voiceToText: {
    fontSize: 40,
    fontFamily: FontFamily.novaRoundRegular,
    color: Color.white,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    top: "0%",
    height: "100%",
    width: "100%",
  },
  recordedWords: {
    height: "11.95%",
    width: "101.6%",
    top: "46.43%",
    right: "-1.6%",
    bottom: "41.63%",
  },
  untitled11: {
    top: 737,
    left: 115,
    width: 123,
    height: 40,
    position: "absolute",
  },
  splash: {
    borderRadius: Border.br_21xl,
    shadowColor: "rgba(7, 0, 83, 0.1)",
    shadowOffset: {
      width: 0,
      height: 40,
    },
    shadowRadius: 44,
    elevation: 44,
    shadowOpacity: 1,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Splash;
