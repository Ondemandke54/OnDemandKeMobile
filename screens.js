// screens/WelcomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to OnDemandKEMobile!</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
    </View>
  );
};

export default WelcomeScreen;
