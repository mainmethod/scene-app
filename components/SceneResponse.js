import * as React from 'react';
import {Text, StyleSheet, ViewStyle, TextStyle, ScrollView} from 'react-native';

export function SceneResponse({children}: React.PropsWithChildren<{}>) {
  if (children == null) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>{JSON.stringify(children, null, 2)}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dcecfb',
    marginVertical: 8,
    padding: 8,
    borderRadius: 8,
    maxHeight: 200,
  },
  text: {
    color: 'black',
  },
});