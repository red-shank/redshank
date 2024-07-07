import type { ReactElement } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import type { SizeType } from '../../@types/input';
import type { ColorName } from '../../context/theme/types';
import { SxProps } from '../../lib/styleDictionary';
import { ShapeInput } from '../Input/types';

export interface SwitchProps extends SxProps {
  activeColor?: ColorName;
  borderColor?: ColorName;
  bordered?: boolean;
  defaultValue?: boolean;
  deactiveColor?: ColorName;
  error?: boolean;
  icon?: {
    false?: ReactElement<{ color?: string }> | null | undefined;
    true?: ReactElement<{ color?: string }> | null | undefined;
  };
  onChange?: (value: boolean) => void;
  size?: SizeType;
  style?: StyleProp<ViewStyle>;
  textError?: string;
  thumbActiveColor?: ColorName;
  thumbDisabledColor?: ColorName;
  type?: ShapeInput;
  value?: boolean;
  sx?: SxProps & {
    root?: SxProps;
    touchable?: SxProps;
    thumb?: SxProps;
    toggle?: SxProps;
    helperText?: SxProps;
  };
  styles?: {
    root?: StyleProp<ViewStyle>;
    touchable?: StyleProp<ViewStyle>;
    thumb?: StyleProp<ViewStyle>;
    toggle?: StyleProp<ViewStyle>;
    helperText?: StyleProp<ViewStyle>;
  };
}
