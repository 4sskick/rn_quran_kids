import {Image, Text, View} from 'react-native';
import styles from './header.style';
import {Component} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../util/IRootParamsNavigation';

interface HeaderProps {
  headerText: string;
  headerTextSub: string;
  headerTextSubOpt?: string;
}

class Header extends Component<HeaderProps> {
  render() {
    const {headerText, headerTextSub, headerTextSubOpt} = this.props;

    return (
      <View>
        <Image
          source={require('../../../../assets/images/header-bg.png')}
          style={styles.bgimg}
        />
        <View style={styles.viewHeader}>
          <Text style={styles.txtHeader}>{headerText}</Text>
          <Text style={styles.txtHeaderIsian}>{headerTextSub}</Text>
          {!!headerTextSubOpt && (
            <Text style={styles.txtHeaderIsian}>{headerTextSubOpt}</Text>
          )}
        </View>
      </View>
    );
  }
}
export default Header;
