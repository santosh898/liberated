// Needs to contain options to select whom to chat with

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { Button } from 'native-base';

const Home = () => {
  const navigation = useNavigation();

  const chat = () => {
    // Need to go to the proper user
    navigation.navigate('Chat');
  };
  return (
    <View>
      <Button onPress={chat}>Start</Button>
    </View>
  );
};

export default Home;
