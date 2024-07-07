import { PACKAGE_NAME } from '@/config';

export const basic = `import React from 'react';
import { ThemeProvider } from '${PACKAGE_NAME}';

const App = () => {
  return (
    <ThemeProvider>
      ...
    </ThemeProvider>
)};`;

export const editingTheme = `import React from 'react';
import { ThemeProvider } from '${PACKAGE_NAME}';

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
    <ThemeProvider theme={theme}>
      ...
    </ThemeProvider>
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
