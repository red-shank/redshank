import React, { useState } from 'react';
import { StyleProp, StyleSheet, TextStyle } from 'react-native';

import { Input } from './Input';
import { SizeType } from '../../@types/input';

export interface TextAreaProps {
  numberOfLines?: number;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  isDisabled?: boolean;
  color?: string;
  background?: string;
  minHeight?: number;
  textError?: string;
  error?: boolean;
  borderInputColor?: string;
  placeholderColor?: string;
  size?: SizeType;
  onChange?: (v: string) => void;
  style?: StyleProp<TextStyle>;

  // rest TextInput props https://reactnative.dev/docs/textinput
  [key: string]: unknown;
}

const sizesMinHeight: Record<SizeType, number> = {
  small: 45,
  middle: 60,
  large: 85
};

export const TextArea: React.FC<TextAreaProps> = ({
  minHeight,
  style = {},
  numberOfLines = 3,
  size = 'middle',
  ...rest
}) => {
  const [height, setHeight] = useState(minHeight || sizesMinHeight[size]);

  return (
    <Input
      {...rest}
      multiline
      numberOfLines={numberOfLines}
      onContentSizeChange={(event) => {
        setHeight(event.nativeEvent.contentSize.height);
      }}
      style={StyleSheet.flatten([
        {
          height: Math.max(minHeight || sizesMinHeight[size], height)
        },
        style
      ])}
    />
  );
};
