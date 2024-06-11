import type { ReactElement } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import type { SizeType } from '../../@types/input';
import type { ColorType } from '../../context/theme/types';
import { SxProps } from '../../lib/styleDictionary';

export type SwitchType = 'square' | 'rounded';

export interface SwitchProps extends SxProps {
  activeColor?: ColorType;
  borderColor?: ColorType;
  bordered?: boolean;
  defaultValue?: boolean;
  deactiveColor?: ColorType;
  error?: boolean;
  icon?: {
    false?: ReactElement<{ color?: string }> | null | undefined;
    true?: ReactElement<{ color?: string }> | null | undefined;
  };
  onChange?: (value: boolean) => void;
  size?: SizeType;
  style?: StyleProp<ViewStyle>;
  textError?: string;
  thumbActiveColor?: ColorType;
  thumbDisabledColor?: ColorType;
  type?: SwitchType;
  value?: boolean;
  sx?: SxProps;
  styles?: {
    root?: SxProps;
    touchable?: SxProps;
    thumb?: SxProps;
    toggle?: SxProps;
  };
}
