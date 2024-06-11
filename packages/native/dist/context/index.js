import React from 'react';
import { ThemeProvider as InternalThemeProvider } from './theme/context';
import { colorsDark, colorsLight, paddingSizes, marginSizes, zIndices, borderRadius } from './theme/defaultValues';
const ThemeProvider = ({ children, theme }) => {
    return (<InternalThemeProvider theme={theme}>{children}</InternalThemeProvider>);
};
export { ThemeProvider, colorsDark, colorsLight, paddingSizes, marginSizes, zIndices, borderRadius };
