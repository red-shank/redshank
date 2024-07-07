import type { ReactNode, Component } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

import type { ColorName } from '../../context/theme/types';
import type { TextProps } from '../Text';
import { BaseProperties } from '../../@types/utilities';
import { SxProps } from '../../lib/styleDictionary';

export type ButtonSize = 'small' | 'middle' | 'large' | 'xLarge';
export type ButtonType = 'solid' | 'link' | 'flat' | 'outline';

export interface ButtonProps extends BaseProperties, SxProps {
  Component?: typeof Component;
  children?: ReactNode;
  appearance?: ColorName;
  disableRipple?: boolean;
  bold?: boolean;
  disableTransform?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  onlyIcon?: boolean;
  startContent?: ReactNode;
  endContent?: ReactNode;
  shape?: 'circle' | 'round';
  size?: ButtonSize;
  style?: StyleProp<ViewStyle>;
  textProps?: Omit<TextProps, 'children' | 'style'>;
  type?: ButtonType;
  sx?: SxProps & {
    root?: SxProps;
    container?: SxProps;
    icon?: SxProps;
    text?: SxProps;
  };
}
