import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  registerContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    width: 400,
  },
  socialButton: {
    width: 150,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#8b4367',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
  },
  socialText: {
    color: '#8b4367',
    marginLeft: 5,
  },
  socialIcon: {
    marginRight: 10,
  },
  orContainer: {
    flexDirection: 'row',
  },
  line: {
    borderBottomWidth: 0.5,
    borderColor: '#8b4367',
    margin: 10,
    flex: 1,
  },
  or: {
    textAlign: 'center',
    width: 30,
    color: '#8b4367',
  },
  input: {
    alignSelf: 'stretch',
    borderWidth: 2,
    borderColor: '#8b4367',
    borderRadius: 5,
    marginHorizontal: 30,
    marginVertical: 15,
    color: '#8b4367',
    paddingHorizontal: 15,
  },
  loginButton: {
    alignSelf: 'stretch',
    marginHorizontal: 30,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#8b4367',
    backgroundColor: '#8b4367',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  loginText: {
    color: '#fff',
  },
  forgotButton: {
    marginTop: 15,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  forgotText: {
    color: '#8b4367',
  },
  registerButton: {
    alignSelf: 'stretch',
    marginHorizontal: 30,
    marginVertical: 20,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#8b4367',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  registerText: {
    color: '#8b4367',
  },
});

export default styles;
