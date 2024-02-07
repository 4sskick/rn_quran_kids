import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackBottomTabParamList} from '../../util/IRootParamsNavigation';
import React from 'react';
import {home, quiz, quran} from '..';
import {Image} from 'react-native';

interface props {}

const DashboardStack = createBottomTabNavigator<RootStackBottomTabParamList>();

class DashboardStackNav extends React.Component<props> {
  render() {
    return (
      <DashboardStack.Navigator
        detachInactiveScreens={true}
        screenOptions={{headerShown: false}}
        safeAreaInsets={{bottom: 12}}
        sceneContainerStyle={{
          flex: 1,
          borderColor: 'white',
          borderWidth: 16,
        }}>
        <DashboardStack.Screen
          name={'home'}
          component={home}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  source={require('../../assets/images/home.png')}
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: focused ? '#009788' : '#b2b2b2',
                  }}
                />
              );
            },
          }}
        />
        <DashboardStack.Screen
          name={'quiz'}
          component={quiz}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  source={require('../../assets/images/quiz.png')}
                  style={{
                    height: 50,
                    width: 50,
                    marginBottom: 20,
                    tintColor: focused ? '#009788' : '#B83B5E',
                  }}
                />
              );
            },
          }}
        />
        <DashboardStack.Screen
          name={'quran'}
          component={quran}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  source={require('../../assets/images/quran.png')}
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: focused ? '#009788' : '#b2b2b2',
                  }}
                />
              );
            },
          }}
        />
      </DashboardStack.Navigator>
    );
  }
}
export default DashboardStackNav;
