import React from 'react';
import { NavigationContextProps } from './types';
import { HeaderProps } from '../../components/Header/types';
export declare type DefaultValueType = Omit<HeaderProps, 'scrollOffsetY'> | null;
export declare const defaultNavigation: DefaultValueType;
export declare const HeaderNavigationProvider: ({ children, showHeader, defaultValue, header }: {
    defaultValue?: DefaultValueType;
    showHeader?: boolean;
    children?: React.ReactNode;
    header?: React.FunctionComponent<HeaderProps> | React.ComponentClass<HeaderProps>;
}) => React.JSX.Element;
export declare const useHeaderNavigation: () => NavigationContextProps;
