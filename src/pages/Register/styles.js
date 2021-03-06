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
  input: {
    alignSelf: 'stretch',
    borderWidth: 2,
    borderColor: '#8b4367',
    borderRadius: 5,
    marginHorizontal: 30,
    marginTop: 20,
    color: '#8b4367',
    paddingHorizontal: 15,
  },
  createButton: {
    alignSelf: 'stretch',
    marginHorizontal: 30,
    marginTop: 30,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#8b4367',
    backgroundColor: '#8b4367',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  createText: {
    color: '#fff',
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
  inputErr: {
    borderColor: '#f00',
  },
  textErr: {
    color: '#f00',
    fontSize: 10,
    alignSelf: 'flex-start',
    marginLeft: 40,
    marginVertical: 0,
    lineHeight: 12,
  },
});

export default styles;
