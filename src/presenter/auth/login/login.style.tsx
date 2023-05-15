import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bgimg: {
    width: '100%',
    height: 250,
  },
  viewHeader: {
    position: 'absolute',
    bottom: 50,
    left: 30,
  },
  txtHeaderMasuk: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  txtIsian: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '400',
  },
  viewBottom: {
    backgroundColor: '#fff',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    position: 'absolute',
    bottom: 0,
    height: 450,
    width: '100%',
  },
  txtEmail: {
    color: '#000',
    marginLeft: 30,
    fontWeight: '500',
    marginTop: 20,
  },
  txtKataSandi: {
    color: '#000',
    marginLeft: 30,
    fontWeight: '500',
    marginTop: 10,
  },
  iconSandi: {
    position: 'absolute',
    right: 50,
    top: 50,
  },
  btnDaftar: {
    backgroundColor: '#eeeeee',
    height: 50,
    width: '85%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  btnLupa: {
    width: 100,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 30,
    marginTop: 10,
  },
  txtForgot: {
    fontSize: 10,
    textDecorationLine: 'underline',
    width: 100,
    marginLeft: 20,
  },
  viewLogin: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtAkun: {
    fontSize: 12,
    color: '#000',
    fontWeight: '300',
  },
  txtMasuk: {
    fontSize: 12,
    color: '#009788',
    fontWeight: '500',
    marginLeft: 5,
    textDecorationLine: 'underline',
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
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
    marginLeft: 30,
    marginRight: 30,
  },
  passwordContainer: {
    position: 'relative',
  },
  txtConfirm: {
    color: '#000',
    marginLeft: 30,
    fontWeight: '500',
    marginTop: 10,
  },
});
export default styles;
