import type { ReactNode } from 'react';
import { Animated } from 'react-native';
import type { ColorType } from '../../context/theme/types';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type TitlePosition = 'left' | 'center' | 'right';

export interface HeaderProps {
  background?: ColorType;
  backgroundSticky?: ColorType;
  heightDynamic?: number;
  leftIcon?: ReactNode;
  statusBarHeight?: number;
  scrollOffsetY: Animated.Value;
  rightIcon?: ReactNode;
  style?: StyleProp<ViewStyle>;
  title: ReactNode | string;
  titleOnScroll?: ReactNode | string;
  titleOnScrollPosition?: TitlePosition;
  titlePosition?: TitlePosition;
  titleStyle?: StyleProp<TextStyle>;
}
