import * as React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export function NextButton({onPress}) {
  return (
    <Pressable
      onPress={onPress}
      style={styles.container}>
      <Text style={styles.text}>
        Next
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: '25%',
    borderRadius: 10,
    
  },
  text: {
    color: 'white',
  }
});
