import React from 'react';
import { StyleSheet, Text, ActivityIndicator, View } from 'react-native';

import { Ripple } from '../Ripple';
import useTheme from '../../context/theme/useTheme';
import { getColorForBackground, getOpacity } from '../../utils';

import type { ButtonProps } from './types';
import { getSxStyleAndProps } from '../../lib/sx';

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
  icon,
  suffix,
  suffixOrPrefixStyle,
  prefix = icon,
  textProps,
  fullWidth = true,
  withMarginBottom = false,
  textAlign = 'center',
  Component = Ripple,
  size = 'middle',
  color = 'primary',
  type = 'solid',
  shape = 'round',
  ...rest
}) => {
  const {
    colors,
    isDark,
    fonts,
    sizes,
    fontSizes,
    activeOpacity,
    marginSizes
  } = useTheme();
  const theme = useTheme();

  const isSolid = type === 'solid';
  const isLink = type === 'link';
  const isCircle = shape === 'circle';
  const internalColor = colors[color] || color;
  const colorText = textColor || getColorForBackground(internalColor);
  const textAlignWrapper = `text_${textAlign}`;

  const sxResult = getSxStyleAndProps(
    {
      ...StyleSheet.flatten([
        styles.button,
        styles[textAlignWrapper],
        {
          borderRadius: isCircle ? sizes[size] : isLink ? 0 : 1
        },
        !fullWidth && { alignSelf: 'flex-start' },
        withMarginBottom && { marginBottom: marginSizes.md },
        isSolid && {
          backgroundColor: internalColor
        },
        type === 'flat' && {
          backgroundColor: getOpacity(internalColor, 0.3)
        },
        type === 'outline' && {
          borderWidth: 1,
          borderColor: internalColor
        },
        shadow && [
          styles.shadow,
          {
            shadowColor: internalColor,
            shadowOpacity: isDark ? 0.9 : 0.5
          }
        ],
        disabled &&
          isSolid && {
            backgroundColor: colors.accents5
          },
        disabled &&
          !isSolid && {
            borderColor: colors.accents5
          },
        type !== 'link' &&
          StyleSheet.flatten([
            {
              height: sizes[size]
            },
            styles[size]
          ]),
        style
      ]),
      ...rest
    },
    theme
  );

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
      {...sxResult.props}
      style={sxResult.style}
    >
      <View style={StyleSheet.flatten([styles.button, contentStyle])}>
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
              fontSize: fontSizes.base,
              color: !isSolid ? internalColor : colors[colorText] || colorText
            },
            type === 'flat' && {
              color: colors[textColor] || internalColor
            },
            disabled &&
              !isSolid && {
                color: colors.accents5
              },
            textStyle
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
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center'
  },
  text_left: {
    justifyContent: 'flex-start'
  },
  text_center: {
    justifyContent: 'center'
  },
  text_right: {
    justifyContent: 'flex-end'
  },
  loading: {
    lineHeight: 0,
    paddingTop: 2,
    marginRight: 5
  },
  shadow: {
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 6
  },
  small: {
    paddingRight: 10,
    paddingLeft: 10
  },
  middle: {
    paddingRight: 18,
    paddingLeft: 18
  },
  large: {
    paddingRight: 18,
    paddingLeft: 18
  },
  xLarge: {
    paddingRight: 24,
    paddingLeft: 25
  },
  prefix: {
    marginRight: 8
  },
  suffix: {
    marginLeft: 8
  }
});
