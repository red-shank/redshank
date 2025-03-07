import React, { forwardRef, useState } from 'react';
import { StyleProp, StyleSheet, TextInput, TextStyle } from 'react-native';

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
  large: 85,
  xLarge: 100
};

export const TextArea = forwardRef<TextInput, TextAreaProps>(
  (
    { minHeight, style = {}, numberOfLines = 3, size = 'middle', ...rest },
    ref
  ) => {
    const [height, setHeight] = useState(minHeight || sizesMinHeight[size]);

    return (
      <Input
        ref={ref}
        {...rest}
        multiline
        numberOfLines={numberOfLines}
        onContentSizeChange={(event) => {
          setHeight(event.nativeEvent.contentSize.height);
        }}
        sx={{
          input: {
            height: Math.max(minHeight || sizesMinHeight[size], height)
          }
        }}
        style={StyleSheet.flatten([style])}
      />
    );
  }
);
