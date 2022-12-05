import type { ReactNode } from 'react';
import type { ColorType } from '../Context/theme/types';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type TitlePosition = 'left' | 'center' | 'right';

export interface HeaderProps {
  background?: ColorType;
  backgroundSticky?: ColorType;
  heightDynamic?: number;
  leftIcon?: ReactNode;
  statusBarHeight?: number;
  rightIcon?: ReactNode;
  style?: StyleProp<ViewStyle>;
  title: ReactNode | string;
  titleOnScroll?: ReactNode | string;
  titleOnScrollPosition?: TitlePosition;
  titlePosition?: TitlePosition;
  titleStyle?: StyleProp<TextStyle>;
}
