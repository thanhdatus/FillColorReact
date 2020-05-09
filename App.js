import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  // Save history of colors
  const [historyValue, setEnteredHistoryValue] = useState([]);
  // Save history of colors which we undo
  const [undoHistoryValue, setUndoHistoryValue] = useState([]);
  let stylebtn;
  // Clone historyValue
  let history = [...historyValue];
  // Clone undoHistoryValue
  let undoHistory = [...undoHistoryValue];
  const onPressRedButton = () => {
    // If the last value of historyValue is 1 then we dont push 1 to historyValue
    if (historyValue[historyValue.length - 1] != 1) {
      setEnteredHistoryValue((prev) => [...prev, 1]);
      setUndoHistoryValue((prev) => []); // Reset undo history
    }
  };
  const onPressGreenButton = () => {
    // If the last value of historyValue is 2 then we dont push 2 to historyValue
    if (historyValue[historyValue.length - 1] != 2) {
      setEnteredHistoryValue((prev) => [...prev, 2]);
      setUndoHistoryValue((prev) => []); // Reset undo history
    }
  };
  const onPressBlueButton = () => {
    // If the last value of historyValue is 3 then we dont push 3 to historyValue
    if (historyValue[historyValue.length - 1] != 3) {
      setEnteredHistoryValue((prev) => [...prev, 3]);
      setUndoHistoryValue((prev) => []); // Reset undo history
    }
  };
  //Remove last element of historyValue and add it to undoHistoryValue
  const onPressUndoButton = () => {
    let lastValue = history.pop();
    undoHistory.push(lastValue);
    setUndoHistoryValue((prev) => undoHistory);
    setEnteredHistoryValue((prev) => history);
  };
  //Remove last element of undoHistoryValue and add it to historyValue
  const onPressRedoButton = () => {
    if (undoHistory.length > 0) {
      let firstValue = undoHistory.pop();
      history.push(firstValue);
      setUndoHistoryValue((prev) => undoHistory);
      setEnteredHistoryValue((prev) => history);
    }
  };

  if (historyValue[historyValue.length - 1] === 1) {
    stylebtn = {
      backgroundColor: 'red',
    };
  }
  if (historyValue[historyValue.length - 1] === 2) {
    stylebtn = {
      backgroundColor: 'green',
    };
  }
  if (historyValue[historyValue.length - 1] === 3) {
    stylebtn = {
      backgroundColor: 'blue',
    };
  }
  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={{ ...styles.btn, backgroundColor: 'red' }}
          onPress={onPressRedButton}
          underlayColor='#fff'
        ></TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.btn, backgroundColor: 'green' }}
          onPress={onPressGreenButton}
          underlayColor='#fff'
        ></TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.btn, backgroundColor: 'blue' }}
          onPress={onPressBlueButton}
          underlayColor='#fff'
        ></TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={onPressUndoButton}
          underlayColor='#fff'
        >
          <Text>Undo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={onPressRedoButton}
          underlayColor='#fff'
        >
          <Text>Redo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.squareContainer}>
        <View style={{ ...styles.square, ...stylebtn }}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  btnContainer: {
    flexDirection: 'row',
  },
  btn: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: 10,
  },
  squareContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: 'black',
  },
});
