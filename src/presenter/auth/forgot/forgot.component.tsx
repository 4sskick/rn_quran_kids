import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

import {Component} from 'react';
import {HeaderBackground} from '../../custom/component';
import styles from './forgot.style';
import {RootStackParamList} from '../../../util/IRootParamsNavigation';
import forgotService from './forgot.service';
import Dialog from '../../custom/component/dialog/dialog.component';

interface ForgotPasswordProps
  extends NativeStackScreenProps<RootStackParamList, 'forgotpassword'> {}

interface State {
  email: string;
  error: string | null;
  isShowDialog: boolean;
}

class ForgotPassword extends Component<ForgotPasswordProps, State> {
  constructor(props: ForgotPasswordProps) {
    super(props);

    this.state = {
      email: '',
      error: null,
      isShowDialog: false,
    };
  }

  handleForgotPassword = async () => {
    const {email} = this.state;
    try {
      await forgotService.doForgotPassword(email).then(() => {
        this.setState({error: null, isShowDialog: true});
      });
    } catch (err: any) {
      this.setState({error: err.message});
    }
  };

  render() {
    const {navigation} = this.props;
    const {email, error, isShowDialog} = this.state;
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
              value={email}
            />
          </View>

          <TouchableOpacity
            onPress={this.handleForgotPassword}
            style={[styles.btnForgot, {backgroundColor: '#419489'}]}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15}}>
              Kirim
            </Text>
          </TouchableOpacity>

          <View style={styles.viewError}>
            <Text style={styles.txtError}>{error}</Text>

            <Dialog
              isVisible={isShowDialog}
              title={null}
              subtitle={null}
              content={'Content dialog'}
              onClose={() => {
                console.log(`closed from dialog`);
                this.setState({isShowDialog: false});
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default ForgotPassword;
