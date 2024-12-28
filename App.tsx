import {Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: 'green'}]}
        onPress={() => console.log('Increment')}>
        <Text style={styles.text}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: 'red'}]}
        onPress={() => console.log('Decrement')}>
        <Text style={styles.text}>Decrement</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 18,
  },
  button: {
    padding: 8,
    borderRadius: 4,
    minWidth: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: '700',
  },
});

export default App;
