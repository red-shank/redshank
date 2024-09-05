import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';

import { Ripple } from '../Ripple';
import useTheme from '../../context/theme/useTheme';
import { getColorForBackground, getOpacity } from '../../utils';

import { ButtonProps } from './types';
import createSxStyle, { getSxStyleAndProps } from '../../lib/sx';
import { Box } from '../Box';
import { Text } from '../Text';
import { SizeType } from '../../@types/input';

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
  color,
  startContent = onlyIcon ? children || endContent : null,
  fullWidth = true,
  textAlign = 'center',
  Component = Ripple,
  size = 'middle',
  type = 'solid',
  fontWeight = '500',
  appearance = type === 'link' ? 'primary' : 'text',
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
      height: !isLink && sizes[size],
      px: !isLink && !onlyIcon && sxPx[size],
      justifyContent: sxAlign[textAlign],
      style: StyleSheet.flatten([
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
        style
      ]),
      ...sx,
      sx: onlyIcon
        ? {
            width: sizes[size],
            height: sizes[size],
            justifyContent: 'center',
            alignItems: 'center',
            ...sx?.root
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
        {(loading || startContent) && (
          <Box sx={sx?.icon}>
            {loading ? (
              <ActivityIndicator color={colorText} size={fontSizes.sm} />
            ) : (
              startContent
            )}
          </Box>
        )}
        {!onlyIcon && children && (
          <Text
            {...textProps}
            color={colorText}
            style={createSxStyle(
              {
                sx: sx?.text,
                fontWeight: bold ? 'bold' : fontWeight,
                style: StyleSheet.flatten([
                  type !== 'link' && fonts.bold,
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

const sxPx: Record<SizeType, number> = {
  small: 1,
  middle: 1.8,
  large: 2.2,
  xLarge: 2.5
};

const sxAlign = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end'
};
