import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Component, ReactNode} from 'react';
import {RootStackParamList} from '../../../util/IRootParamsNavigation';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {View} from 'native-base';
import styles from './register.style';
import {HeaderBackground} from '../../custom/component';

interface RegisterProps
  extends NativeStackScreenProps<RootStackParamList, 'register'> {}

class Register extends Component<RegisterProps> {
  render() {
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

          <View>
            <Text style={styles.txtEmail}>Ulangi Kata Sandi</Text>
            <TextInput
              style={[styles.textInput]}
              placeholder="ulangi kata sandi kamu"
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
      </SafeAreaView>
    );
  }
}

export default Register;
