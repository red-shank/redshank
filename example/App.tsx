import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@redshank/native';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

const colors = {
  magenta: '#9E4F88',
  opacityWhiteText: 'rgba(0, 0, 0, .6)',
  opacityBlackText: 'rgba(255, 255, 255, .6)',
};

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeProvider theme={{ colors }}>
        <StatusBar />
        <Navigation colorScheme={colorScheme} />
      </ThemeProvider>
    );
  }
}
