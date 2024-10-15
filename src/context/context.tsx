import React from 'react';

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

//main context
export type QAppData = {
  decksData: QDecks;
  setDecksData: (value: QDecks) => void;
};

export default React.createContext({} as QAppData);
