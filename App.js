/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Actions, SceneVideo} from './components';

const App: () => Node = () => {
  const [videoUri, setVideoUri] = React.useState(null);

  const handleAssets = response => {
    const asset = response.assets[0];
    setVideoUri(asset.uri);
  };

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView>
        {videoUri ? (
          <SceneVideo videoUri={videoUri} />
        ) : (
          <Actions handleAssets={handleAssets} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
