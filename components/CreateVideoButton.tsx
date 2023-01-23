import * as React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export function CreateVideoButton({onPress}) {
  return (
    <Pressable
      onPress={onPress}
      style={styles.container}>
      <Text style={styles.text}>Create</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: '20%'
  },
  text: {
    color: 'white',
  }
});
