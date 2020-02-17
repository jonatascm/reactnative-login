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

    return () => {
      Keyboard.removeAllListeners('keyboardDidShow', () => setKeyboard(false));
      Keyboard.removeAllListeners('keyboardDidHide', () => setKeyboard(true));
    };
  }, [logoSize.x, logoSize.y]);

  return (
    <>
      <View style={styles.loginContainer}>
        <Animated.Image
          style={{width: logoSize.x, height: logoSize.y}}
          source={logo}
        />
        <TextInput
          style={styles.input}
          value={user}
          onChange={e => setUser(e.target.value)}
          placeholder="Usuário"
          placeholderTextColor="#eee"
          autoCorrect={false}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          placeholderTextColor="#eee"
          autoCorrect={false}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.input}
          value={pass}
          onChange={e => setPass(e.target.value)}
          placeholder="Senha"
          placeholderTextColor="#eee"
          autoCorrect={false}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.input}
          value={passConfirm}
          onChange={e => setPassConfirm(e.target.value)}
          placeholder="Usuário"
          placeholderTextColor="#eee"
          autoCorrect={false}
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity style={styles.createButton}>
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
