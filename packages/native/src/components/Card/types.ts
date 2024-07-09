import type { ComponentType, ReactNode } from 'react';
import type { DimensionValue, StyleProp, ViewStyle } from 'react-native';

import type { RippleProps } from '../Ripple/type';
import type { ColorName } from '../../context/theme/types';
import { BaseProperties } from '../../@types/utilities';
import { SxProps } from '../../lib/styleDictionary';

export type CardProps = BaseProperties &
  SxProps & {
    Component?: ComponentType;
    children?: ReactNode;
    expandContent?: ReactNode;
    isExpandCard?: boolean;
    onlyExpandContent?: boolean;
    isPressable?: boolean;
    onClose?: (event: any) => void;
    rippleProps?: RippleProps;
    withBorder?: boolean;
    style?: StyleProp<ViewStyle>;
    sx?: SxProps & {
      root?: SxProps;
      base?: SxProps;
      modal?: SxProps;
      modalContent?: SxProps;
      modalBody?: SxProps;
      modalBase?: SxProps;
      modalCloseButton?: SxProps;
      modalCloseIcon?: SxProps;
      modalChildren?: SxProps;
      modalExpand?: SxProps;
    };
    styles?: {
      root?: StyleProp<ViewStyle>;
      base?: StyleProp<ViewStyle>;
      modal?: StyleProp<ViewStyle>;
      modalContent?: StyleProp<ViewStyle>;
      modalBody?: StyleProp<ViewStyle>;
      modalBase?: StyleProp<ViewStyle>;
      modalCloseButton?: StyleProp<ViewStyle>;
      modalCloseIcon?: StyleProp<ViewStyle>;
      modalChildren?: StyleProp<ViewStyle>;
      modalExpand?: StyleProp<ViewStyle>;
    };
  };

export interface CardHeaderProps {
  Component?: ComponentType;
  background?: ColorName;
  children?: ReactNode;
  isAbsolute?: boolean;
  left?: ViewStyle['left'];
  right?: ViewStyle['right'];
  style?: StyleProp<ViewStyle>;
  top?: ViewStyle['top'];
  withBackground?: boolean;
  sx?: SxProps;
}

export interface CardFooterProps extends Omit<CardHeaderProps, 'top'> {
  bottom?: ViewStyle['bottom'];
  sx?: SxProps;
}

export interface CardBodyProps {
  Component?: ComponentType;
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  withPadding?: boolean;
  sx?: SxProps;
}

export interface CardDividerProps {
  background?: ColorName;
  height?: DimensionValue;
  style?: StyleProp<ViewStyle>;
  sx?: SxProps;
}
