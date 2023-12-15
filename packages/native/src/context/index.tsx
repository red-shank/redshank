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
import { MessageProvider, useMessage } from './message/context';
import {
  ScreenLoadingProvider,
  useScreenLoading,
  ScreenLoadingProviderProps
} from './screen-loading/ScreenLoading';

const ThemeProvider: React.FC<
  ThemeProviderProps & {
    screenLoadingProps?: ScreenLoadingProviderProps;
  }
> = ({ children, theme, screenLoadingProps, disableDarkMode = false }) => {
  return (
    <InternalThemeProvider theme={theme} disableDarkMode={disableDarkMode}>
      <ScreenLoadingProvider {...screenLoadingProps}>
        <MessageProvider>{children}</MessageProvider>
      </ScreenLoadingProvider>
    </InternalThemeProvider>
  );
};

export {
  ThemeProvider,
  useMessage,
  colorsDark,
  colorsLight,
  paddingSizes,
  marginSizes,
  zIndices,
  borderRadius,
  useScreenLoading
};
