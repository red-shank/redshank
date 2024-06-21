import { PACKAGE_NAME } from '@/config';

export const basic = `import { useTheme, Switch } from '${PACKAGE_NAME}';

export default function App() {
  const { setTheme, theme } = useTheme();

  return (
    <Switch
      value={theme === 'dark'}
      onChange={(isDark) => {
        setTheme(isDark ? 'dark' : 'light');
      }}
    />
  );
};`;

export const customColors = `import { useColorScheme } from 'react-native';
import { ThemeProvider } from '${PACKAGE_NAME}';

const lightColors = {
  customColor: '#444444'
};

const darkColors = {
  customColor: '#f1f1f1'
};

export default function App() {
  const colorSchema = useColorScheme();

  return (
    <ThemeProvider
      theme={
        theme: colorSchema || 'light',
        colors: {
          dark: darkColors,
          light: lightColors
        }
      }
    >
      ...
    </ThemeProvider>
  );
};`;

export const basicExpo = `import { useColorScheme } from 'react-native';
import {
  ThemeProvider,
  Switch,
  Icon,
  Box,
  useTheme,
} from '${PACKAGE_NAME}';

const MyScreen = () => {
  const { setTheme, theme } = useTheme();

  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
    >
      <Switch
        value={theme === 'dark'}
        onChange={(isDark) => {
          setTheme(isDark ? 'dark' : 'light');
        }}
        icon={{
          false: <Icon name="sunny" type="ionicon" />,
          true: <Icon name="moon" type="ionicon" />,
        }}
      />
    </Box>
  );
};

export default function App() {
  const colorSchema = useColorScheme();

  return (
    <ThemeProvider
      theme={{
        theme: colorSchema || 'light',
      }}
    >
      <MyScreen />
    </ThemeProvider>
  );
}
`;
