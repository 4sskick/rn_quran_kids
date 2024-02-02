import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackBottomTabParamList} from '../../util/IRootParamsNavigation';
import React from 'react';
import {home, quiz, quran} from '..';

interface props {}

const DashboardStack = createBottomTabNavigator<RootStackBottomTabParamList>();

class DashboardStackNav extends React.Component<props> {
  render() {
    return (
      <DashboardStack.Navigator
        detachInactiveScreens={true}
        sceneContainerStyle={{flex: 1, backgroundColor: 'red'}}>
        <DashboardStack.Screen name={'home'} component={home} />
        <DashboardStack.Screen name={'quiz'} component={quiz} />
        <DashboardStack.Screen name={'quran'} component={quran} />
      </DashboardStack.Navigator>
    );
  }
}
export default DashboardStackNav;
