import { StyleProp, ViewStyle } from 'react-native';
import { SizeType } from '../../@types/input';
import { InputProps } from '../Input/types';
import { SxProps } from '../../lib/styleDictionary';

// rest DatePickerModal props https://github.com/mmazzarolo/react-native-modal-datetime-picker
export type DatePickerProps = Pick<
  InputProps,
  | 'background'
  | 'borderColor'
  | 'color'
  | 'shape'
  | 'size'
  | 'style'
  | 'placeholder'
  | 'isDisabled'
  | 'error'
  | 'helperText'
  | 'startContent'
  | 'endContent'
> & {
  defaultValue?: Date | string;
  locale?: string;
  format?: string;
  onChange?: (date: Date, dateText: string) => void;
  size?: SizeType;
  value?: Date | string;
  sx?: SxProps & {
    root?: SxProps;
    container?: SxProps;
    toggle?: SxProps;
    wrapperIcon?: SxProps;
    icon?: SxProps;
    helperText?: SxProps;
    text?: SxProps;
    modal?: SxProps;
    modalContainer?: SxProps;
    modalBody?: SxProps;
  };
  styles?: {
    root?: StyleProp<ViewStyle>;
    container?: StyleProp<ViewStyle>;
    toggle?: StyleProp<ViewStyle>;
    wrapperIcon?: StyleProp<ViewStyle>;
    icon?: StyleProp<ViewStyle>;
    text?: StyleProp<ViewStyle>;
    helperText?: StyleProp<ViewStyle>;
    modal?: StyleProp<ViewStyle>;
    modalContainer?: StyleProp<ViewStyle>;
    modalBody?: StyleProp<ViewStyle>;
  };
};
