import React from 'react';
import { ScrollView } from 'react-native';
import { Actions, SceneVideo } from '../components';

export function CreateSceneVideo() {
  const [videoUri, setVideoUri] = React.useState(null);

  const handleAssets = response => {
    const asset = response.assets?.[0];
    if (asset) {
        setVideoUri(asset.uri);
    }
  };

  return (
    <ScrollView>
        {videoUri ? (
        <SceneVideo videoUri={videoUri} />
        ) : (
        <Actions handleAssets={handleAssets} />
        )}
    </ScrollView>
  );
};
