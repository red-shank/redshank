import React from 'react';
import type { ThemeProps as InternalThemeProps } from './types';
declare type ThemeProps = Omit<Partial<InternalThemeProps>, 'isDark' | 'device' | 'isIos' | 'isAndroid' | 'colors'> & {
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
export declare const ThemeContext: React.Context<ThemeContextProps>;
export interface ThemeProviderProps {
    children: React.ReactNode;
    theme?: ThemeProps;
}
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
export {};
