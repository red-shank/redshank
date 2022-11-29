import React, { createContext, useEffect, useState } from 'react';
import {
  Animated,
  Appearance,
  Dimensions,
  StyleSheet,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { fonts, fontSizes, titleFontSizes } from './fonts';
import {
  colorsDark,
  colorsLight,
  paddingSizes,
  marginSizes,
  zIndices,
  sizes,
  borderRadius,
} from './defaultValues';
import type { FontTypes, ThemeProps } from './types';

const { width, height } = Dimensions.get('window');

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
  borderWidth: 2,
  borderRadius,
  paddingSizes,
  marginSizes,
  colors: colorScheme === 'dark' ? colorsDark : colorsLight,
};

type OptionalThemeProps = Omit<
  Partial<ThemeProps>,
  'isDark' | 'device' | 'isIos' | 'isAndroid'
>;

export interface ThemeContextProps extends ThemeProps {
  setTheme?: (newTheme: OptionalThemeProps) => void;
  width: number;
  height: number;
  scrollOffsetY: Animated.Value;
  onScroll: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  ...initialValue,
  width,
  height,
  scrollOffsetY: new Animated.Value(0),
  onScroll() {},
});

export interface ThemeProviderProps {
  children: React.ReactNode;
  disableDarkMode?: boolean;
  theme?: OptionalThemeProps;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = React.memo(
  ({ children, theme, disableDarkMode = false }) => {
    let scrollOffsetY = React.useRef(new Animated.Value(0)).current;

    const [internalTheme, setInternalTheme] = useState<ThemeProps>(
      JSON.parse(JSON.stringify(initialValue))
    );

    const isDark = React.useMemo<boolean>(() => {
      return disableDarkMode ? false : colorScheme === 'dark';
    }, [disableDarkMode]);

    const onScroll = React.useMemo(
      () =>
        Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false }
        ),
      [scrollOffsetY]
    );

    const setTheme = React.useCallback(
      (_theme: OptionalThemeProps) => {
        setInternalTheme((prevTheme) => {
          let colors = Object.assign(prevTheme?.colors, _theme?.colors);
          if (!disableDarkMode && _theme?.theme) {
            const defaultColors =
              _theme.theme === 'dark' ? colorsDark : colorsLight;

            colors = {
              ...prevTheme?.colors,
              ...defaultColors,
              ...(_theme?.colors ?? {}),
            };
          }

          return {
            isDark: _theme.theme === 'dark' || prevTheme.isDark,
            theme: _theme?.theme ?? prevTheme.theme,
            borderWidth: _theme?.borderWidth ?? prevTheme.borderWidth,
            activeOpacity: _theme?.activeOpacity ?? prevTheme.activeOpacity,
            colors,
            fonts: Object.assign(prevTheme.fonts, _theme?.fonts),
            sizes: Object.assign(prevTheme.sizes, _theme?.sizes),
            fontSizes: Object.assign(prevTheme.fontSizes, _theme?.fontSizes),
            titleFontSizes: Object.assign(
              prevTheme.titleFontSizes,
              _theme?.titleFontSizes
            ),
            marginSizes: Object.assign(
              prevTheme.marginSizes,
              _theme?.marginSizes
            ),
            paddingSizes: Object.assign(
              prevTheme.paddingSizes,
              _theme?.paddingSizes
            ),
            zIndices: Object.assign(prevTheme.zIndices, _theme?.zIndices),
            borderRadius: Object.assign(
              prevTheme.borderRadius,
              _theme?.borderRadius
            ),
          };
        });
      },
      [disableDarkMode]
    );

    useEffect(() => {
      if (theme) {
        setTheme(theme);
      }
    }, [setTheme, theme]);

    useEffect(() => {
      const colors = isDark ? colorsDark : colorsLight;
      setInternalTheme((prevTheme) => ({
        ...prevTheme,
        colors: Object.assign(colors, theme?.colors),
      }));
    }, [isDark, theme]);

    const output = React.useMemo(() => {
      return {
        ...internalTheme,
        setTheme,
        width,
        height,
        isDark,
        scrollOffsetY,
        onScroll,
      };
    }, [internalTheme, isDark, setTheme, scrollOffsetY, onScroll]);

    return (
      <ThemeContext.Provider value={output}>
        <SafeAreaProvider>
          <View
            style={StyleSheet.flatten([
              styles.wrapper,
              {
                backgroundColor: internalTheme.colors.background,
              },
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
    flex: 1,
  },
});
