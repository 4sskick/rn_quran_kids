import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bgimg: {
    width: '100%',
    height: 450,
  },
  viewBottom: {
    backgroundColor: '#fff',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    position: 'absolute',
    bottom: 0,
    height: 450,
    width: '100%',
    alignItems: 'center',
  },
  txtWelcome: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 40,
  },
  txtDesc: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 10,
    paddingHorizontal: 40,
  },
  btnSignup: {
    backgroundColor: '#009788',
    height: 40,
    width: '80%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  txtSignup: {
    textAlign: 'center',
    fontSize: 12,
    color: '#fff',
    fontWeight: '500',
  },
  btnLogin: {
    borderWidth: 1,
    borderColor: '#009788',
    height: 40,
    width: '80%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  txtLogin: {
    textAlign: 'center',
    fontSize: 12,
    color: '#009788',
    fontWeight: '500',
  },
  txtPrivacy: {
    textAlign: 'center',
    fontSize: 10,
    marginTop: 30,
    paddingHorizontal: 40,
  },
});
export default styles;
