import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewBottom: {
    backgroundColor: '#fff',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    position: 'absolute',
    bottom: 0,
    height: 550,
    width: '100%',
  },
  txtEmail: {
    color: '#000',
    marginLeft: 30,
    fontWeight: '500',
    marginTop: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#eeeeee',
    height: 50,
    width: '85%',
    borderRadius: 10,
    marginTop: 5,
    paddingLeft: 20,
    paddingRight: 10,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  btnForgot: {
    backgroundColor: '#eeeeee',
    height: 50,
    width: '85%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  viewError: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtError: {
    fontSize: 12,
    color: '#b13330',
    fontWeight: 'bold',
  },
});

export default styles;
