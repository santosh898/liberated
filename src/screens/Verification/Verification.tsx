// Needs to contain options to select whom to chat with

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-svg';

const Verification = () => {
  const navigation = useNavigation();

  const chat = () => {
    // Need to go to the proper user
    navigation.navigate('Chat');
  };
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default Verification;
