// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';
// import { BarCodeScanner } from 'expo-barcode-scanner';

// const ScanScreen = () => {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [scanned, setScanned] = useState(false);
//   const [text, setText] = useState('Not yet scanned');
//   const [success, setSuccess] = useState(false);

//   const askForCameraPermission = () => {
//     (async () => {
//       const { status } = await BarCodeScanner.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   };

//   // Request Camera Permission
//   useEffect(() => {
//     askForCameraPermission();
//   }, []);

//   // What happens when we scan the bar code
//   const handleBarCodeScanned = ({ type, data }) => {
//     setScanned(true);
//     setText(data);
//     setSuccess(true);
//     console.log('Type: ' + type + '\nData: ' + data);
//   };

//   // Handle payment function (you need to implement this)
//   const makePayment = async () => {
//     // Implementation of the makePayment function as per your requirements
//     // ...
//   };

//   // Return the View
//   return (
//     <View style={styles.container}>
//       {!success && <Text style={styles.heading}>Scan QR Code to make payment</Text>}
//       {!success ? (
//         <>
//           <View style={styles.barcodebox}>
//             <BarCodeScanner
//               onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
//               style={{ height: 400, width: 400 }}
//             />
//           </View>
//           <Text style={styles.maintext}>{text}</Text>
//           {scanned && (
//             <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />
//           )}
//         </>
//       ) : (
//         <>
//           <Text style={styles.successText}>Success</Text>
//           <Button title={'Make Payment'} onPress={makePayment} color='navy' />
//         </>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     alignSelf: 'center', // Center the text within the camera view
//   },
//   successText: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: 'green',
//     marginBottom: 20,
//   },
//   maintext: {
//     fontSize: 16,
//     marginVertical: 20,
//   },
//   barcodebox: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 300,
//     width: 300,
//     overflow: 'hidden',
//     borderRadius: 30,
//     backgroundColor: 'tomato',
//   },
// });

// export default ScanScreen;

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios';

const ScanScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned');
  const [paymentData, setPaymentData] = useState(null);

  const askForCameraPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  useEffect(() => {
    askForCameraPermission();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);

    // Extracted data from QR code, assuming it's in JSON format
    const qrCodeData = JSON.parse(data);
    setPaymentData(qrCodeData);
    console.log('Type: ' + type + '\nData: ' + data);
  };

  const handleTransfer = async () => {
    if (!paymentData) {
      console.warn('QR Code data not available.');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:9000/api/v1/user/transfer',
        paymentData
      );

      // Handle the response data here (e.g., show success message)
      console.log('Transfer response:', response.data);
    } catch (error) {
      // Handle errors here (e.g., show error message)
      console.error('Error making transfer:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan QR Code to make payment</Text>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }}
        />
      </View>
      {scanned && <Text style={styles.successText}>Success</Text>}
      <Button
        title="Make Payment"
        onPress={handleTransfer}
        color="navy"
        style={styles.button}
      />
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato',
  },
  successText: {
    fontSize: 24,
    color: 'green',
    fontWeight: 'bold',
    marginTop: 20,
  },
  button: {
    marginTop: 20,
  },
});

export default ScanScreen;
