import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './components/weather';
import Constants from 'expo-constants';

export default function App() {
  const doIt = () => {
    console.log("Hello form console")
  }
  return (
    <View style={styles.container}>
      <Weather zipCode="20000"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight
  },
});

