import {
  Ionicons,
  AntDesign,
  FontAwesome,
  Entypo,
  Fontisto,
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

export default function useCachedResources() {
  const [fontsLoaded] = useFonts({
    ...FontAwesome.font,
    ...Ionicons.font,
    ...Entypo.font,
    ...SimpleLineIcons.font,
    ...MaterialIcons.font,
    ...MaterialCommunityIcons.font,
    ...AntDesign.font,
    ...Fontisto.font,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return { onLayoutRootView, fontsLoaded };
}
