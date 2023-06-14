/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
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
  Platform,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Color, Border, FontFamily, FontSize} from '../GlobalStyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextItemProps} from '../models/ComponentsProps';
import {getDateFormat} from '../helpers/date';
import SoundRecorder from 'react-native-sound-recorder';
import * as RNFS from 'react-native-fs';
import {getTranslationAPI} from '../api/api';

const MainScreen = () => {
  const [convertedTexts, setConvertedTexts] = React.useState<TextItemProps[]>(
    [],
  );
  const [isListening, setIsListening] = React.useState(false);

  console.log(RNFS.DocumentDirectoryPath); //alternative to MainBundleDirectory.
  const startListening = async () => {
    Alert.alert('Budh Rehmat', 'Tun wado Tatu aa');
    setIsListening(true);

    SoundRecorder.start(SoundRecorder.PATH_CACHE + '/test.mp4').then(
      function () {
        console.log('started recording');
      },
    );
  };

  const stopListening = async () => {
    setIsListening(false);

    SoundRecorder.stop().then(function (result) {
      console.log('stopped recording, audio file saved at: ' + result.path);

      RNFS.readFile(result.path, 'base64').then(data => {
        var formData = new FormData();

        let file = Buffer.from(data, 'base64');
        formData.append('file', file);

        getTranslationAPI(formData);
      });
    });
  };

  const getPermissions = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Permissions for write access',
            message: 'Give permission to your storage to write a file',
            buttonPositive: 'ok',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the storage');
        } else {
          console.log('permission denied');
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          {
            title: 'Permissions for write access',
            message: 'Give permission to your storage to write a file',
            buttonPositive: 'ok',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use record');
        } else {
          console.log('permission denied');
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }
  };

  React.useEffect(() => {
    getPermissions();
  }, []);

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

      <Pressable
        onPress={isListening ? stopListening : startListening}
        style={styles.voiceFabIcon}>
        {isListening ? (
          <Image
            resizeMode="cover"
            source={require('../assets/voice-stop-fab.png')}
          />
        ) : (
          <Image
            resizeMode="cover"
            source={require('../assets/voice-fab.png')}
          />
        )}
      </Pressable>

      <View style={[styles.mainScreenInner, styles.bgPosition]}>
        <ScrollView
          style={[styles.frameWrapper, styles.bgPosition]}
          pagingEnabled={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.frameScrollViewContent}>
          {convertedTexts.map(item => (
            <View
              style={styles.translatedtextitemLayout}
              key={Date.now().toString()}>
              <View
                style={[
                  styles.translatedtextitem,
                  styles.translatedtextitemLayout,
                ]}>
                <Text style={[styles.helloHopeYouContainer, styles.pmFlexBox]}>
                  {item.message}
                </Text>
                <Image
                  style={[
                    styles.systemUiconswrite,
                    styles.systemUiconswritePosition,
                  ]}
                  resizeMode="cover"
                  source={require('../assets/write-icon.png')}
                />
                <Text style={[styles.pm, styles.pmFlexBox]}>
                  {getDateFormat(item.date)}
                </Text>
              </View>
            </View>
          ))}
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
    marginBottom: 10,
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
    marginRight: 10,
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
