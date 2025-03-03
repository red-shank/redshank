import type { PickerProps } from '@react-native-picker/picker';
import { InputProps } from '../Input';
import { SxProps } from '../../lib/styleDictionary';
import { StyleProp, ViewStyle } from 'react-native';

export interface SelectItemProps {
  key?: string | number;
  label: string;
  value: string;
  disabled?: boolean;
}

export type SelectProps = Omit<PickerProps, 'onValueChange' | 'items'> &
  Pick<
    InputProps,
    | 'isDisabled'
    | 'error'
    | 'helperText'
    | 'placeholder'
    | 'size'
    | 'value'
    | 'startContent'
    | 'endContent'
    | 'shape'
  > &
  SxProps & {
    okText?: string;
    cancelText?: string;
    multiple?: boolean;
    itemHeight?: number;
    items: SelectItemProps[];
    onSelectionChange?: (value: any, index: number) => void;
    onChange?: (value: string | number, item: any) => void;
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
