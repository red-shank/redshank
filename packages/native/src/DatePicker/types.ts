import { StyleProp, ViewStyle } from 'react-native';
import { DateTimePickerProps } from 'react-native-modal-datetime-picker';
import { SizeType } from '../@types/input';
import { ColorType } from '../Context/theme/types';

// rest DatePickerModal props https://github.com/mmazzarolo/react-native-modal-datetime-picker
export interface DatePickerProps
  extends Omit<DateTimePickerProps, 'onChange' | 'onCancel' | 'onConfirm'> {
  background?: ColorType;
  borderInputColor?: ColorType;
  color?: ColorType;
  defaultValue?: Date | string;
  display?: 'spinner' | 'default' | 'inline';
  error?: boolean;
  format?: string;
  onChange?: (date: Date, dateText: string) => void;
  placeholder?: string;
  prefix?: JSX.Element;
  size?: SizeType;
  style?: StyleProp<ViewStyle>;
  suffix?: JSX.Element | null | false;
  textError?: string;
  value?: Date | string;
}
