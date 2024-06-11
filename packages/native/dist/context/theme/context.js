import React, { createContext, useCallback, useEffect, useState } from 'react';
import { Appearance, Dimensions, StyleSheet, View, useWindowDimensions } from 'react-native';
import { fonts, fontSizes, titleFontSizes } from './fonts';
import { colorsDark, colorsLight, paddingSizes, marginSizes, zIndices, sizes, borderRadius } from './defaultValues';
const dimensions = Dimensions.get('screen');
const colorScheme = Appearance.getColorScheme();
const initialValue = {
    theme: colorScheme === 'dark' ? 'dark' : 'light',
    isDark: colorScheme === 'dark',
    fonts: fonts,
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
export const ThemeContext = createContext({
    ...initialValue,
    lightColors: colorsLight,
    darkColors: colorsDark,
    width: dimensions.width,
    height: dimensions.height,
    setContextTheme: () => { },
    setTheme: () => { }
});
export const ThemeProvider = React.memo(({ children, theme }) => {
    const { width, height } = useWindowDimensions();
    const [internalTheme, setInternalTheme] = useState(JSON.parse(JSON.stringify(initialValue)));
    const setContextTheme = React.useCallback((_theme) => {
        setInternalTheme((prevTheme) => {
            const theme = _theme?.theme ?? prevTheme?.theme;
            const darkColors = Object.assign(prevTheme.darkColors, _theme?.colors?.dark);
            const lightColors = Object.assign(prevTheme.lightColors, _theme?.colors?.light);
            const colors = Object.assign(theme === 'dark' ? darkColors : lightColors, _theme?.colors?.[theme]);
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
                titleFontSizes: Object.assign(prevTheme?.titleFontSizes, _theme?.titleFontSizes),
                marginSizes: Object.assign(prevTheme?.marginSizes, _theme?.marginSizes),
                paddingSizes: Object.assign(prevTheme?.paddingSizes, _theme?.paddingSizes),
                zIndices: Object.assign(prevTheme?.zIndices, _theme?.zIndices),
                borderRadius: Object.assign(prevTheme?.borderRadius, _theme?.borderRadius)
            };
        });
    }, []);
    const setTheme = useCallback((_theme) => {
        setInternalTheme((prevTheme) => {
            return {
                ...prevTheme,
                theme: _theme,
                isDark: _theme === 'dark',
                colors: _theme === 'dark' ? prevTheme.darkColors : prevTheme.lightColors
            };
        });
    }, []);
    useEffect(() => {
        setContextTheme(theme);
    }, [setContextTheme, theme]);
    return (<ThemeContext.Provider value={React.useMemo(() => {
            return {
                ...internalTheme,
                setContextTheme,
                setTheme,
                width,
                height
            };
        }, [internalTheme, setTheme, setContextTheme, width, height])}>
        <View style={StyleSheet.flatten([
            styles.wrapper,
            {
                backgroundColor: internalTheme.colors.background
            }
        ])}>
          {children}
        </View>
      </ThemeContext.Provider>);
});
const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    }
});
