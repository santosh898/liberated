import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Input } from 'native-base';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Container, StyledButton } from './Login.style';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const openRegisterScreen = () => {
    navigation.navigate('Register');
  };

  const signin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.navigate('Home');
      })
      .catch((error) => {
        throw error;
      });
  };

  return (
    <Container>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <StyledButton onPress={signin}>Sign in</StyledButton>
      <StyledButton onPress={openRegisterScreen}>register</StyledButton>
    </Container>
  );
};

export default Login;
