import React, { cloneElement, useEffect, forwardRef } from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  KeyboardTypeOptions,
} from 'react-native';

import { Icon } from '../Icon';
import { TextError } from '../utils/TextError';
import useTheme from '../Context/theme/useTheme';
import type { InputProps } from './types';

export const Input = forwardRef<TextInput, InputProps>(
  (
    {
      background = 'inputColor',
      borderInputColor = 'border',
      color = 'accents2',
      defaultValue,
      error = false,
      onChange,
      placeholder,
      placeholderColor = 'border',
      prefix,
      size = 'middle',
      style = {},
      textError,
      type = 'default',
      suffix = type === 'password' ? (
        <Icon name="eye" type="antdesign" />
      ) : undefined,
      value,
      withMarginBottom = false,
      wrapperStyle,
      ...rest
    },
    _ref
  ) => {
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
            ref={_ref}
            secureTextEntry={type === 'password' && !show}
            defaultValue={defaultValue || text}
            keyboardType={
              type === 'password' ? 'default' : (type as KeyboardTypeOptions)
            }
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
  }
);

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    position: 'relative',
  },
  withBorder: { marginBottom: 15 },
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
    zIndex: 2,
  },
  icon: {},
});
