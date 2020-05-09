import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Btn = (props) => {
  return (
    <TouchableOpacity
      style={{ ...styles.btn, ...props.style }}
      onPress={props.onPress}
    >
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: 10,
  },
});

export default Btn;
