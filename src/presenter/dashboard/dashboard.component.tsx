import {RootStackBottomTabParamList} from '../../util/IRootParamsNavigation';
import React from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from './dashboard.style';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {Text} from '@ui-kitten/components';

// interface DashboardProps extends NativeStackScreenProps<RootStackParamList, 'dashboard'>{}
interface DashboardProps
  extends BottomTabScreenProps<RootStackBottomTabParamList, 'home'> {}

class Dashboard extends React.Component<DashboardProps> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>Hello John</Text>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>You've got</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#009788'}}>
            4 challenges Today
          </Text>
        </View>
        <View>
          <Text>widget achievement</Text>
        </View>
        <View>
          <Text>widget list chapter ayat to add from wallet</Text>
        </View>
        <View>
          <Text>widget deck collective of chapter ayat </Text>
        </View>
      </SafeAreaView>
    );
  }
}
export default Dashboard;
