

import React from 'react'
import ZipCodeScreen from './screen/ZipCodeScreen';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WeatherScreen from './screen/WeatherScreen';

const Stack = createStackNavigator();
export default function App() {
 return (
 <NavigationContainer>
 <Stack.Navigator>
 <Stack.Screen name="Home" component={ZipCodeScreen} options={{ headerStyle: { backgroundColor: "#99CCFF" } }} />
 <Stack.Screen name="Weather" component={WeatherScreen} />
 </Stack.Navigator>
 </NavigationContainer>
 );
}
