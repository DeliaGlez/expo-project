import React from 'react';
import { StyleSheet, View } from 'react-native';
import TitleComponent from './TitleComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <TitleComponent text="Titulo" /> 
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
