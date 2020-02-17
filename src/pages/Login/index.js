import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import logo from '../../assets/logo.jpg';

export default function Login({navigation}) {
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');
  const [keyboard, setKeyboard] = useState(false);
  const [loginErr, setLoginErr] = useState(false);
  const [passErr, setPassErr] = useState(true);
  const [logoSize] = useState(new Animated.ValueXY({x: 150, y: 150}));

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboard(false);
      Animated.parallel([
        Animated.timing(logoSize.x, {
          toValue: 80,
          duration: 200,
        }),
        Animated.timing(logoSize.y, {
          toValue: 80,
          duration: 200,
        }),
      ]).start();
    });

    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboard(true);
      Animated.parallel([
        Animated.timing(logoSize.x, {
          toValue: 150,
          duration: 100,
        }),
        Animated.timing(logoSize.y, {
          toValue: 150,
          duration: 100,
        }),
      ]).start();
    });
  }, [logoSize.x, logoSize.y]);

  function onLogin() {
    let err = false;

    if (login == '') {
      err = true;
      setLoginErr(true);
    } else {
      setLoginErr(false);
    }

    if (pass == '') {
      err = true;
      setPassErr(true);
    } else {
      setPassErr(false);
    }

    if (err) {
      console.log('ERRO');
      return;
    }
    console.log('Teste');
  }

  return (
    <>
      <View style={styles.loginContainer}>
        <Animated.Image
          style={{width: logoSize.x, height: logoSize.y}}
          source={logo}
        />

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialText}>Entrar com</Text>
            <Icon
              name="facebook"
              size={20}
              color="#8b4367"
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialText}>Entrar com</Text>
            <Icon
              name="google"
              size={20}
              color="#8b4367"
              style={styles.socialIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.or}>OR</Text>
          <View style={styles.line} />
        </View>
        <TextInput
          style={styles.input}
          value={login}
          onChange={event => setLogin(event.nativeEvent.text)}
          placeholder="Usuário ou Email"
          placeholderTextColor="#eee"
          autoCorrect={false}
          underlineColorAndroid={'transparent'}
          autoCapitalize={'none'}
        />
        <TextInput
          style={styles.input}
          value={pass}
          onChange={event => setPass(event.nativeEvent.text)}
          placeholder="Senha"
          placeholderTextColor="#eee"
          autoCorrect={false}
          underlineColorAndroid={'transparent'}
          autoCapitalize={'none'}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
          <Text style={styles.loginText}>ENTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgotButton}>
          <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
      {keyboard ? (
        <View style={styles.registerContainer}>
          <Text>Não possui uma conta?</Text>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </>
  );
}
