import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RootStackBottomTabParamList} from '../../util/IRootParamsNavigation';
import React, { memo } from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './quiz.style';

interface QuizProps
  extends BottomTabScreenProps<RootStackBottomTabParamList, 'quiz'> {}

class Quiz extends React.Component<QuizProps> {
  render(): React.ReactNode {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>INI QUIZ</Text>
        </View>
      </SafeAreaView>
    );
  }
}
export default memo(Quiz);
