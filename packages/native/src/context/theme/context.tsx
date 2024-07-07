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
  zIndices,
  sizes,
  borderRadius
} from './defaultValues';
import {
  FontTypes,
  ThemeContextProps,
  ThemeContextValue,
  ThemeProps
} from './types';
import { ColorName, ColorSchema } from './color.type';
// import createColorName from './script';
import { getColorValue } from './utils';

const dimensions = Dimensions.get('screen');

const colorScheme = Appearance.getColorScheme();

const initialColorFunction = (
  colors: ColorSchema
): ThemeContextValue['colors'] => {
  return {
    ...colors,
    get: (color: ColorName) => {
      return getColorValue(color, colors);
    }
  };
};

type InternalStateTheme = ThemeProps;

const initialValue: InternalStateTheme = {
  theme: colorScheme === 'dark' ? 'dark' : 'light',
  isDark: colorScheme === 'dark',
  fonts: fonts as FontTypes,
  fontSizes,
  width: dimensions.width,
  height: dimensions.height,
  titleFontSizes,
  activeOpacity: 0.6,
  zIndices,
  sizes,
  spacing: 8,
  borderWidth: 1,
  darkColors: colorsDark,
  lightColors: colorsLight,
  borderRadius,
  colors:
    colorScheme === 'dark'
      ? initialColorFunction(colorsDark)
      : initialColorFunction(colorsLight)
};

const themeContextDefaultValue: ThemeContextValue = {
  ...initialValue,
  setContextTheme: () => {},
  setTheme: () => {}
};

export const ThemeContext = createContext<ThemeContextValue>(
  themeContextDefaultValue
);

export const ThemeProvider: React.FC<ThemeContextProps> = React.memo(
  ({ children, theme }) => {
    const { width, height } = useWindowDimensions();

    const [internalTheme, setInternalTheme] = useState<InternalStateTheme>({
      ...initialValue
    });

    const setContextTheme = React.useCallback(
      (_theme: Omit<ThemeContextProps['theme'], 'children'>) => {
        setInternalTheme((prevTheme) => {
          const themeScheme = _theme?.theme ?? prevTheme?.theme;
          const darkColors = Object.assign(
            prevTheme.darkColors,
            _theme?.colors?.dark
          );
          const lightColors = Object.assign(
            prevTheme.lightColors,
            _theme?.colors?.light
          );

          const colors = initialColorFunction(
            Object.assign(
              themeScheme === 'dark' ? darkColors : lightColors,
              _theme?.colors?.[themeScheme]
            )
          );

          const _borderRadius = Object.assign(
            prevTheme?.borderRadius,
            _theme?.borderRadius
          );

          // createColorName(colors);

          return {
            colors,
            theme: themeScheme,
            darkColors,
            lightColors,
            width: _theme?.width ?? width,
            height: _theme?.height ?? height,
            borderRadius: _borderRadius,
            isDark: themeScheme === 'dark',
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
            zIndices: Object.assign(prevTheme?.zIndices, _theme?.zIndices)
          };
        });
      },
      [height, width]
    );

    const setTheme = useCallback((_theme: 'dark' | 'light') => {
      setInternalTheme((prevTheme) => {
        return {
          ...prevTheme,
          theme: _theme,
          isDark: _theme === 'dark',
          colors: initialColorFunction(
            _theme === 'dark' ? prevTheme.darkColors : prevTheme.lightColors
          )
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
            colors: internalTheme.colors,
            theme: internalTheme.theme,
            darkColors: internalTheme.darkColors,
            lightColors: internalTheme.lightColors,
            isDark: internalTheme.isDark,
            zIndices: internalTheme.zIndices,
            sizes: internalTheme.sizes,
            spacing: internalTheme.spacing,
            fonts: internalTheme.fonts,
            borderRadius: internalTheme.borderRadius,
            fontSizes: internalTheme.fontSizes,
            titleFontSizes: internalTheme.titleFontSizes,
            activeOpacity: internalTheme.activeOpacity,
            borderWidth: internalTheme.borderWidth,
            setContextTheme: setContextTheme,
            setTheme,
            width: internalTheme.width,
            height: internalTheme.height
          } as ThemeContextValue;
        }, [internalTheme, setTheme, setContextTheme])}
      >
        <View
          style={StyleSheet.flatten([
            styles.wrapper,
            {
              backgroundColor: internalTheme.colors.background.main
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
