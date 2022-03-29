import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Input } from 'native-base';
import { auth } from '../../firebase';
import {
  Auth,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
} from 'firebase/auth';
import { Container, StyledButton } from './Login.style';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [confirm, setConfirm] = useState(null);

  const navigation = useNavigation();

  const openRegisterScreen = () => {
    navigation.navigate('Register');
  };

  async function signin() {
    signInWithPhoneNumber('+91 8341661596', {})
      .then((confirmation) => {
        navigation.navigate('Verification');
        setConfirm(confirmation);
      })
      .catch(function (Error) {
        console.log(Error);
      });
  }

  /*   const signin = () => {
    //auth().signInWithPhoneNumber('+91 ' + number);

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.navigate('Home');
      })
      .catch((error) => {
        throw error;
      });
  };
 */
  return (
    <Container>
      {/*       <Input
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      /> */}
      <Input
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={(text) => setphoneNumber(text)}
      />
      <StyledButton onPress={signin}>Log in</StyledButton>
      {/* <StyledButton onPress={openRegisterScreen}>register</StyledButton> */}
    </Container>
  );
};

export default Login;
