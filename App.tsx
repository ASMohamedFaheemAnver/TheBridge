import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  NativeModules,
} from 'react-native';
import React from 'react';

const App = () => {
  const onIncrement = () => {
    NativeModules.Counter.increment((value: number) => {
      console.log(value);
    });
  };
  const onDecrement = async () => {
    try {
      const value = await NativeModules.Counter.decrement();
      console.log(value);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: 'green'}]}
        onPress={onIncrement}>
        <Text style={styles.text}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: 'red'}]}
        onPress={onDecrement}>
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
