import type { ReactNode, Component } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

import type { ColorType } from '../../context/theme/types';
import type { TextProps } from '../Text';
import { BaseProperties } from '../../@types/utilities';
import { SxProps } from '../../lib/styleDictionary';

export type ButtonSize = 'small' | 'middle' | 'large' | 'xLarge';
export type ButtonType = 'solid' | 'link' | 'flat' | 'outline';

export interface ButtonProps extends BaseProperties, SxProps {
  Component?: typeof Component;
  children?: ReactNode;
  color?: ColorType;
  disableRipple?: boolean;
  disableTransform?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: ReactNode;
  loading?: boolean;
  prefix?: ReactNode;
  shadow?: boolean;
  shape?: 'circle' | 'round';
  size?: ButtonSize;
  style?: StyleProp<ViewStyle>;
  suffix?: ReactNode;
  textAlign?: 'left' | 'center' | 'right';
  textProps?: Omit<TextProps, 'children' | 'style'>;
  type?: ButtonType;
  withMarginBottom?: boolean;
  sx?: SxProps & {
    root?: SxProps;
    container?: SxProps;
    icon?: SxProps;
    text?: SxProps;
  };
}
