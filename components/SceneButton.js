import React from 'react';
import {StyleSheet, Text, Pressable, ViewStyle, TextStyle} from 'react-native';

export function SceneButton({
  onPress,
  children,
}: React.PropsWithChildren) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {
          backgroundColor: pressed ? 'skyblue' : 'steelblue',
        },
        styles.container,
      ]}>
      <Text style={styles.text}>{children}</Text>
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
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
});