import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {auth, login, register} from '../../presenter/index';
import {RootStackParamList} from '../../util/IRootParamsNavigation';

interface Props {}

const AuthStack = createNativeStackNavigator<RootStackParamList>();

class AuthStackNav extends React.Component<Props> {
  render() {
    return (
      <AuthStack.Navigator screenOptions={{headerShown: false}}>
        <AuthStack.Screen name={'auth'} component={auth} />
        <AuthStack.Screen name={'login'} component={login} />
        <AuthStack.Screen name={'register'} component={register} />
      </AuthStack.Navigator>
    );
  }
}

export default AuthStackNav;
