import React, { PropsWithChildren, ReactNode } from 'react';
import { Animated, FlatListProps } from 'react-native';
import type { ColorType } from '../../context/theme/types';
import { ScrollViewProps } from '../ScrollView';
import { SxProps } from '../../lib/styleDictionary';
export declare type TitleStickyPosition = 'left' | 'center' | 'right';
export declare type BackgroundStickyProps = {
    initial?: ColorType;
    sticky?: ColorType;
} | [initial?: ColorType, sticky?: ColorType];
export declare type TitleStickyProps = {
    initial?: ReactNode;
    sticky?: ReactNode;
} | [initial?: ReactNode, sticky?: ReactNode];
export declare type TitleStickyPositionProps = {
    initial?: TitleStickyPosition;
    sticky?: TitleStickyPosition;
} | [initial?: TitleStickyPosition, sticky?: TitleStickyPosition];
export declare type StickyHeaderProps<T = unknown> = PropsWithChildren<{
    hidden?: boolean;
    animateInHeight?: number;
    statusBarHeight?: number;
    scrollOffsetY?: Animated.Value;
    background?: BackgroundStickyProps;
    title?: TitleStickyProps;
    titlePosition?: TitleStickyPositionProps;
    header?: React.ComponentType<HeaderProps<T>>;
    scrollComponent?: React.ComponentType<T>;
    scrollProps?: ScrollViewProps | FlatListProps<T>;
    icon?: {
        left?: ReactNode;
        right?: ReactNode;
    };
    styles?: {
        scroll?: SxProps;
        header?: SxProps;
        headerSticky?: SxProps;
        title?: SxProps;
        titleSticky?: SxProps;
    };
}>;
export declare type HeaderProps<T = unknown> = StickyHeaderProps<T> & {
    setHeightLayout: (height: number) => void;
    isSticky: boolean;
};
