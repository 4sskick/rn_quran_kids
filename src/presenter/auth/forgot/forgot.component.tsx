import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaView, TextInput, TouchableOpacity} from 'react-native';

import {Component} from 'react';
import {HeaderBackground} from '../../custom/component';
import styles from './forgot.style';
import {RootStackParamList} from '../../../util/IRootParamsNavigation';
import {Text, View} from 'native-base';

interface ForgotPasswordProps
  extends NativeStackScreenProps<RootStackParamList, 'forgotpassword'> {}

interface State {
  email: string;
  error: string | null;
}

class ForgotPassword extends Component<ForgotPasswordProps, State> {
  constructor(props: ForgotPasswordProps) {
    super(props);

    this.state = {
      email: '',
      error: null,
    };
  }

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <HeaderBackground
          headerText="Lupa Kata sandi?"
          headerTextSub="Masukkan alamat email, kami bantu pulihkan"
        />
        <View style={styles.viewBottom}>
          <View>
            <Text style={styles.txtEmail}>Email</Text>
            <TextInput
              style={[styles.textInput]}
              placeholder="Alamat email kamu"
              placeholderTextColor="#b2b2b2"
              onChangeText={val => this.setState({email: val})}
              value={'email'}
            />
          </View>

          <TouchableOpacity
            onPress={() => console.log('lupa!!')}
            style={[styles.btnDaftar, {backgroundColor: '#419489'}]}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15}}>
              Kirim
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default ForgotPassword;
