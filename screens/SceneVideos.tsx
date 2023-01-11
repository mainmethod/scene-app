import React from 'react';
import { Text, Button } from 'react-native';

export function SceneVideos({navigation}) {
  return (
    <>
        <Text>These are the videos</Text>
        <Button
            title="Create Video"
            onPress={() => navigation.navigate('CreateVideo')}
        />
    </>
  );
};
