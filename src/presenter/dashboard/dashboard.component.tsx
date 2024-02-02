import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  RootStackBottomTabParamList,
  RootStackParamList,
} from '../../util/IRootParamsNavigation';
import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './dashboard.style';
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {View} from 'native-base';
import {Text} from 'react-native-svg';

// interface DashboardProps extends NativeStackScreenProps<RootStackParamList, 'dashboard'>{}
interface DashboardProps
  extends BottomTabScreenProps<RootStackBottomTabParamList, 'home'> {}

class Dashboard extends React.Component<DashboardProps> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>INI DASHBOARD</Text>
        </View>
      </SafeAreaView>
    );
  }
}
export default Dashboard;
