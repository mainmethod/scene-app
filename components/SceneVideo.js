import * as React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Video from 'react-native-video';

export function SceneVideo({videoUri}: React.Props) {
  return (
    <View style={styles.container}>
      <Video
        source={{uri: videoUri}}
        style={styles.backgroundVideo}
        controls={true}
        ref={ref => {
          this.player = ref;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
    alignItems: 'center',
  },
  backgroundVideo: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 100,
  },
});
