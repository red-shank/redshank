import { ColorName, ColorSchema } from './color.type';
import { PropsWithChildren } from 'react';

export type FontType =
  | 'thin'
  | 'light'
  | 'regular'
  | 'medium'
  | 'bold'
  | 'black';

export interface FontProps {
  fontFamily: string;
  fontWeight:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
}

export type SizeElements = {
  small: number;
  middle: number;
  large: number;
  xLarge: number;
};

export type BorderRadiusType = {
  compact: number;
  base: number;
  alert: number;
  tab: number;
  card: number;
  modal: number;
  'badge.square': number;
  'input.square': number;
  'input.rounded': number;
  'input.circle': number;
  'switch.square': number;
  'switch.rounded': number;
  'switch.circle': number;
  'radio.square': number;
  'radio.rounded': number;
  'radio.circle': number;
  'avatar.square': number;
  'button.round': number;
  'button.circle': number;
  carousel: number;
  collapse: number;
  progress: number;
  controller: number;
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

export type ThemeContextValue = {
  activeOpacity: number;
  borderWidth: number;
  lightColors: ColorSchema;
  darkColors: ColorSchema;
  borderRadius: BorderRadiusType;
  colors: ColorSchema & {
    get(color: ColorName): string;
  };
  fontSizes: FontSizesProps;
  fonts: FontTypes;
  isDark: boolean;
  spacing: number;
  sizes: SizeElements;
  theme: 'light' | 'dark';
  titleFontSizes: TitleFontSizesProps;
  zIndices: ZIndexType;
  setContextTheme: (
    newTheme: Omit<ThemeContextProps['theme'], 'width' | 'height' | 'children'>
  ) => void;
  setTheme: (theme: 'dark' | 'light') => void;
  width: number;
  height: number;
};

type ThemeType = Pick<
  ThemeContextValue,
  | 'height'
  | 'width'
  | 'borderWidth'
  | 'activeOpacity'
  | 'fonts'
  | 'fontSizes'
  | 'titleFontSizes'
  | 'sizes'
  | 'spacing'
  | 'zIndices'
  | 'borderRadius'
  | 'theme'
> & {
  colors?: {
    dark: {
      [key in keyof ColorSchema]: string;
    };
    light: {
      [key in keyof ColorSchema]: string;
    };
  };
};

export type ThemeContextProps = PropsWithChildren<{
  theme: Omit<Partial<ThemeType>, 'colors'> & {
    colors?: {
      dark: Record<string, string | object>;
      light: Record<string, string | object>;
    };
  };
}>;

export type ThemeProps = Omit<ThemeType, 'colors'> &
  Pick<
    ThemeContextValue,
    'colors' | 'isDark' | 'darkColors' | 'lightColors' | 'borderRadius'
  >;

export { ColorName, ColorSchema };
