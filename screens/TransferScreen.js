import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, KeyboardAvoidingView, Platform } from 'react-native';

const TransferScreen = ({ route, navigation }) => {
  // Get the scanned data from the QR code screen
  const { bankName, accountNumber, accountName } = route.params;

  // State to store user input for amount and pin
  const [amount, setAmount] = useState('');
  const [pin, setPin] = useState('');

  // Function to handle transfer and navigate to success screen
  const handleTransfer = () => {
    // Implement the transfer function to make the API request to your backend
    // with the required details (bankName, accountNumber, accountName, amount, and pin).
    // Ensure to handle the response from the API and navigate to the appropriate screen.

    // For example:
    // Make the API request to your backend with fetch or using a library like Axios:
    /*
    fetch('http://localhost:9000/api/v1/user/transfer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bankName,
        accountNumber,
        accountName,
        amount,
        pin,
      }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the backend, check if the transfer was successful,
        // and navigate to the appropriate screen accordingly.

        // For example, if the transfer was successful:
        navigation.navigate('TransactionSuccess', { message: 'Transfer successful!' });

        // If the transfer failed, handle the error and show an appropriate message.
      })
      .catch(error => {
        // Handle the error if the API request fails.
        console.error('Error making transfer:', error);
      });
    */
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.form}>
        <Text style={styles.label}>Bank Name:</Text>
        <Text style={styles.value}>{bankName}</Text>
        <Text style={styles.label}>Account Number:</Text>
        <Text style={styles.value}>{accountNumber}</Text>
        <Text style={styles.label}>Account Name:</Text>
        <Text style={styles.value}>{accountName}</Text>
        <Text style={styles.label}>Amount:</Text>
        <TextInput
          style={styles.input}
          value={amount}
          onChangeText={text => setAmount(text)}
          placeholder="Enter amount"
          keyboardType="numeric"
        />
        <Text style={styles.label}>PIN:</Text>
        <TextInput
          style={styles.input}
          value={pin}
          onChangeText={text => setPin(text)}
          placeholder="Enter PIN"
          secureTextEntry
        />
        <Button title="Make Payment" onPress={handleTransfer} color="navy" />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '80%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default TransferScreen;
