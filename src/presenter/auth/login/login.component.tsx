import {Component} from 'react';
import {Image, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import styles from './login.style';
import {View, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../util/IRootParamsNavigation';
import {HeaderBackground} from '../../custom/component/index';
import loginService from './login.service';

interface LoginProps
  extends NativeStackScreenProps<RootStackParamList, 'login'> {}

interface State {
  email: string;
  password: string;
  error: string | null;
}

class Login extends Component<LoginProps, State> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null,
    };
  }

  handleLogin = async () => {
    const {email, password} = this.state;

    try {
      await loginService.doLogin(email, password);

      if (loginService.isAuthenticated()) {
        console.log(`authenticated!`);
      }
    } catch (err: any) {
      console.log(`Error: ${err}`);

      this.setState({error: err.message});
    }
  };

  render() {
    const {route, navigation} = this.props;
    const {error, email, password} = this.state;

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
              onChangeText={val => this.setState({email: val})}
              value={email}
            />
          </View>

          <View>
            <Text style={styles.txtEmail}>Kata Sandi</Text>
            <TextInput
              style={[styles.textInput]}
              placeholder="kata sandi kamu"
              placeholderTextColor="#b2b2b2"
              onChangeText={val => this.setState({password: val})}
              value={password}
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

            {/* button action */}
            <TouchableOpacity
              onPress={() => navigation.navigate('forgotpassword')}
              style={styles.btnLupa}>
              <Text style={styles.txtForgot}>Lupa kata sandi?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.btnDaftar, {backgroundColor: '#419489'}]}
              onPress={this.handleLogin}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15}}>
                Masuk
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.viewLogin}>
            <Text style={styles.txtAkun}>{error}</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Login;
