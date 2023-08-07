// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import ScanScreen from './screens/ScanScreen';
// import TransferScreen from './screens/TransferScreen';
// import TransactionSuccessScreen from './screens/TransactionSuccessScreen';

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Scan" component={ScanScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Transfer" component={TransferScreen} />
//         <Stack.Screen name="TransactionSuccess" component={TransactionSuccessScreen} />
//         {/* Add other screens to the stack as needed */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;




import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './navigation/AppStack';

const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
