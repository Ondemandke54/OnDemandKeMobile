import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  // Logout function
  const logout = async () => {
    try {
      // Clear user data from AsyncStorage (or any other method you're using for auth)
      await AsyncStorage.removeItem('userToken');
      navigation.replace('Login'); // Redirect to Login screen after logout
    } catch (e) {
      Alert.alert('Error', 'Logout failed, please try again.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Home Screen!</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default HomeScreen;
