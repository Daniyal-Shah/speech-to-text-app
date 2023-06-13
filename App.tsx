/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import SplashScreen from './screens/SplashScreen';

const Stack = createNativeStackNavigator();
function App() {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 3000);
  }, []);
  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            {!hideSplashScreen && (
              <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{headerShown: false}}
              />
            )}
            <Stack.Screen
              name="MainScreen"
              component={MainScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
}

export default App;
