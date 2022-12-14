import React, { cloneElement, useEffect } from 'react';
import {
  StyleProp,
  TextStyle,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import { Icon } from '../Icon';
import { TextError } from '../utils/TextError';
import useTheme from '../Context/theme/useTheme';
import type { ColorType } from '../Context/theme/types';
import { SizeType } from '../@types/input';

export type InputTypes =
  | 'default'
  | 'numeric'
  | 'number-pad'
  | 'decimal-pad'
  | 'email-address'
  | 'phone-pad'
  // only Android
  | 'visible-password'
  // only iOS
  | 'ascii-capable'
  | 'numbers-and-punctuation'
  | 'url'
  | 'name-phone-pad'
  | 'twitter'
  | 'web-search'
  // custom
  | 'password';

export interface InputProps {
  type?: InputTypes;
  prefix?: JSX.Element;
  suffix?: JSX.Element;
  value?: string;
  textError?: string;
  error?: boolean;
  defaultValue?: string;
  placeholder?: string;
  size?: SizeType;
  color?: ColorType;
  background?: ColorType;
  showIcon?: boolean;
  borderInputColor?: ColorType;
  placeholderColor?: ColorType;
  onChange?: (v: string) => void;
  style?: StyleProp<TextStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
  withMarginBottom?: boolean;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  defaultValue,
  value,
  onChange,
  textError,
  prefix,
  wrapperStyle,
  style = {},
  type = 'default',
  suffix = type === 'password' ? (
    <Icon name="eye" type="antdesign" />
  ) : undefined,
  error = false,
  size = 'middle',
  color = 'accents2',
  background = 'inputColor',
  borderInputColor = 'border',
  placeholderColor = 'border',
  withMarginBottom = false,
  ...rest
}) => {
  const { colors, borderRadius, fontSizes, borderWidth, sizes } = useTheme();

  // states
  const [show, setShow] = React.useState<boolean>(false);
  const [isError, setError] = React.useState<undefined | boolean>(false);
  const [text, setText] = React.useState<undefined | string>(defaultValue);

  const onInternalChange = (v: string) => {
    setText(v);
    setError(false);
    onChange && onChange(v);
  };

  const propsPassword = React.useMemo(() => {
    if (type !== 'password') {
      return {};
    }

    return {
      onPress: () => setShow((prev) => !prev),
    };
  }, [type]);

  // effects
  useEffect(() => {
    setText(value);
  }, [value]);

  useEffect(() => {
    typeof error === 'boolean' && setError(error);
  }, [error]);

  return (
    <View>
      <View
        style={StyleSheet.flatten([
          styles.wrapper,
          withMarginBottom && styles.withBorder,
          wrapperStyle,
        ])}
      >
        {/* prefix icon */}
        {prefix && (
          <TouchableOpacity
            style={StyleSheet.flatten([styles.wrapperIcon, { left: 0 }])}
          >
            <View style={styles.icon}>
              {cloneElement(prefix, {
                color: colors.border,
                ...prefix.props,
              })}
            </View>
          </TouchableOpacity>
        )}
        <TextInput
          {...rest}
          value={text}
          secureTextEntry={type === 'password' && !show}
          defaultValue={defaultValue || text}
          keyboardType={type === 'password' ? 'default' : type}
          placeholder={placeholder}
          onChangeText={onInternalChange}
          placeholderTextColor={colors[placeholderColor] || placeholderColor}
          style={StyleSheet.flatten([
            styles.input,
            {
              borderWidth,
              height: sizes[size],
              fontSize: fontSizes.base,
              backgroundColor: colors[background] || background,
              borderColor: isError
                ? colors.error
                : colors[borderInputColor] || borderInputColor,
              borderRadius: borderRadius.xl,
              color: colors[color] || color,
            },
            prefix && {
              paddingLeft: 35,
            },
            suffix && {
              paddingRight: 45,
            },
            style,
          ])}
        />

        {suffix && (
          <TouchableOpacity
            {...propsPassword}
            style={StyleSheet.flatten([styles.wrapperIcon, { right: 0 }])}
          >
            <View style={styles.icon}>
              {React.cloneElement(suffix, {
                color: colors.border,
                ...suffix.props,
              })}
            </View>
          </TouchableOpacity>
        )}
      </View>
      {isError && textError && <TextError>{textError}</TextError>}
    </View>
  );
};

export const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  withBorder: { marginBottom: 22 },
  input: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  wrapperIcon: {
    position: 'absolute',
    width: 40,
    height: '100%',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  icon: {},
});
