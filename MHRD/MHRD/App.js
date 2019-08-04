import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './components/Splash';
import Login from './components/Login';


export default function App() {
  return (
    <View style={styles.container}>
      
      <Splash/>
      <Login/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
