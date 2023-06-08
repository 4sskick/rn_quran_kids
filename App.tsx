/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import AuthStackNav from './src/presenter/custom/AuthStack';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <AuthStackNav />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
