import React, { PropsWithChildren, ReactNode } from 'react';
import { Animated, FlatListProps } from 'react-native';

import type { ColorName } from '../../context/theme/types';
import { ScrollViewProps } from '../ScrollView';
import { SxProps } from '../../lib/styleDictionary';

export type TitleStickyPosition = 'left' | 'center' | 'right';

export type BackgroundStickyProps =
  | {
      initial?: ColorName;
      sticky?: ColorName;
    }
  | [initial?: ColorName, sticky?: ColorName];

export type TitleStickyProps =
  | {
      initial?: ReactNode;
      sticky?: ReactNode;
    }
  | [initial?: ReactNode, sticky?: ReactNode];

export type TitleStickyPositionProps =
  | {
      initial?: TitleStickyPosition;
      sticky?: TitleStickyPosition;
    }
  | [initial?: TitleStickyPosition, sticky?: TitleStickyPosition];

export type StickyHeaderProps<T = unknown> = PropsWithChildren<{
  hidden?: boolean;
  animateInHeight?: number;
  statusBarHeight?: number;
  keepStatusHeight?: boolean;
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

export type HeaderProps<T = unknown> = StickyHeaderProps<T> & {
  setHeightLayout: (height: number) => void;
  isSticky: boolean;
};
