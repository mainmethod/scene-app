import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { Actions, SceneButton, SceneVideo } from '../components';
import { createVideo, VideoItem } from '../api'

export function CreateSceneVideo() {
  const [videoUri, setVideoUri] = useState(null);
  const [createdVideo, setCreatedVideo] = useState<VideoItem | null>(null);

  const handleAssets = response => {
    const asset = response.assets?.[0];
    if (asset) {
        setVideoUri(asset.uri);
    }
  };

  const submitVideo = async () => {
    if (videoUri) {
      const video = await createVideo({ url: videoUri, name: 'another test' })
      setCreatedVideo(video)
    }
  }

  return (
    <ScrollView>
        {videoUri ? (
        // <SceneVideo videoUri={videoUri} />
        <>
          <Text>{ createdVideo?.name }</Text>
          <SceneButton onPress={ submitVideo }>
            Submit
          </SceneButton>
        </>
        ) : (
        <Actions handleAssets={ handleAssets } />
        )}
    </ScrollView>
  );
};
