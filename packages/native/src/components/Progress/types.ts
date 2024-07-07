import { ComponentClass, FunctionComponent } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { BaseProperties } from '../../@types/utilities';
import { ColorName } from '../../context/theme/types';

export interface ProgressProps extends BaseProperties {
  Component?: FunctionComponent | ComponentClass;
  activeColor?: ColorName;
  fallbackColor?: ColorName;
  current: number;
  count: number;
  size?: number;
  style?: StyleProp<ViewStyle>;
}
