import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { ThemeProvider as RedshankProvider } from "@redshank/native";
import { useColorScheme } from "react-native";

import { Colors } from "@/constants/Colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const colors = {
  magenta: "#9E4F88",
  opacityWhiteText: "rgba(0, 0, 0, .6)",
  opacityBlackText: "rgba(255, 255, 255, .6)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <RedshankProvider
        theme={{ colors: colorScheme === "dark" ? Colors.dark : Colors.light }}
      >
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Drawer>
            <Drawer.Screen
              name="[tabs]" // This is the name of the page and must match the url from root
              options={{
                drawerLabel: "Home",
                title: "overview",
              }}
            />
          </Drawer>
        </GestureHandlerRootView>
      </RedshankProvider>
    </ThemeProvider>
  );
}
