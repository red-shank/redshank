import {
  Dimensions,
  DimensionValue,
  Platform,
  useColorScheme
} from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from '@react-navigation/native';
import { Drawer } from 'expo-router/drawer';
import React, { PropsWithChildren } from 'react';
import {
  Box,
  MessageProvider,
  ThemeProvider as RThemeProvider,
  useTheme
} from '@redshank/native';
import MenuToggleButton from '@/components/MenuToggleButton';

const dimension = Dimensions.get('window');

const width = Platform.select<number>({
  default: dimension.width,
  web: dimension.width <= 720 ? dimension.width : 720
});

const App = (props: PropsWithChildren) => {
  const { isDark } = useTheme();

  return (
    <Box flex={1} bg="background">
      <Box
        height="100%"
        width={width}
        mx="auto"
        overflow={Platform.select({
          web: 'hidden',
          default: undefined
        })}
      >
        <MessageProvider bottom={30}>
          <ThemeProvider
            key={isDark.toString()}
            value={isDark ? DarkTheme : DefaultTheme}
            {...props}
          >
            <Drawer
              screenOptions={(props) => {
                if (props?.route?.name === 'Header') {
                  return {
                    headerShown: false
                  };
                }
                return {
                  headerLeft: (props) => <MenuToggleButton {...props} />
                };
              }}
            />
          </ThemeProvider>
        </MessageProvider>
      </Box>
    </Box>
  );
};

export default function RootLayout() {
  const colorSchema = useColorScheme();

  return (
    <RThemeProvider
      theme={{
        theme: colorSchema || 'light',
        width
      }}
    >
      <App />
    </RThemeProvider>
  );
}
