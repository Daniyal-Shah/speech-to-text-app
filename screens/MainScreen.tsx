import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  ImageBackground,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const MainScreen = () => {
  return (
    <ImageBackground
      style={[styles.mainScreenIcon, styles.frameWrapperFlexBox]}
      resizeMode="cover"
      source={require("../assets/mainscreen.png")}
    >
      <View style={[styles.bg, styles.bgPosition]}>
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
          style={[styles.livingBackgroundIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/living-background.png")}
        />
      </View>
      <View style={[styles.bg, styles.bgPosition]}>
        <View style={[styles.tabbarHandleIos, styles.brandPosition]}>
          <View style={[styles.brandColorBg, styles.brandPosition]}>
            <View style={[styles.homeIndicator, styles.capacityBg]} />
          </View>
        </View>
        <View style={styles.barsStatusBarIphoneL}>
          <View style={styles.battery}>
            <View style={[styles.border, styles.brandPosition]} />
            <Image
              style={[styles.capIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/cap.png")}
            />
            <View style={[styles.capacity, styles.capacityBg]} />
          </View>
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <Text style={[styles.lte, styles.lteFlexBox]}>LTE</Text>
          <Image
            style={[styles.cellularIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/cellular.png")}
          />
          <View style={styles.barsStatusBarIphoneT}>
            <Text style={[styles.time, styles.lteFlexBox]}>1:21</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.voiceFabIcon}
        resizeMode="cover"
        source={require("../assets/voice-fab.png")}
      />
      <View style={[styles.mainScreenInner, styles.bgPosition]}>
        <ScrollView
          style={[styles.frameWrapper, styles.bgPosition]}
          pagingEnabled={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.frameScrollViewContent}
        >
          <View style={styles.translatedtextitemLayout}>
            <View
              style={[
                styles.translatedtextitem,
                styles.translatedtextitemLayout,
              ]}
            >
              <Text style={[styles.helloHopeYouContainer, styles.pmFlexBox]}>
                Hello, Hope you are doing well,So this is the area where text
                will be displayed.{" "}
              </Text>
              <Image
                style={[
                  styles.systemUiconswrite,
                  styles.systemUiconswritePosition,
                ]}
                resizeMode="cover"
                source={require("../assets/write-icon.png")}
              />
              <Text style={[styles.pm, styles.pmFlexBox]}>10:30 AM</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
  },
  frameWrapperFlexBox: {
    flex: 1,
    overflow: "hidden",
  },
  bgPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  brandPosition: {
    bottom: "0%",
    left: "0%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  capacityBg: {
    backgroundColor: Color.white,
    position: "absolute",
  },
  lteFlexBox: {
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  translatedtextitemLayout: {
    height: 95,
    width: 350,
  },
  pmFlexBox: {
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  systemUiconswritePosition: {
    left: 0,
    position: "absolute",
  },
  brandColorBg1: {
    backgroundColor: Color.backgroundBrandColor,
    left: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  brandColorBg: {
    left: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  livingBackgroundIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  bg: {
    top: 0,
    height: 812,
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
  },
  tabbarHandleIos: {
    height: "4.19%",
    top: "95.81%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  border: {
    width: "90.43%",
    right: "9.57%",
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    opacity: 0.35,
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    position: "absolute",
  },
  capIcon: {
    height: "35.29%",
    width: "5.46%",
    top: "32.35%",
    bottom: "32.35%",
    left: "94.54%",
    opacity: 0.4,
    right: "0%",
  },
  capacity: {
    height: "64.71%",
    width: "73.99%",
    top: "17.65%",
    right: "17.79%",
    bottom: "17.65%",
    left: "8.22%",
    borderRadius: 1,
  },
  battery: {
    height: "25.76%",
    width: "6.49%",
    top: "39.39%",
    right: "3.82%",
    bottom: "34.85%",
    left: "89.69%",
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  lte: {
    top: 17,
    left: 312,
    fontSize: 11,
    letterSpacing: -1,
    fontWeight: "500",
    fontFamily: FontFamily.sFProTextMedium,
    width: 25,
    height: 12,
    display: "none",
  },
  cellularIcon: {
    height: "24.24%",
    width: "4.53%",
    top: "40.15%",
    right: "17.07%",
    bottom: "35.61%",
    left: "78.4%",
  },
  time: {
    marginTop: -3.5,
    top: "50%",
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.sFProTextSemibold,
    fontSize: FontSize.size_mini,
    left: "0%",
    width: "100%",
  },
  barsStatusBarIphoneT: {
    height: "47.73%",
    width: "14.4%",
    top: "15.91%",
    right: "80%",
    bottom: "36.36%",
    left: "5.6%",
    position: "absolute",
  },
  barsStatusBarIphoneL: {
    height: "5.42%",
    bottom: "94.58%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  voiceFabIcon: {
    top: 698,
    left: 144,
    width: 88,
    height: 88,
    position: "absolute",
  },
  helloHopeYouContainer: {
    height: "75.39%",
    width: "85.53%",
    left: "14.35%",
    fontSize: 18,
    fontFamily: FontFamily.nunitoSansRegular,
    top: "0%",
  },
  systemUiconswrite: {
    top: 11,
    borderRadius: 10,
    width: 36,
    height: 48,
    overflow: "hidden",
  },
  pm: {
    right: 0,
    bottom: 0,
    fontWeight: "300",
    fontFamily: FontFamily.nunitoSansLight,
    width: 85,
    height: 16,
    fontSize: FontSize.size_mini,
  },
  translatedtextitem: {
    left: 0,
    position: "absolute",
    top: 0,
  },
  frameWrapper: {
    padding: 10,
    maxWidth: 375,
    top: 0,
    overflow: "hidden",
    flex: 1,
  },
  mainScreenInner: {
    top: 77,
    height: 584,
  },
  mainScreenIcon: {
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default MainScreen;
