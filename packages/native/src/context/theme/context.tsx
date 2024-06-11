import React, { createContext, useCallback, useEffect, useState } from 'react';
import {
  Appearance,
  Dimensions,
  StyleSheet,
  View,
  useWindowDimensions
} from 'react-native';

import { fonts, fontSizes, titleFontSizes } from './fonts';
import {
  colorsDark,
  colorsLight,
  paddingSizes,
  marginSizes,
  zIndices,
  sizes,
  borderRadius
} from './defaultValues';
import type { FontTypes, ThemeProps as InternalThemeProps } from './types';

const dimensions = Dimensions.get('screen');

const colorScheme = Appearance.getColorScheme();

const initialValue: InternalThemeProps = {
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
  darkColors: colorsDark,
  lightColors: colorsLight,
  colors: colorScheme === 'dark' ? colorsDark : colorsLight
};

type ThemeProps = Omit<
  Partial<InternalThemeProps>,
  'isDark' | 'device' | 'isIos' | 'isAndroid' | 'colors'
> & {
  colors?: {
    dark: Partial<InternalThemeProps>['colors'];
    light: Partial<InternalThemeProps>['colors'];
  };
};

export interface ThemeContextProps extends InternalThemeProps {
  setContextTheme: (newTheme: ThemeProps) => void;
  setTheme: (theme: 'dark' | 'light') => void;
  width: number;
  height: number;
}

export const ThemeContext = createContext<ThemeContextProps>({
  ...initialValue,
  lightColors: colorsLight,
  darkColors: colorsDark,
  width: dimensions.width,
  height: dimensions.height,
  setContextTheme: () => {},
  setTheme: () => {}
});

export interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: ThemeProps;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = React.memo(
  ({ children, theme }) => {
    const { width, height } = useWindowDimensions();

    const [internalTheme, setInternalTheme] = useState<InternalThemeProps>(
      JSON.parse(JSON.stringify(initialValue))
    );

    const setContextTheme = React.useCallback((_theme: ThemeProps) => {
      setInternalTheme((prevTheme) => {
        const theme = _theme?.theme ?? prevTheme?.theme;
        const darkColors = Object.assign(
          prevTheme.darkColors,
          _theme?.colors?.dark
        );
        const lightColors = Object.assign(
          prevTheme.lightColors,
          _theme?.colors?.light
        );

        const colors = Object.assign(
          theme === 'dark' ? darkColors : lightColors,
          _theme?.colors?.[theme]
        );

        return {
          colors,
          theme,
          darkColors,
          lightColors,
          isDark: theme === 'dark',
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
    }, []);

    const setTheme = useCallback((_theme: 'dark' | 'light') => {
      setInternalTheme((prevTheme) => {
        return {
          ...prevTheme,
          theme: _theme,
          isDark: _theme === 'dark',
          colors:
            _theme === 'dark' ? prevTheme.darkColors : prevTheme.lightColors
        };
      });
    }, []);

    useEffect(() => {
      setContextTheme(theme);
    }, [setContextTheme, theme]);

    return (
      <ThemeContext.Provider
        value={React.useMemo(() => {
          return {
            ...internalTheme,
            setContextTheme,
            setTheme,
            width,
            height
          };
        }, [internalTheme, setTheme, setContextTheme, width, height])}
      >
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
      </ThemeContext.Provider>
    );
  }
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
});
