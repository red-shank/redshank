import { Dimensions, Platform, useColorScheme } from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from '@react-navigation/native';
import { Drawer } from 'expo-router/drawer';
import React, { PropsWithChildren } from 'react';
import {
  Box,
  IconType,
  MessageProvider,
  ThemeProvider as RThemeProvider,
  useTheme
} from '@redshank/native';
import MenuToggleButton from '@/components/MenuToggleButton';
import {
  MaterialIcons,
  AntDesign,
  Ionicons,
  Fontisto
} from '@expo/vector-icons';

const dimension = Dimensions.get('window');

const width = Platform.select<number>({
  default: dimension.width,
  web: dimension.width <= 720 ? dimension.width : 720
});

const iconsPack = new Map<IconType, any>();
iconsPack.set('material-design-icons', MaterialIcons);
iconsPack.set('antd', AntDesign);
iconsPack.set('ionicons', Ionicons);
iconsPack.set('fontisto', Fontisto);

const App = (props: PropsWithChildren) => {
  const { isDark } = useTheme();

  return (
    <Box flex={1} bg="background">
      {/*<Ionicons name="timer"></Ionicons>*/}
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
      packs={iconsPack}
      theme={{
        theme: colorSchema || 'light',
        width
      }}
    >
      <App />
    </RThemeProvider>
  );
}
