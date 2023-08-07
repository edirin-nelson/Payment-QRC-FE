// screens/LandingScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LandingScreen = () => {
  const navigation = useNavigation();

  const handleBeginButtonPress = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>QRC-Pay</Text>
      <TouchableOpacity style={styles.beginButton} onPress={handleBeginButtonPress}>
        <Text style={styles.beginButtonText}>Let's Begin</Text>
      </TouchableOpacity>
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
  beginButton: {
    backgroundColor: 'purple',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  beginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LandingScreen;
