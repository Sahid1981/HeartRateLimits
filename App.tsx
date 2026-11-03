import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [ age, setAge] = useState<string>("")
  const ageAsNumber: number = !isNaN(Number(age)) == true ? Number(age) : 0
  const hrLower: number = (220-ageAsNumber) * 0.65
  const hrUpper: number = (220-ageAsNumber) * 0.85

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{"Heart Rate Limits Calculator \n"}</Text>
      <Text style={styles.h3}>Enter your age:</Text>
      <TextInput style={styles.input}
        placeholder="Age"
        keyboardType="number-pad"
        value={age}
        onChangeText={ setAge}
      />
      <Text style={styles.text}>Lower limit: {hrLower.toFixed(2)} bpm</Text>
      <Text style={styles.text}>Upper limit: {hrUpper.toFixed(2)} bpm</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 15,
  },
  heading: {
    fontWeight: 'bold',
  },
  text: {
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    width: '50%',
  },
});