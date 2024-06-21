import React from 'react';
import { StyleSheet } from 'react-native';
import useTheme from '../../context/theme/useTheme';
import { Image as RImage } from '../Image';
import { Box } from '../Box';
import { Ripple } from '../Ripple';
import { Icon } from '../Icon';
import {
  getColorForBackground,
  getRandomColor,
  getTextForAvatar
} from '../../utils';
import { AvatarIcon, AvatarProps } from './types';
import createSxStyle, { getSxStyleAndProps } from '../../lib/sx';
import { Text } from '../Text';

export const Avatar: React.FC<AvatarProps> = ({
  src,
  text,
  textColor,
  icon,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  backgroundColor,
  borderColor,
  textStyle,
  innerBorderColor,
  sx,
  showCountText = 2,
  bordered = !!borderColor,
  Component = onPress || onPressIn || onPressOut || onLongPress ? Ripple : Box,
  ImageComponent = RImage,
  size = 40,
  type = 'circle',
  style = {},
  imageProps = {},
  ...restTouchProps
}) => {
  const theme = useTheme();
  const { colors } = useTheme();

  const isShowText = !src && Boolean(text);
  // get text for show
  const textShow = isShowText ? getTextForAvatar(text, showCountText) : '';

  const baseSize = size - (showCountText === 1 ? 12 : 8);
  const fontSize = baseSize / (textShow?.length || 1);

  const innerBorderColorResolve = React.useMemo(() => {
    if (bordered) {
      return innerBorderColor ? innerBorderColor : 'background';
    }
    return 'transparent';
  }, [bordered, innerBorderColor]);

  const borderColorResolve = React.useMemo(() => {
    if (bordered) {
      return borderColor ? colors[borderColor] ?? borderColor : colors.border;
    }
    return 'transparent';
  }, [colors, bordered, borderColor]);

  const _backgroundColor = React.useMemo(() => {
    if (bordered) {
      return colors[backgroundColor] || backgroundColor || getRandomColor();
    }
    return src
      ? colors.accents7
      : colors[backgroundColor] || backgroundColor || getRandomColor();
  }, [backgroundColor, colors, src, bordered]);

  const colorText = React.useMemo<string | undefined>(() => {
    return textColor
      ? colors[textColor] || textColor
      : getColorForBackground(_backgroundColor);
  }, [textColor, colors, _backgroundColor]);

  const borderRadiusElement = type === 'circle' ? 100 : 1;
  const sourceImage = typeof src === 'string' ? { uri: src } : src;

  const internalPaddingImage = !bordered ? 0 : size * 0.15;

  const resolveProps = getSxStyleAndProps(
    {
      sx: sx?.root,
      ...sx,
      ...restTouchProps
    },
    theme
  );

  return (
    <Component
      width={size}
      height={size}
      borderRadius={borderRadiusElement}
      bg={innerBorderColorResolve}
      style={StyleSheet.flatten([
        _styles.container,
        bordered && {
          borderWidth: 2,
          borderStyle: 'solid',
          borderColor: borderColorResolve
        },
        style,
        resolveProps.style
      ])}
      // @ts-ignore
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onLongPress={onLongPress}
      {...restTouchProps}
    >
      <Box
        overflow="hidden"
        bg={_backgroundColor}
        width={bordered ? size - internalPaddingImage : size}
        height={bordered ? size - internalPaddingImage : size}
        borderRadius={borderRadiusElement}
        justifyContent="center"
        alignItems="center"
        sx={sx?.container}
        style={StyleSheet.flatten([
          _styles.container,
          !bordered && {
            padding: internalPaddingImage
          }
        ])}
      >
        {isShowText ? (
          <Text
            sx={sx?.text}
            style={StyleSheet.flatten([
              { color: colorText || getColorForBackground(_backgroundColor) },
              {
                fontSize: fontSize,
                lineHeight: fontSize + (bordered ? 4 : 7)
              },
              textStyle
            ])}
          >
            {textShow}
          </Text>
        ) : icon ? (
          <Icon
            color={textColor || getColorForBackground(_backgroundColor)}
            {...((icon || {}) as AvatarIcon)}
            style={createSxStyle(
              {
                sx: sx?.icon
              },
              theme
            )}
          />
        ) : (
          <ImageComponent
            source={sourceImage}
            resizeMode="cover"
            width={size}
            height={size}
            {...imageProps}
            style={StyleSheet.flatten([
              {
                width: size - internalPaddingImage,
                height: size - internalPaddingImage
              },
              { borderRadius: borderRadiusElement },
              imageProps && imageProps.style,
              createSxStyle(
                {
                  sx: sx?.image
                },
                theme
              )
            ])}
          />
        )}
      </Box>
    </Component>
  );
};

const _styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#ffffff',
    backgroundColor: 'transparent',
    textAlign: 'center'
  },
  hiddenPlaceholderStyle: {
    backgroundColor: 'transparent'
  }
});
