import {memo, PureComponent} from 'react';
import {Button, Modal, Text, TouchableOpacity, View} from 'react-native';
import styles from './dialog.style';

interface DialogProps {
  title: string | null;
  subtitle: string | null;
  content: string | null;
  isVisible: boolean;
  onClose: () => void;
}

interface State {}

class Dialog extends PureComponent<DialogProps, State> {
  constructor(props: DialogProps) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.props.isVisible}
          onRequestClose={this.props.onClose}>
          <View style={styles.container}>
            <View style={styles.content}>
              <Text>{this.props.content}</Text>
              <TouchableOpacity
                style={[styles.btnPosDialog, {backgroundColor: '#419489'}]}
                onPress={this.props.onClose}>
                <Text
                  style={{
                    color: '#fff',
                    padding: 10,
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}>
                  Tutup
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default memo(Dialog);
