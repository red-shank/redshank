import React from 'react';
import { StyleSheet, Text, ActivityIndicator, View } from 'react-native';

import { Ripple } from '../Ripple';
import useTheme from '../Context/theme/useTheme';
import { getColorForBackground, getOpacity } from '../utils';

import type { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  textColor,
  disabled,
  loading,
  style,
  textStyle,
  contentStyle,
  disableTransform,
  disableRipple,
  shadow,
  borderRadius: _borderRadius,
  icon,
  suffix,
  suffixOrPrefixStyle,
  prefix = icon,
  fullWidth = false,
  withMarginBottom = false,
  textAlign = 'center',
  Component = Ripple,
  size = 'middle',
  color = 'primary',
  type = 'solid',
  shape = 'round',
  textProps = {},
  ...rest
}) => {
  const {
    colors,
    borderRadius,
    isDark,
    fonts,
    fontSizes,
    activeOpacity,
    marginSizes,
  } = useTheme();

  const isSolid = type === 'solid';
  const internalColor = colors[color] || color;
  const colorText = textColor || getColorForBackground(internalColor);

  return (
    <Component
      disabled={disabled}
      disableRipple={disabled || disableRipple}
      activeOpacity={activeOpacity}
      disableTransform={disabled || disableTransform}
      onPress={loading || disabled ? undefined : onPress}
      onPressIn={loading || disabled ? undefined : onPressIn}
      onPressOut={loading || disabled ? undefined : onPressOut}
      onLongPress={loading || disabled ? undefined : onLongPress}
      {...rest}
      style={StyleSheet.flatten([
        styles.button,
        {
          borderRadius: shape === 'circle' ? borderRadius.max : borderRadius.lg,
        },
        !fullWidth && { alignSelf: 'flex-start' },
        withMarginBottom && { marginBottom: marginSizes.md },
        isSolid && {
          backgroundColor: internalColor,
        },
        type === 'flat' && {
          backgroundColor: getOpacity(internalColor, 0.3),
        },
        type === 'outline' && {
          borderWidth: 1,
          borderColor: internalColor,
        },
        shadow && [
          styles.shadow,
          {
            shadowColor: internalColor,
            shadowOpacity: isDark ? 0.9 : 0.5,
          },
        ],
        disabled &&
          isSolid && {
            backgroundColor: colors.accents5,
          },
        disabled &&
          !isSolid && {
            borderColor: colors.accents5,
          },
        _borderRadius && {
          borderRadius: _borderRadius,
        },
        type !== 'link' && styles[size],
        style,
      ])}
    >
      <View
        style={StyleSheet.flatten([
          styles.button,
          styles[`text_${textAlign}`],
          contentStyle,
        ])}
      >
        {loading && (
          <ActivityIndicator
            style={styles.loading}
            size={fontSizes.sm}
            color={
              type === 'flat'
                ? colors[textColor] || internalColor
                : colors[colorText] || colorText
            }
          />
        )}
        {!loading && prefix && (
          <View
            style={StyleSheet.flatten([styles.prefix, suffixOrPrefixStyle])}
          >
            {prefix}
          </View>
        )}
        <Text
          {...textProps}
          style={StyleSheet.flatten([
            fonts.bold,
            {
              textAlign,
              fontSize: fontSizes.base,
              color: !isSolid ? internalColor : colors[colorText] || colorText,
            },
            type === 'flat' && {
              color: colors[textColor] || internalColor,
            },
            disabled &&
              !isSolid && {
                color: colors.accents5,
              },
            textStyle,
          ])}
        >
          {children}
        </Text>

        {!loading && suffix && (
          <View
            style={StyleSheet.flatten([styles.suffix, suffixOrPrefixStyle])}
          >
            {suffix}
          </View>
        )}
      </View>
    </Component>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text_left: {
    justifyContent: 'flex-start',
  },
  text_center: {
    justifyContent: 'center',
  },
  text_right: {
    justifyContent: 'flex-end',
  },
  loading: {
    lineHeight: 0,
    paddingTop: 2,
    marginRight: 5,
  },
  shadow: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 12,
  },
  small: {
    height: 32,
    paddingRight: 10,
    paddingLeft: 10,
  },
  middle: {
    height: 45,
    paddingRight: 18,
    paddingLeft: 18,
  },
  large: {
    height: 50,
    paddingRight: 18,
    paddingLeft: 18,
  },
  xLarge: {
    height: 55,
    paddingRight: 24,
    paddingLeft: 25,
  },
  prefix: {
    marginRight: 8,
  },
  suffix: {
    marginLeft: 8,
  },
});
