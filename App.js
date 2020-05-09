import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
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
