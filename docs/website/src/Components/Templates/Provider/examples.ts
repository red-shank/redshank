import { PACKAGE_NAME } from '@/config';

export const basic = `import React from 'react';
import { ThemeProvider } from '${PACKAGE_NAME}';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        ...
      </ThemeProvider>
    </SafeAreaProvider>
)};`;

export const editingTheme = `import React from 'react';
import { ThemeProvider } from '${PACKAGE_NAME}';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const theme = {
  type: 'light',
  theme: {
    colors: {
      dark: {
        custom: '#1976d2'
      },
      light: {
        custom: '#42a5f5'
      }
    },
    spaceing: 8,
    fontSizes: {
      ...
    },
    fonts: {
      ...
    },
    fontWeights: {
      ...
    },
    lineHeights: {
      ...
    },
    letterSpacings: {
      ...
    },
    sizes: {
      ...
    },
    borderWidths: {
      ...
    },
    borderStyles: {
      ...
    },
    radii: {
      ...
    },
    shadows: {
      ...
    },
    zIndices: {
      ...
    },
    transitions: {
      ...
    }
  }
};

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        ...
      </ThemeProvider>
    </SafeAreaProvider>
);};`;

export const themeObject = `{
  "type": "light", // light / dark
  "theme": {
    "colors": {},
    "spacing": number,
    "fontSizes": {},
    "fonts": {},
    "fontWeights": {},
    "lineHeights": {},
    "letterSpacings": {},
    "sizes": {},
    "borderWidths": {},
    "borderStyles": {},
    "radii": {},
    "shadows": {},
    "zIndices": {},
    "transitions": {}
  }
}`;
