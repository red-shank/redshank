import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import type { SizeType } from '../../@types/input';
import type { ColorType } from '../../context/theme/types';
import { BaseProperties } from '../../@types/utilities';
import {SxProps} from '../../lib/styleDictionary';

export type BadgeVariant = 'default' | 'flat';
export type BadgeType = 'rounded' | 'square';
export type BadgePlacements =
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left';

export interface BadgeProps extends BaseProperties {
  background?: ColorType;
  borderColor?: ColorType;
  bold?: boolean;
  children?: ReactNode;
  childrenStyle?: StyleProp<any>;
  color?: ColorType;
  content?: number | string;
  bordered?: boolean;
  enableShadow?: boolean;
  isInvisible?: boolean;
  isPressable?: boolean;
  placement?: BadgePlacements;
  size?: SizeType;
  style?: StyleProp<ViewStyle>;
  type?: BadgeType;
  variant?: BadgeVariant;
  wrapperStyle?: StyleProp<ViewStyle>;
  sx?: SxProps;
  styles?: {
    root?: SxProps;
    badge?: SxProps;
    text?: SxProps;
    content?: SxProps;
  };
  offset?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  }
}
