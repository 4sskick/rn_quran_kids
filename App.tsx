/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import AuthStackNav from './src/presenter/custom/AuthStack';
import 'react-native-devsettings';

const App = () => {
  // if (__DEV__) {
  // const devSettings = NativeModules.DevSettings;
  // if (devSettings) devSettings.setIsDebuggingRemotely(true);
  // NativeModules.DevSettings.setIsDebuggingRemotely(true);
  // }

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={eva.light}>
        <AuthStackNav />
      </ApplicationProvider>
    </NavigationContainer>
  );
};

export default App;
