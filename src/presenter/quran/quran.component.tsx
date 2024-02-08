import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RootStackBottomTabParamList} from '../../util/IRootParamsNavigation';
import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import styles from './quran.style';

interface QuranProps
  extends BottomTabScreenProps<RootStackBottomTabParamList, 'quran'> {}

class Quran extends React.Component<QuranProps> {
  render(): React.ReactNode {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text> INI QURAN</Text>
        </View>
      </SafeAreaView>
    );
  }
}
export default Quran;
