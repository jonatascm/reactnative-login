import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  Animated,
} from 'react-native';
import logo from '../../assets/logo.jpg';
import styles from './styles';

export default function Register({navigation}) {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [passConfirm, setPassConfirm] = useState('');
  const [keyboard, setKeyboard] = useState(true);
  const [logoSize] = useState(new Animated.ValueXY({x: 150, y: 150}));
  const [userErr, setUserErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [passConfirmErr, setPassConfirmErr] = useState(false);

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

  function onCreate() {
    let err = false;

    if (user === '') {
      err = true;
      setUserErr(true);
    } else {
      setUserErr(false);
    }

    if (email === '') {
      err = true;
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }

    if (pass === '') {
      err = true;
      setPassErr(true);
    } else {
      if (pass != passConfirm) {
        err = true;
        setPassConfirmErr(true);
      } else {
        setPassConfirmErr(false);
      }
      setPassErr(false);
    }

    if (err) {
      return;
    }
  }

  return (
    <>
      <View style={styles.loginContainer}>
        <Animated.Image
          style={{width: logoSize.x, height: logoSize.y}}
          source={logo}
        />
        <TextInput
          style={[styles.input, userErr ? styles.inputErr : null]}
          value={user}
          onChange={event => {
            setUser(event.nativeEvent.text);
            setUserErr(false);
          }}
          placeholder="Usuário"
          placeholderTextColor="#eee"
          autoCorrect={false}
          underlineColorAndroid={'transparent'}
          autoCapitalize={'none'}
        />
        {userErr ? <Text style={styles.textErr}>Usuário invalido</Text> : null}
        <TextInput
          style={[styles.input, emailErr ? styles.inputErr : null]}
          value={email}
          onChange={event => {
            setEmail(event.nativeEvent.text);
            setEmailErr(false);
          }}
          placeholder="Email"
          placeholderTextColor="#eee"
          autoCorrect={false}
          underlineColorAndroid={'transparent'}
          autoCapitalize={'none'}
        />
        {emailErr ? <Text style={styles.textErr}>Email invalido</Text> : null}
        <TextInput
          style={[styles.input, passErr ? styles.inputErr : null]}
          value={pass}
          onChange={event => {
            setPass(event.nativeEvent.text);
            setPassErr(false);
          }}
          placeholder="Senha"
          placeholderTextColor="#eee"
          autoCorrect={false}
          underlineColorAndroid={'transparent'}
          autoCapitalize={'none'}
        />
        {passErr ? <Text style={styles.textErr}>Senha invalida</Text> : null}
        <TextInput
          style={[styles.input, passConfirmErr ? styles.inputErr : null]}
          value={passConfirm}
          onChange={event => {
            setPassConfirm(event.nativeEvent.text);
            setPassConfirmErr(false);
          }}
          placeholder="Respetir Senha"
          placeholderTextColor="#eee"
          autoCorrect={false}
          underlineColorAndroid={'transparent'}
          autoCapitalize={'none'}
        />
        {passConfirmErr ? (
          <Text style={styles.textErr}>Senhas diferentes</Text>
        ) : null}
        <TouchableOpacity style={styles.createButton} onPress={onCreate}>
          <Text style={styles.createText}>CRIAR CONTA</Text>
        </TouchableOpacity>
      </View>
      {keyboard ? (
        <View style={styles.registerContainer}>
          <Text>Já possui uma conta?</Text>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.registerText}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </>
  );
}
