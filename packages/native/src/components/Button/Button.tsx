import React from 'react';
import { StyleSheet, ActivityIndicator, Text } from 'react-native';

import { Ripple } from '../Ripple';
import useTheme from '../../context/theme/useTheme';
import { getColorForBackground, getOpacity } from '../../utils';

import type { ButtonProps } from './types';
import createSxStyle, { getSxStyleAndProps } from '../../lib/sx';
import { Box } from '../Box';

export const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  disabled,
  loading,
  style,
  disableTransform,
  disableRipple,
  icon,
  suffix,
  sx,
  prefix = icon,
  textProps,
  bg,
  color,
  fullWidth = true,
  withMarginBottom = false,
  textAlign = 'center',
  Component = Ripple,
  size = 'middle',
  backgroundColor = bg || 'primary',
  type = 'solid',
  shape = 'round',
  ...rest
}) => {
  const { colors, fonts, sizes, fontSizes, activeOpacity, marginSizes } =
    useTheme();
  const theme = useTheme();

  const isSolid = type === 'solid';
  const isOutline = type === 'outline';
  const isFlat = type === 'flat';
  const isLink = type === 'link';
  const isCircle = shape === 'circle';
  const internalColor = colors[backgroundColor] || backgroundColor;
  const textAlignWrapper = `text_${textAlign}`;

  const colorText = React.useMemo(() => {
    if (isFlat && !color) {
      return internalColor;
    }
    if (isOutline && !color) {
      return internalColor;
    }

    return !color
      ? getColorForBackground(internalColor)
      : colors[color] || color;
  }, [isFlat, color, isOutline, colors, internalColor]);

  const resolveProps = getSxStyleAndProps(
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
      ...sx,
      sx: sx?.root,
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
      {...resolveProps.props}
      style={resolveProps.style}
    >
      <Box sx={sx?.container} style={styles.button}>
        {loading && (
          <ActivityIndicator
            style={styles.loading}
            size={fontSizes.sm}
            color={colorText}
          />
        )}
        {!loading && prefix && (
          <Box sx={sx?.icon} style={[styles.prefix]}>
            {prefix}
          </Box>
        )}
        <Text
          {...textProps}
          style={createSxStyle(
            {
              sx: sx?.text,
              style: StyleSheet.flatten([
                fonts.bold,
                {
                  fontSize: fontSizes.base,
                  color: colorText
                },
                disabled &&
                  !isSolid && {
                    color: colors.accents5
                  }
              ])
            },
            theme
          )}
        >
          {children}
        </Text>

        {!loading && suffix && (
          <Box sx={sx?.icon} style={styles.suffix}>
            {suffix}
          </Box>
        )}
      </Box>
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
