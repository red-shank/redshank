import React from 'react';
import { StyleSheet, ActivityIndicator, Text } from 'react-native';

import { Ripple } from '../Ripple';
import useTheme from '../../context/theme/useTheme';
import { getColorForBackground, getOpacity } from '../../utils';

import { ButtonProps, ButtonSize } from './types';
import createSxStyle, { getSxStyleAndProps } from '../../lib/sx';
import { Box } from '../Box';
import { SxProps } from '../../lib/styleDictionary';

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
  color = type === 'link' ? 'primary' : undefined,
  shape = 'round',
  ...rest
}) => {
  const { colors, fonts, sizes, fontSizes, activeOpacity } = useTheme();
  const theme = useTheme();

  const isSolid = type === 'solid';
  const isOutline = type === 'outline';
  const isFlat = type === 'flat';
  const isLink = type === 'link';
  const isCircle = shape === 'circle';
  const internalAppearanceColor = colors[appearance] || appearance;
  const textAlignWrapper = `text_${textAlign}`;

  const colorText = React.useMemo(() => {
    if (isFlat && !color) {
      return internalAppearanceColor;
    }
    if (isOutline && !color) {
      return internalAppearanceColor;
    }

    return !color
      ? getColorForBackground(internalAppearanceColor)
      : colors[color] || color;
  }, [isFlat, color, isOutline, colors, internalAppearanceColor]);

  const resolveProps = getSxStyleAndProps(
    {
      ...StyleSheet.flatten([
        styles[textAlignWrapper],
        {
          borderRadius: isCircle ? sizes[size] : isLink ? 0 : 1
        },
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
      sx: onlyIcon
        ? {
            ...sx?.root,
            ...sizeOnlyIcon[size]
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
                fontWeight: bold ? 'bold' : '500',
                style: StyleSheet.flatten([
                  type !== 'link' && fonts.bold,
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
        )}
        {endContent && <Box sx={sx?.icon}>{endContent}</Box>}
      </Box>
    </Component>
  );
};

const sizeOnlyIcon: Record<ButtonSize, SxProps> = {
  small: {
    width: 32,
    height: 32,
    paddingHorizontal: 0
  },
  middle: {
    width: 40,
    height: 40,
    paddingHorizontal: 0
  },
  large: {
    width: 50,
    height: 50,
    paddingHorizontal: 0
  },
  xLarge: {
    width: 55,
    height: 55,
    paddingHorizontal: 0
  }
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
