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

const App = (props: PropsWithChildren) => {
  const { theme } = useTheme();

  const width = Platform.select<DimensionValue>({
    default: '100%',
    web: dimension.width <= 720 ? '100%' : 720
  });

  return (
    <Box flex={1} width={width} mx="auto">
      <MessageProvider bottom={30}>
        <ThemeProvider
          value={theme === 'dark' ? DarkTheme : DefaultTheme}
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
  );
};

export default function RootLayout() {
  const colorSchema = useColorScheme();

  return (
    <RThemeProvider
      theme={{
        theme: colorSchema || 'light',
      }}
    >
      <App />
    </RThemeProvider>
  );
}
