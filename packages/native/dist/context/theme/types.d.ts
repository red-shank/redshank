import { colorsLight } from './defaultValues';
export declare type ColorType = keyof typeof colorsLight | string;
export declare type FontType = 'thin' | 'light' | 'regular' | 'medium' | 'bold' | 'black';
export interface FontProps {
    fontFamily: string;
    fontWeight: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
}
export declare type SizeElements = {
    small: number;
    middle: number;
    large: number;
    xLarge: number;
};
export interface FontTypes {
    thin: FontProps;
    light: FontProps;
    regular: FontProps;
    medium: FontProps;
    bold: FontProps;
    black: FontProps;
}
export interface FontSizesProps {
    tiny: number;
    xxs: number;
    xs: number;
    base: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
}
export interface TitleFontSizesProps {
    level1: number;
    level2: number;
    level3: number;
    level4: number;
    level5: number;
    level6: number;
}
export interface ZIndexType {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    10: number;
    max: number;
}
export interface SizingType {
    xxs: number;
    xs: number;
    sm: number;
    md: number;
    card: number;
    modal: number;
    lg: number;
    xl: number;
    xxl: number;
    max: number;
}
export interface ThemeProps {
    activeOpacity: number;
    borderRadius: SizingType;
    borderWidth: number;
    lightColors: {
        [key in ColorType]: string;
    };
    darkColors: {
        [key in ColorType]: string;
    };
    colors: {
        [key in ColorType]: string;
    };
    fontSizes: FontSizesProps;
    fonts: FontTypes;
    isDark: boolean;
    spacing: number;
    marginSizes: SizingType;
    paddingSizes: SizingType;
    sizes: SizeElements;
    theme: 'light' | 'dark';
    titleFontSizes: TitleFontSizesProps;
    zIndices: ZIndexType;
}
