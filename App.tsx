import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigator';

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
export default App;
