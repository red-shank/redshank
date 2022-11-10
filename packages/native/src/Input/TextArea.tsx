import React, { useEffect, useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
} from 'react-native';

import { styles } from './Input';
import { TextError } from '../utils/TextError';
import useTheme from '../Context/theme/useTheme';
import { sizes } from '../@types/input';

export interface TextAreaProps {
  numberOfLines?: number;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  editable?: boolean;
  color?: string;
  background?: string;
  minHeight?: number;
  textError?: string;
  error?: boolean;
  borderInputColor?: string;
  placeholderColor?: string;
  onChange?: (v: string) => void;
  style?: StyleProp<TextStyle>;

  // rest TextInput props https://reactnative.dev/docs/textinput
  [key: string]: unknown;
}

export const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  defaultValue,
  placeholder,
  textError,
  style = {},
  error = false,
  minHeight = 100,
  editable = true,
  numberOfLines = 3,
  color = 'accents2',
  borderInputColor = 'border',
  background = 'inputColor',
  placeholderColor = 'border',
  ...rest
}) => {
  const { colors, borderRadius, paddingSizes } = useTheme();

  // states
  const [isError, setError] = useState<undefined | boolean>(false);
  const [text, setText] = useState<undefined | string>(defaultValue);

  // handlers
  const onInternalChange = (val: string) => {
    setText(val);
    setError(false);
    onChange && onChange(val);
  };

  // effects
  useEffect(() => {
    setText(value);
  }, [value]);

  useEffect(() => {
    setError(error);
  }, [error, textError]);

  return (
    <View style={styles.wrapper}>
      <TextInput
        {...rest}
        multiline
        value={text}
        editable={editable}
        placeholder={placeholder}
        defaultValue={defaultValue}
        numberOfLines={numberOfLines}
        onChangeText={onInternalChange}
        placeholderTextColor={colors[placeholderColor] || placeholderColor}
        style={StyleSheet.flatten([
          styles.input,
          sizes.middle,
          {
            paddingTop: paddingSizes.sm,
            paddingBottom: paddingSizes.sm,
          },
          {
            minHeight: minHeight,
          },
          {
            backgroundColor: colors[background] || background,
            borderColor: isError
              ? colors.error
              : colors[borderInputColor] || borderInputColor,
            borderRadius: borderRadius.xl,
            color: colors[color] || color,
          },
          style,
        ])}
      />
      {isError && textError && <TextError>{textError}</TextError>}
    </View>
  );
};
