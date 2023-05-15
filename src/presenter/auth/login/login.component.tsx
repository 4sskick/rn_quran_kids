import {Component} from 'react';
import {Image, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import styles from './login.style';
import {View, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../util/IRootParamsNavigation';

interface LoginProps
  extends NativeStackScreenProps<RootStackParamList, 'login'> {}

class Login extends Component<LoginProps> {
  render() {
    const {route, navigation} = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Image source={require('../../../assets/images/header-bg.png')} />

          {/* header */}
          <View style={styles.viewHeader}>
            <Text style={styles.txtHeaderMasuk}>
              Masuk , {route.params.name}
            </Text>
            <Text style={styles.txtIsian}>Pastikan kamu sudah punya akun</Text>
            <Text style={styles.txtIsian}>Sebelumnya</Text>
          </View>
        </View>

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
