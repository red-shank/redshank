export const basic = `import { useTheme, Switch } from '${PACKAGE_NAME}';

export default function App() {
  const { setTheme, theme } = useTheme();

  return (
    <Switch
      value={theme === 'dark'}
      onChange={(isDark) => {
        setTheme({
          theme: isDark ? 'dark' : 'light'
        });
      }}
    />
  );
};`;

export const customColors = `import { Appearance } from 'react-native';
import { ThemeProvider } from '${PACKAGE_NAME}';

const colorScheme = Appearance.getColorScheme();

const lightColors = {
  customColor: '#444444'
};

const darkColors = {
  customColor: '#f1f1f1'
};

export default function App() {
  const isDark = colorScheme === 'dark';

  return (
    <ThemeProvider
      theme={
        theme: colorSchema || 'dark',
        colors: isDark ? darkColors : lightColors
      }
    >
      ...
    </ThemeProvider>
  );
};`;

export const basicExpo = `import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  ThemeProvider,
  Switch,
  Icon,
  useTheme,
} from '${PACKAGE_NAME}';

const MyScreen = () => {
  const { setTheme, theme } = useTheme();

  return (
    <View style={styles.container}>
      <Switch
        value={theme === 'dark'}
        onChange={(isDark) => {
          setTheme({
            theme: isDark ? 'dark' : 'light',
          });
        }}
        icon={{
          false: <Icon name="sunny" type="ionicon" />,
          true: <Icon name="moon" type="ionicon" />,
        }}
      />
    </View>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <MyScreen />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
`;
