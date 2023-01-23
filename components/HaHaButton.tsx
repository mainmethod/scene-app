import * as React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export function HaHaButton({onPress}) {
  return (
    <Pressable
      onPress={onPress}
      style={styles.container}>
      <Text style={styles.text}>LOL</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    minWidth: '45%',
    maxWidth: '100%',
    marginHorizontal: 8,
    marginVertical: 4,
    borderRadius: 8,
    backgroundColor: 'green'
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
});
