import { ReactElement } from 'react';
import { SizeType } from '../../@types/input';
import { ColorName } from '../../context/theme/types';
import { SxProps } from '../../lib/styleDictionary';
import { StyleProp, ViewStyle } from 'react-native';
import { ShapeInput } from '../Input/types';

export type NumberStringValue = string | number;

export interface RadioProps {
  activeColor?: ColorName;
  inactiveColor?: ColorName;
  isActive?: boolean;
  label: string;
  onPress?: (value: NumberStringValue) => void;
  size?: SizeType;
  type?: ShapeInput;
  value: NumberStringValue;
  sx?: SxProps & {
    root?: SxProps;
    container?: SxProps;
    animationWrapper?: SxProps;
    toggle?: SxProps;
    text?: SxProps;
  };
  styles?: {
    root?: StyleProp<ViewStyle>;
    container?: StyleProp<ViewStyle>;
    animationWrapper?: StyleProp<ViewStyle>;
    toggle?: StyleProp<ViewStyle>;
    text?: StyleProp<ViewStyle>;
  };
}

type AlignType = 'horizontal' | 'vertical';

export interface RadioGroupProps {
  activeColor?: ColorName;
  align?: AlignType;
  children?: ReactElement<RadioProps> | ReactElement<RadioProps>[];
  inactiveColor?: ColorName;
  defaultValue?: NumberStringValue;
  error?: boolean;
  onChange?: (key: NumberStringValue) => void;
  helperText?: string;
  value?: NumberStringValue;
  size?: SizeType;
  type?: ShapeInput;
  style?: StyleProp<ViewStyle>;
  styles?: {
    root?: StyleProp<ViewStyle>;
    container?: StyleProp<ViewStyle>;
    helperText?: StyleProp<ViewStyle>;
  };
  sx?: SxProps & {
    root?: SxProps;
    container?: SxProps;
    helperText?: SxProps;
  };
}
