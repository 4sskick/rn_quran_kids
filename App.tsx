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

/**
  surah_read: 'Al-Fatihah';
  surah: 1;
  verse: 2;
 */
export type QSurahVerse = {
  surah_read: string;
  surah: number;
  verse: number;
};

//add more prop type
export type QSingleSurahVerse = QSurahVerse & {mastered: boolean};

export type QSurahVerses = QSingleSurahVerse[];

export type QDeck = {
  id: number;
  name: string;
  createdTimestamp: number;
  updatedTimestamp: number;
  surah_verses: QSurahVerses;
};

//immutable
export type QDecks = ReadonlyArray<QDeck>;
//mutable
export type QEnrichedDecks = QDeck[];

//every time decks data set on last element will always there placeholder
export const enrichDecksWithPlaceholder = (decks: QEnrichedDecks): QDecks => {
  const genesisDeck: QDeck = {
    id: -1,
    name: '__OG_PLACEHOLDER__',
    createdTimestamp: 1609757292,
    updatedTimestamp: 1609757492,
    surah_verses: [],
  };

  decks.push(genesisDeck);

  return decks;
};

//main data structure to be exported which will use as context
export type QAppData = {
  decksData: QDecks;
  setDecksData: (value: QDecks) => void;
};

export const AppDataContext = React.createContext({} as QAppData);
