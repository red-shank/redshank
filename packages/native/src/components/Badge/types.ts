import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import type { SizeType } from '../../@types/input';
import type { ColorName } from '../../context/theme/types';
import { BaseProperties } from '../../@types/utilities';
import { SxProps } from '../../lib/styleDictionary';

export type BadgeVariant = 'default' | 'flat';
export type BadgeType = 'rounded' | 'square';
export type BadgePlacements =
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left';

export interface BadgeProps extends BaseProperties {
  background?: ColorName;
  borderColor?: ColorName;
  bold?: boolean;
  children?: ReactNode;
  color?: ColorName;
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
  sx?: SxProps & {
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
  };
}
