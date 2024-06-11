import React from 'react';
import {
  ThemeProviderProps,
  ThemeProvider as InternalThemeProvider
} from './theme/context';
import {
  colorsDark,
  colorsLight,
  paddingSizes,
  marginSizes,
  zIndices,
  borderRadius
} from './theme/defaultValues';

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  return (
    <InternalThemeProvider theme={theme}>{children}</InternalThemeProvider>
  );
};

export {
  ThemeProvider,
  colorsDark,
  colorsLight,
  paddingSizes,
  marginSizes,
  zIndices,
  borderRadius
};
