import { Component, FunctionComponent } from 'react';
import { TextInputProps, StyleProp, ViewStyle } from 'react-native';
import { SizeType } from '../../@types/input';
import { ColorName } from '../../context/theme/types';
import { SxProps } from '../../lib/styleDictionary';

export type KeyboardType =
  | 'password'
  | 'default'
  | 'number-pad'
  | 'decimal-pad'
  | 'numeric'
  | 'email-address'
  | 'phone-pad'
  | 'url';
export type KeyboardTypeIOS =
  | 'ascii-capable'
  | 'numbers-and-punctuation'
  | 'name-phone-pad'
  | 'twitter'
  | 'web-search';
export type KeyboardTypeAndroid = 'visible-password';
export type InputTypes = KeyboardType | KeyboardTypeAndroid | KeyboardTypeIOS;

export type ShapeInput = 'square' | 'rounded' | 'circle';

export type InputProps = Omit<TextInputProps, 'type' | 'onChange'> &
  SxProps & {
    isDisabled?: boolean;
    error?: boolean;
    onChange?: (v: any) => void;
    placeholderColor?: ColorName;
    startContent?: JSX.Element;
    showIcon?: boolean;
    size?: SizeType;
    endContent?: JSX.Element;
    helperText?: string;
    type?: InputTypes;
    shape?: ShapeInput;
    Component?: typeof Component | FunctionComponent;
    withMarginBottom?: boolean;
    sx?: SxProps & {
      root?: SxProps;
      input?: SxProps;
      wrapperIcon?: SxProps;
      start?: SxProps;
      end?: SxProps;
      helperText?: SxProps;
      wrapper?: SxProps;
    };
    styles?: {
      root?: StyleProp<ViewStyle>;
      input?: StyleProp<ViewStyle>;
      wrapperIcon?: StyleProp<ViewStyle>;
      start?: StyleProp<ViewStyle>;
      end?: StyleProp<ViewStyle>;
      helperText?: StyleProp<ViewStyle>;
      wrapper?: StyleProp<ViewStyle>;
    };
  };
