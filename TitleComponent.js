import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TitleComponent({ text }) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
