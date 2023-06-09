import {Component} from 'react';
import {Image, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import styles from './login.style';
import {View, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../util/IRootParamsNavigation';
import {HeaderBackground} from '../../custom/component/index';

interface LoginProps
  extends NativeStackScreenProps<RootStackParamList, 'login'> {}

class Login extends Component<LoginProps> {
  render() {
    const {route, navigation} = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <HeaderBackground
          headerText={route.params.name}
          headerTextSub="Pastikan kamu sudah punya akun"
          headerTextSubOpt="Sebelumnya"
        />

        {/* container */}
        <View style={styles.viewBottom}>
          <View>
            <Text style={styles.txtEmail}>E-mail</Text>
            <TextInput
              style={[styles.textInput]}
              placeholder="Alamat email kamu"
              placeholderTextColor="#b2b2b2"
              value={''}
            />
          </View>

          <View>
            <Text style={styles.txtEmail}>Kata Sandi</Text>
            <TextInput
              style={[styles.textInput]}
              placeholder="kata sandi kamu"
              placeholderTextColor="#b2b2b2"
              value={''}
            />
            <TouchableOpacity style={styles.iconSandi}>
              <Image
                source={require('../../../assets/images/eye-hide.png')}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: '#b2b2b2',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* button action */}
      </SafeAreaView>
    );
  }
}

export default Login;
