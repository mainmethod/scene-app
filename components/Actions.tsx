import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

import {SceneButton} from '.';

export function Actions({handleAssets}) {
  const onButtonPress = React.useCallback(
    (type, options) => {
      if (type === 'capture') {
        ImagePicker.launchCamera(options, handleAssets);
      } else {
        ImagePicker.launchImageLibrary(options, handleAssets);
      }
    },
    [handleAssets],
  );

  return (
    <View style={styles.container}>
      {actions.map(({title, type, options}) => {
        return (
          <SceneButton key={title} onPress={() => onButtonPress(type, options)}>
            {title}
          </SceneButton>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
  },
});

interface Action {
  title: string;
  type: 'capture' | 'library';
  options: ImagePicker.CameraOptions | ImagePicker.ImageLibraryOptions;
}

const actions: Action[] = [
  {
    title: 'Select Video',
    type: 'library',
    options: {
      selectionLimit: 0,
      mediaType: 'video',
      includeExtra: true,
    },
  },
];
