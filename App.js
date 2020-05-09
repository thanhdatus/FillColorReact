import React from 'react';
import { StyleSheet, View } from 'react-native';
import FillColor from './src/components/FillColor';

export default function App() {
  return (
    <View style={styles.container}>
      <FillColor />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
