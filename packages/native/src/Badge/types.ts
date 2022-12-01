import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import type { SizeType } from '../@types/input';
import type { ColorType } from '../Context/theme/types';
import { BaseProperties } from '../@types/utilities';

export type BadgeVariant = 'default' | 'flat' | 'dot' | 'bordered';
export type BadgeType = 'rounded' | 'square';
export type BadgePlacements =
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left';

export interface BadgeProps extends BaseProperties {
  background?: ColorType;
  bold?: boolean;
  children?: ReactNode;
  childrenStyle?: StyleProp<any>;
  color?: ColorType;
  content?: number | string;
  disableOutline?: boolean;
  enableShadow?: boolean;
  isInvisible?: boolean;
  isPressable?: boolean;
  placement?: BadgePlacements;
  size?: SizeType;
  style?: StyleProp<ViewStyle>;
  type?: BadgeType;
  variant?: BadgeVariant;
  wrapperStyle?: StyleProp<ViewStyle>;
}
