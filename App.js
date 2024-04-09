import React from 'react';
import { StyleSheet, View } from 'react-native';
import TitleComponent from './TitleComponent';
import SearchBar from './SearchBar';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TitleComponent text="Titulo" />
        <SearchBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    paddingTop: 50, 
  },
  topContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 20, 
  },
});
