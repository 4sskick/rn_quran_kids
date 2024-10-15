import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, { memo } from 'react';
import {auth, forgotpassword, login, register} from '..';
import {RootStackParamList} from '../../util/IRootParamsNavigation';
import DashboardStackNav from './DashboardStack';

interface Props {}

const AuthStack = createNativeStackNavigator<RootStackParamList>();

class AuthStackNav extends React.Component<Props> {
  render() {
    return (
      <AuthStack.Navigator screenOptions={{headerShown: false}}>
        <AuthStack.Screen name={'auth'} component={auth} />
        <AuthStack.Screen name={'login'} component={login} />
        <AuthStack.Screen name={'register'} component={register} />
        <AuthStack.Screen name={'forgotpassword'} component={forgotpassword} />
        <AuthStack.Screen name={'dashboard'} component={DashboardStackNav} />
      </AuthStack.Navigator>
    );
  }
}

export default memo(AuthStackNav);
