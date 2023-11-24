import 'react-native-gesture-handler';
import { ThemeProvider } from '@redshank/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

const colors = {
  magenta: '#9E4F88',
  opacityWhiteText: 'rgba(0, 0, 0, .6)',
  opacityBlackText: 'rgba(255, 255, 255, .6)',
};

export default function App() {
  const { onLayoutRootView, fontsLoaded } = useCachedResources();
  const colorScheme = useColorScheme();

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider theme={{ colors }}>
      <StatusBar />
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <Navigation colorScheme={colorScheme} />
      </View>
    </ThemeProvider>
  );
}
