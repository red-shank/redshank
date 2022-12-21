import {
  KeyboardTypeOptions,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { SizeType } from '../@types/input';
import { ColorType } from '../Context/theme/types';

export type InputTypes = KeyboardTypeOptions & 'password';

export interface InputProps extends Omit<TextInputProps, 'type' | 'onChange'> {
  background?: ColorType;
  borderInputColor?: ColorType;
  color?: ColorType;
  error?: boolean;
  onChange?: (v: any) => void;
  placeholderColor?: ColorType;
  prefix?: JSX.Element;
  showIcon?: boolean;
  size?: SizeType;
  suffix?: JSX.Element;
  textError?: string;
  type?: InputTypes;
  withMarginBottom?: boolean;
  wrapperStyle?: StyleProp<ViewStyle>;
}
