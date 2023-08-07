import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionSuccessScreen = ({ route }) => {
  const { message } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default TransactionSuccessScreen;
