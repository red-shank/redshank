import type { PickerSelectProps } from 'react-native-picker-select';
import { InputProps } from '../Input';
import { SxProps } from '../../lib/styleDictionary';
import { StyleProp, ViewStyle } from 'react-native';

export interface SelectItemProps {
  key?: string | number;
  label: string;
  value: string;
}

export type SelectProps = Omit<PickerSelectProps, 'onValueChange' | 'items'> &
  Pick<
    InputProps,
    | 'isDisabled'
    | 'error'
    | 'helperText'
    | 'placeholder'
    | 'size'
    | 'value'
    | 'shape'
  > &
  SxProps & {
    items: SelectItemProps[];
    onChange?: (value: any, index: number) => void;
    sx?: SxProps & {
      root?: SxProps;
      iosPickerItem?: SxProps;
      inputAndroid?: SxProps;
      inputIOS?: SxProps;
      inputWeb?: SxProps;
      modalViewMiddle?: SxProps;
      touchableWrapper?: SxProps;
      helperText?: SxProps;
    };
    styles?: {
      root?: StyleProp<ViewStyle>;
      iosPickerItem?: StyleProp<ViewStyle>;
      touchableWrapper?: StyleProp<ViewStyle>;
      inputAndroid?: StyleProp<ViewStyle>;
      inputIOS?: StyleProp<ViewStyle>;
      inputWeb?: StyleProp<ViewStyle>;
      modalViewMiddle?: StyleProp<ViewStyle>;
      helperText?: StyleProp<ViewStyle>;
    };
  };
