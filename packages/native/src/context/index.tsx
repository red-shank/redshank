import React from 'react';
import { ThemeProvider as InternalThemeProvider } from './theme/context';
import { colorsDark, colorsLight, zIndices } from './theme/defaultValues';
import { ThemeContextProps } from './theme/types';

const ThemeProvider: React.FC<ThemeContextProps> = ({ children, theme }) => {
  return (
    <InternalThemeProvider theme={theme}>{children}</InternalThemeProvider>
  );
};

export * from './theme/types';
export * from './theme/color.type';
export * from './theme/defaultValues';
export { ThemeProvider, colorsDark, colorsLight, zIndices };
