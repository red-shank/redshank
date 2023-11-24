import { StyleProp, ViewStyle } from 'react-native';
import { SizeType } from '../@types/input';
import { ColorType } from '../Context/theme/types';

// rest DatePickerModal props https://github.com/mmazzarolo/react-native-modal-datetime-picker
export interface DatePickerProps {
  background?: ColorType;
  borderInputColor?: ColorType;
  color?: ColorType;
  defaultValue?: Date | string;
  locale?: string;
  mode?: 'date' | 'time' | 'datetime';
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
