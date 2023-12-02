import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import type { SizeType } from '../../@types/input';
import type { ColorType } from '../../context/theme/types';

export type SwitchType = 'square' | 'rounded';

export interface SwitchProps {
  activeColor?: ColorType;
  borderColor?: ColorType;
  bordered?: boolean;
  defaultValue?: boolean;
  deactiveColor?: ColorType;
  error?: boolean;
  icon?: {
    false?: ReactNode;
    true?: ReactNode;
  };
  onChange?: (value: boolean) => void;
  size?: SizeType;
  style?: StyleProp<ViewStyle>;
  textError?: string;
  thumbActiveColor?: ColorType;
  thumbDisabledColor?: ColorType;
  thumbStyle?: StyleProp<ViewStyle>;
  type?: SwitchType;
  value?: boolean;
}
