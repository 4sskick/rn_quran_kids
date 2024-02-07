import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Component, ReactNode} from 'react';
import {RootStackParamList} from '../../../util/IRootParamsNavigation';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from './register.style';
import {HeaderBackground} from '../../custom/component';

interface RegisterProps
  extends NativeStackScreenProps<RootStackParamList, 'register'> {}

interface State {
  email: string;
  password: string;
  retype_password: string;
  error: string | null;
}
class Register extends Component<RegisterProps, State> {
  constructor(props: RegisterProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
      retype_password: '',
      error: null,
    };
  }

  render() {
    const {route, navigation} = this.props;
    const {email, password, retype_password} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <HeaderBackground
          headerText="Daftar"
          headerTextSub="Lengkapi isian untuk mendaftar"
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
          </View>

          <View>
            <Text style={styles.txtEmail}>Ulangi Kata Sandi</Text>
            <TextInput
              style={[styles.textInput]}
              placeholder="ulangi kata sandi kamu"
              placeholderTextColor="#b2b2b2"
              onChangeText={val => this.setState({retype_password: val})}
              value={retype_password}
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

          {/* button action */}
          <TouchableOpacity
            style={[
              styles.btnDaftar,
              {
                backgroundColor: '#419489',
              },
            ]}
            onPress={() => {}}>
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              Daftar
            </Text>
          </TouchableOpacity>
          <Text style={styles.txtPrivacy}>
            Dengan daftar atau masuk, Anda menerima syarat dan ketentuan serta
            kebijakan privasi
          </Text>
          <View style={styles.viewLogin}>
            <Text style={styles.txtAkun}>Sudah Punya akun ?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('login', {name: ''})}>
              <Text style={styles.txtMasuk}>Yuk masuk</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Register;
