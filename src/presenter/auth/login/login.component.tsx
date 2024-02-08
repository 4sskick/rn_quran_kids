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

  setInput = (setter: keyof State) => {
    // takes a value and an optional callback function
    return (val: string | null, callback?: () => void) => {
      //doing update state by preserve a dynamic key of setState
      //if setter is 'email', it is equivalent to ({email: val})

      console.log(`gonna update the ${setter} with value ${val}`);

      const updateState = () => ({
        [setter]: val,
      });

      this.setState(updateState() as Pick<State, keyof State>, callback);
    };

    /**
     * simpler version would be
     * 
      setInput = (setter: keyof State) =>(val:String | null, callback?: ()=> void)=>{
        this.setState({
          [setter]: val
        } as Pick<State, keyof State>, callback);
      }
     */
  };

  handleLogin = async () => {
    const {email, password} = this.state;

    try {
      await loginService.doLogin(email, password);

      if (loginService.isAuthenticated()) {
        console.log(`authenticated!`);
        // this.setState({error: null}, () => {
        //   this.props.navigation.navigate('dashboard');
        // });

        this.setInput('error')(null, () => {
          this.props.navigation.navigate('dashboard');
        });
      }
    } catch (err: any) {
      console.log(`Error: ${err}`);

      this.setInput('error')(err.message);
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
              onChangeText={this.setInput('email')}
              value={email}
            />
          </View>

          <View>
            <Text style={styles.txtEmail}>Kata Sandi</Text>
            <TextInput
              style={[styles.textInput]}
              placeholder="kata sandi kamu"
              placeholderTextColor="#b2b2b2"
              onChangeText={this.setInput('password')}
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
