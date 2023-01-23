/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SceneVideos, CreateSceneVideo } from './screens';

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Videos"
          component={SceneVideos}
        />
        <Stack.Screen 
          name="CreateVideo" 
          component={CreateSceneVideo} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
