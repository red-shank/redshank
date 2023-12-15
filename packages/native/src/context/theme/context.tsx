import React, { createContext, useEffect, useState } from 'react';
import {
  Appearance,
  Dimensions,
  StyleSheet,
  View,
  useWindowDimensions
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { fonts, fontSizes, titleFontSizes } from './fonts';
import useColorScheme from '../../hooks/useColorScheme';
import {
  colorsDark,
  colorsLight,
  paddingSizes,
  marginSizes,
  zIndices,
  sizes,
  borderRadius
} from './defaultValues';
import type { FontTypes, ThemeProps } from './types';

const dimensions = Dimensions.get('screen');

const colorScheme = Appearance.getColorScheme();

const initialValue: ThemeProps = {
  theme: colorScheme === 'dark' ? 'dark' : 'light',
  isDark: colorScheme === 'dark',
  fonts: fonts as FontTypes,
  fontSizes,
  titleFontSizes,
  activeOpacity: 0.6,
  zIndices,
  sizes,
  spacing: 8,
  borderWidth: 1,
  borderRadius,
  paddingSizes,
  marginSizes,
  colors: colorScheme === 'dark' ? colorsDark : colorsLight
};

type OptionalThemeProps = Omit<
  Partial<ThemeProps>,
  'isDark' | 'device' | 'isIos' | 'isAndroid'
>;

export interface ThemeContextProps extends ThemeProps {
  setTheme?: (newTheme: OptionalThemeProps) => void;
  width: number;
  height: number;
}

export const ThemeContext = createContext<ThemeContextProps>({
  ...initialValue,
  width: dimensions.width,
  height: dimensions.height
});

export interface ThemeProviderProps {
  children: React.ReactNode;
  disableDarkMode?: boolean;
  theme?: OptionalThemeProps;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = React.memo(
  ({ children, theme, disableDarkMode = false }) => {
    const _colorSchema = useColorScheme();
    const { width, height } = useWindowDimensions();

    const [internalTheme, setInternalTheme] = useState<ThemeProps>(
      JSON.parse(JSON.stringify(initialValue))
    );

    const setTheme = React.useCallback(
      (_theme: OptionalThemeProps) => {
        setInternalTheme((prevTheme) => {
          const isInternalDark = !disableDarkMode
            ? _theme?.theme === 'dark'
            : false;

          const colors = Object.assign(
            isInternalDark ? colorsDark : colorsLight,
            _theme?.colors
          );

          return {
            colors,
            isDark: _theme?.theme === 'dark' || prevTheme.isDark,
            theme: _theme?.theme ?? prevTheme.theme,
            borderWidth: _theme?.borderWidth ?? prevTheme.borderWidth,
            activeOpacity: _theme?.activeOpacity ?? prevTheme.activeOpacity,
            spacing: _theme?.spacing ?? prevTheme.spacing,
            fonts: Object.assign(prevTheme?.fonts, _theme?.fonts),
            sizes: Object.assign(prevTheme?.sizes, _theme?.sizes),
            fontSizes: Object.assign(prevTheme?.fontSizes, _theme?.fontSizes),
            titleFontSizes: Object.assign(
              prevTheme?.titleFontSizes,
              _theme?.titleFontSizes
            ),
            marginSizes: Object.assign(
              prevTheme?.marginSizes,
              _theme?.marginSizes
            ),
            paddingSizes: Object.assign(
              prevTheme?.paddingSizes,
              _theme?.paddingSizes
            ),
            zIndices: Object.assign(prevTheme?.zIndices, _theme?.zIndices),
            borderRadius: Object.assign(
              prevTheme?.borderRadius,
              _theme?.borderRadius
            )
          };
        });
      },
      [disableDarkMode]
    );

    // useEffect(() => {
    //   let isInternalDark = theme?.theme === 'dark' || _colorSchema === 'dark';
    //   if (disableDarkMode) isInternalDark = false;
    //
    //   setInternalTheme((prev) => {
    //     if (prev.isDark === isInternalDark) {
    //       return prev;
    //     }
    //     setIsDark(isInternalDark);
    //
    //     return {
    //       ...prev,
    //       isDark: isInternalDark,
    //       theme: isInternalDark ? 'dark' : 'light'
    //     };
    //   });
    // }, [_colorSchema, disableDarkMode, theme?.theme]);

    useEffect(() => {
      setTheme({
        ...(theme || {}),
        theme: theme?.theme || _colorSchema === 'dark' ? 'dark' : 'light'
      });
    }, [setTheme, theme, _colorSchema]);

    return (
      <ThemeContext.Provider
        value={React.useMemo(() => {
          return {
            ...internalTheme,
            setTheme,
            width,
            height,
            isDark: internalTheme.theme === 'dark'
          };
        }, [internalTheme, setTheme, width, height])}
      >
        <SafeAreaProvider>
          <View
            style={StyleSheet.flatten([
              styles.wrapper,
              {
                backgroundColor: internalTheme.colors.background
              }
            ])}
          >
            {children}
          </View>
        </SafeAreaProvider>
      </ThemeContext.Provider>
    );
  }
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
});
