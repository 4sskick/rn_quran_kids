import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native';

import {Component} from 'react';
import {HeaderBackground} from '../../custom/component';
import styles from './forgot.style';
import {RootStackParamList} from '../../../util/IRootParamsNavigation';

interface ForgotPasswordProps
  extends NativeStackScreenProps<RootStackParamList, 'forgotpassword'> {}

class ForgotPassword extends Component<ForgotPasswordProps> {
  constructor(props: ForgotPasswordProps) {
    super(props);
  }
}

export default ForgotPassword;
