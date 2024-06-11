import type { ReactNode, Component } from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

import type { ColorType } from '../../context/theme/types';
import type { TextProps } from '../Text';
import { BaseProperties } from '../../@types/utilities';
import { BaseProps } from '../../@types/base';

export type ButtonSize = 'small' | 'middle' | 'large' | 'xLarge';
export type ButtonType = 'solid' | 'link' | 'flat' | 'outline';

export interface ButtonProps extends BaseProperties, BaseProps {
  Component?: typeof Component;
  children: string | ReactNode;
  color?: ColorType;
  contentStyle?: StyleProp<ViewStyle>;
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
  suffixOrPrefixStyle?: StyleProp<ViewStyle>;
  textAlign?: 'left' | 'center' | 'right';
  textColor?: ColorType;
  textProps?: Omit<TextProps, 'children' | 'style'>;
  textStyle?: StyleProp<TextStyle>;
  type?: ButtonType;
  withMarginBottom?: boolean;
}
