import React from 'react';
import { StyleSheet, ActivityIndicator, Text } from 'react-native';

import { Ripple } from '../Ripple';
import useTheme from '../../context/theme/useTheme';
import { getColorForBackground, getOpacity } from '../../utils';

import { ButtonProps } from './types';
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
  onlyIcon,
  endContent,
  sx,
  bold,
  textProps,
  startContent = onlyIcon ? children || endContent : null,
  fullWidth = true,
  textAlign = 'center',
  Component = Ripple,
  size = 'middle',
  appearance = 'primary',
  type = 'solid',
  fontWeight = '500',
  color = type === 'link' && !appearance ? 'primary' : undefined,
  shape = 'round',
  ...rest
}) => {
  const { colors, fonts, sizes, borderRadius, fontSizes, activeOpacity } =
    useTheme();
  const theme = useTheme();

  const isSolid = type === 'solid';
  const isOutline = type === 'outline';
  const isFlat = type === 'flat';
  const isLink = type === 'link';
  // const isCircle = shape === 'circle';
  const internalAppearanceColor = colors.get(appearance);
  const textAlignWrapper = `text_${textAlign}`;

  const colorText = React.useMemo(() => {
    if (isFlat && !color) {
      return internalAppearanceColor;
    }
    if (isOutline && !color) {
      return internalAppearanceColor;
    }
    if (isLink && !color) {
      return internalAppearanceColor;
    }

    return !color
      ? getColorForBackground(internalAppearanceColor)
      : colors.get(color);
  }, [isFlat, color, isOutline, isLink, internalAppearanceColor, colors]);

  const resolveProps = getSxStyleAndProps(
    {
      borderRadius: borderRadius[`button.${shape}`],
      style: StyleSheet.flatten([
        styles[textAlignWrapper],
        !fullWidth && { alignSelf: 'flex-start' },
        isSolid && {
          backgroundColor: internalAppearanceColor
        },
        type === 'flat' && {
          backgroundColor: getOpacity(internalAppearanceColor, 0.3)
        },
        type === 'outline' && {
          borderWidth: 1,
          borderColor: internalAppearanceColor
        },
        disabled &&
          isSolid && {
            backgroundColor: colors.get('accents.5')
          },
        disabled &&
          !isSolid && {
            borderColor: colors.get('accents.5')
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
      sx: onlyIcon
        ? {
            ...sx?.root,
            width: sizes[size],
            height: sizes[size]
          }
        : sx?.root,
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
      <Box
        gap={1}
        sx={sx?.container}
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        {loading && (
          <ActivityIndicator
            style={styles.loading}
            size={fontSizes.sm}
            color={colorText}
          />
        )}
        {!loading && startContent && <Box sx={sx?.icon}>{startContent}</Box>}
        {!onlyIcon && children && (
          <Text
            {...textProps}
            style={createSxStyle(
              {
                sx: sx?.text,
                fontWeight: bold ? 'bold' : fontWeight,
                style: StyleSheet.flatten([
                  type !== 'link' && fonts.bold,
                  {
                    fontSize: fontSizes.base,
                    color: colorText
                  },
                  disabled &&
                    !isSolid && {
                      color: colors.get('accents.5')
                    }
                ])
              },
              theme
            )}
          >
            {children}
          </Text>
        )}
        {endContent && <Box sx={sx?.icon}>{endContent}</Box>}
      </Box>
    </Component>
  );
};

const styles = StyleSheet.create({
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
    paddingHorizontal: 8
  },
  middle: {
    paddingHorizontal: 14
  },
  large: {
    paddingHorizontal: 18
  },
  xLarge: {
    paddingHorizontal: 20
  }
});
