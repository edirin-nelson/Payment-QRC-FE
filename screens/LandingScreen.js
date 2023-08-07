import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LandingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to QRC-P@Y</Text>
      {/* Add any content or buttons for the landing screen */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default LandingScreen;
