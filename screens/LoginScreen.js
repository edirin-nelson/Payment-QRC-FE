import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import api from '../api/apiManager'; // Import the api module

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegisterLinkPress = () => {
    navigation.navigate('RegistrationScreen');
  };

  const handleLoginButtonPress = () => {
    // Create the login request object
    const loginRequest = {
      email: email,
      password: password,
    };

    // Make the API request to the login endpoint using the API manager
    api
      .post('auth/login', loginRequest) // Assuming 'auth' is the base URL for authentication endpoints
      .then((response) => {
        // Handle successful response here
        console.log('Login successful:', response.data);
        navigation.navigate('HomeScreen'); // Navigate to the home screen after successful login
      })
      .catch((error) => {
        // Handle error here
        console.error('Error logging in:', error);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCompleteType="email"
        keyboardType="email-address"
      />
      <View style={styles.passwordInputContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.passwordVisibilityIcon}>
          <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="gray" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLoginButtonPress}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.registerLinkContainer}>
        <Text style={styles.registerText}>New to the app? </Text>
        <TouchableOpacity onPress={handleRegisterLinkPress}>
          <Text style={styles.registerLink}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    height: 40,
  },
  passwordVisibilityIcon: {
    padding: 10,
  },
  loginButton: {
    width: 300,
    backgroundColor: 'purple',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerLinkContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  registerText: {
    fontSize: 16,
  },
  registerLink: {
    fontSize: 16,
    color: 'blue',
  },
});

export default LoginScreen;
