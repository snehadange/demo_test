import React from 'react';
import { View, StatusBar, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer} from '@react-navigation/native';



import First from './src/Screens/CustomButton';
import Details from './src/Screens/Details';
import EditDetails from './src/Screens/EditDetails';
import InfiniteLoop from './src/Screens/InfiniteLoop';
import DateExample from './src/Screens/DateExample';
import MapExample from './src/Screens/MapExample';

const Stack = createStackNavigator()





function StackScreen() {

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="First" component={First}/>
      <Stack.Screen name="Details" component={Details}/>
      <Stack.Screen name="EditDetails" component={EditDetails}/>
      <Stack.Screen name="InfiniteLoop" component={InfiniteLoop}/>
      <Stack.Screen name="DateExample" component={DateExample}/>
      <Stack.Screen name="MapExample" component={MapExample}/>

    </Stack.Navigator>

  );
}





export default function App() {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
}



