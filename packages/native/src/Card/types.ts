import type { Component, ReactNode } from 'react';
import type { DimensionValue, StyleProp, ViewStyle } from 'react-native';

import type { RippleProps } from '../Ripple/type';
import type { ColorType } from '../Context/theme/types';
import { BaseProperties } from '../@types/utilities';

export interface CardProps extends BaseProperties {
  Component?: typeof Component;
  background?: ColorType;
  borderWidth?: number;
  children?: ReactNode;
  expandContent?: ReactNode;
  isExpandCard?: boolean;
  onlyExpandContent?: boolean;
  isPressable?: boolean;
  onClose?: (event: any) => void;
  rippleProps?: RippleProps;
  withBorder?: boolean;
  style?: StyleProp<ViewStyle>;
}

export interface CardHeaderProps {
  Component?: typeof Component;
  background?: ColorType;
  children?: ReactNode;
  isAbsolute?: boolean;
  left?: number | string;
  right?: number | string;
  style?: StyleProp<ViewStyle>;
  top?: number | string;
  withBackground?: boolean;
}

export interface CardFooterProps extends Omit<CardHeaderProps, 'top'> {
  bottom?: number | string;
}

export interface CardBodyProps {
  Component?: typeof Component;
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  withPadding?: boolean;
}

export interface CardDividerProps {
  background?: ColorType;
  height?: DimensionValue;
  style?: StyleProp<ViewStyle>;
}
