import * as React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  ImageBackground,
  StatusBar,
  Pressable,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Color, Border, FontFamily, FontSize} from '../GlobalStyles';
import {SafeAreaView} from 'react-native-safe-area-context';

const MainScreen = () => {
  return (
    <View style={styles.container}>
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

      <Pressable style={styles.voiceFabIcon}>
        <Image resizeMode="cover" source={require('../assets/voice-fab.png')} />
      </Pressable>

      <View style={[styles.mainScreenInner, styles.bgPosition]}>
        <ScrollView
          style={[styles.frameWrapper, styles.bgPosition]}
          pagingEnabled={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.frameScrollViewContent}>
          <View style={styles.translatedtextitemLayout}>
            <View
              style={[
                styles.translatedtextitem,
                styles.translatedtextitemLayout,
              ]}>
              <Text style={[styles.helloHopeYouContainer, styles.pmFlexBox]}>
                Hello, Hope you are doing well,So this is the area where text
                will be displayed.{' '}
              </Text>
              <Image
                style={[
                  styles.systemUiconswrite,
                  styles.systemUiconswritePosition,
                ]}
                resizeMode="cover"
                source={require('../assets/write-icon.png')}
              />
              <Text style={[styles.pm, styles.pmFlexBox]}>10:30 AM</Text>
            </View>
          </View>
        </ScrollView>
      </View>
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

  untitled11: {
    top: 737,
    left: 119,
    width: 115,
    height: 32,
    position: 'absolute',
  },
  container: {
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
    paddingVertical: 20,
  },
  // Main Screen
  frameScrollViewContent: {
    flexDirection: 'column',
  },
  frameWrapperFlexBox: {
    flex: 1,
    overflow: 'hidden',
  },

  translatedtextitemLayout: {
    height: 95,
    width: 350,
  },
  pmFlexBox: {
    textAlign: 'left',
    color: Color.white,
    position: 'absolute',
  },
  systemUiconswritePosition: {
    left: 0,
    position: 'absolute',
  },

  voiceFabIcon: {
    width: 88,
    height: 88,
    position: 'absolute',
    bottom: 0,
    right: 144,
  },
  helloHopeYouContainer: {
    height: '75.39%',
    width: '85.53%',
    left: '14.35%',
    fontSize: 18,
    fontFamily: FontFamily.nunitoSansRegular,
    top: '0%',
  },
  systemUiconswrite: {
    top: 11,
    borderRadius: 10,
    width: 36,
    height: 48,
    overflow: 'hidden',
  },
  pm: {
    right: 0,
    bottom: 0,
    fontWeight: '300',
    fontFamily: FontFamily.nunitoSansLight,
    width: 85,
    height: 16,
    fontSize: FontSize.size_mini,
  },
  translatedtextitem: {
    left: 0,
    position: 'absolute',
    top: 0,
  },
  frameWrapper: {
    padding: 10,
    maxWidth: 375,
    top: 0,
    overflow: 'hidden',
    flex: 1,
  },
  mainScreenInner: {
    top: 77,
    height: 584,
  },
});

export default MainScreen;
