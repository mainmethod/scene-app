import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CreateVideoButton, HaHaButton, NextButton } from '../components';
import { getVideos, VideoItem } from '../api'

export function SceneVideos({navigation}) {

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [allVideos, setAllVideos] = useState<VideoItem[]>([])

  // second param ensures this only runs once.
  // https://css-tricks.com/run-useeffect-only-once/
  useEffect(() => { getAllVideos() }, []);

  const submitVote = () => {
    // API for vote
    alert('submit vote')
  }

  const getAllVideos = () => {
    getVideos()
      .then((videos) => { 
        // TODO COME BACK TO THIS. 
        // see which videos have ben watched already
        // handle empty video response
        setAllVideos(videos) 
        // set back to 0 for when this method is used to get the next batch of videos
        setCurrentVideoIndex(0)
      })
      .catch((error) => { throw error });
  }

  const movetoNextVideo = () => {
    setCurrentVideoIndex(currentVideoIndex + 1)
    // TODO fetch again when done with videos
  }

  return allVideos.length ? (
      <>
        <Text>{ allVideos[currentVideoIndex].name }</Text>

        <View style={styles.controls}>
          <CreateVideoButton
            onPress={() => navigation.navigate('CreateVideo')}
          />
          <HaHaButton
            onPress={submitVote}
          />
          <NextButton
            onPress={movetoNextVideo}
          />
        </View>
      </>
    ) : (
      <Text>No More Videos</Text>
    );
};

const styles = StyleSheet.create({
  controls: {
    justifyContent: 'space-between',
    display: 'flex',
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    height: 100,
    padding: 30,
    paddingTop: 30,
    width: '100%',
    backgroundColor: '#000',
  },
});