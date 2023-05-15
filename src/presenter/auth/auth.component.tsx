import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParamList} from '../../util/IRootParamsNavigation';
import styles from './auth.style';

interface AuthProps
  extends NativeStackScreenProps<RootStackParamList, 'auth'> {}

class Auth extends React.Component<AuthProps> {
  render() {
    //navgation and route is automatically injected into props, the time navigator rendered the component
    //in case you are implementing stack.screen react navigation
    //navigation props, provides access to navigation methods (ex 'navigate', 'push', 'goBack' and others)
    //route props, will be help to pas a params.
    const {navigation} = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Image
            source={require('../../assets/images/bg-onboarding.png')}
            style={styles.bgimg}
          />
        </View>

        <View style={styles.viewBottom}>
          <Text style={styles.txtWelcome}>Selamat Datang</Text>
          <Text style={styles.txtDesc}>Ini Description</Text>

          <TouchableOpacity style={styles.btnSignup}>
            <Text style={styles.txtSignup}>Daftar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnLogin}
            onPress={() =>
              navigation.navigate('login', {name: 'test@gmail.com'})
            }>
            <Text style={styles.txtLogin}>Masuk</Text>
          </TouchableOpacity>

          <Text style={styles.txtPrivacy}>
            Dengan daftar atau masuk, Anda menerima syarat dan ketentuan serta
            kebijakan privasi
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default Auth;
