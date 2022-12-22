import type { PickerSelectProps } from 'react-native-picker-select';
import type { SizeType } from '../@types/input';
import type { ColorType } from '../Context/theme/types';

export interface SelectItemProps {
  key?: string | number;
  label: string;
  value: string;
}

export interface SelectProps
  extends Omit<PickerSelectProps, 'onValueChange' | 'items'> {
  background?: ColorType;
  borderInputColor?: ColorType;
  color?: ColorType;
  disabled?: boolean;
  error?: boolean;
  items: SelectItemProps[];
  onChange?: (value: any, index: number) => void;
  placeholder?: string;
  placeholderColor?: ColorType;
  size?: SizeType;
  textError?: string;
  value?: string;
}
