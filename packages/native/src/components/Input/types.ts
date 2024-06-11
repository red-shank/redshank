import { Component, FunctionComponent } from 'react';
import { TextInputProps, StyleProp, ViewStyle } from 'react-native';
import { SizeType } from '../../@types/input';
import { ColorType } from '../../context/theme/types';

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

export interface InputProps extends Omit<TextInputProps, 'type' | 'onChange'> {
  background?: ColorType;
  borderInputColor?: ColorType;
  color?: ColorType;
  isDisabled?: boolean;
  error?: boolean;
  onChange?: (v: any) => void;
  placeholderColor?: ColorType;
  prefix?: JSX.Element;
  showIcon?: boolean;
  size?: SizeType;
  suffix?: JSX.Element;
  textError?: string;
  type?: InputTypes;
  Component?: typeof Component | FunctionComponent;
  withMarginBottom?: boolean;
  wrapperStyle?: StyleProp<ViewStyle>;
}
