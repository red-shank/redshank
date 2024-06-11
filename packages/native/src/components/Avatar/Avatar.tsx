import React from 'react';
import { StyleSheet, Text, Image as ImageRN } from 'react-native';
import useTheme from '../../context/theme/useTheme';
import { Image } from '../Image';
import { Box } from '../Box';
import { Ripple } from '../Ripple';
import { Icon } from '../Icon';
import {
  getColorForBackground,
  getRandomColor,
  getTextForAvatar
} from '../../utils';
import { AvatarIcon, AvatarProps } from './types';

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
  showCountText = 2,
  innerBorderColor,
  bordered = !!borderColor,
  Component = onPress || onPressIn || onPressOut || onLongPress ? Ripple : Box,
  ImageComponent = ImageRN,
  size = 40,
  type = 'circle',
  style = {},
  imageProps = {},
  ...restTouchProps
}) => {
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
    return colors[textColor] || textColor;
  }, [textColor, colors]);

  const borderRadiusElement = type === 'circle' ? 100 : 1;
  const sourceImage = typeof src === 'string' ? { uri: src } : src;

  const internalPaddingImage = !bordered ? 0 : size * 0.15;

  return (
    <Component
      width={size}
      height={size}
      borderRadius={borderRadiusElement}
      bg={innerBorderColorResolve}
      style={StyleSheet.flatten([
        styles.container,
        bordered && {
          borderWidth: 2,
          borderStyle: 'solid',
          borderColor: borderColorResolve
        },
        style
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
        style={StyleSheet.flatten([
          styles.container,
          !bordered && {
            padding: internalPaddingImage
          }
        ])}
      >
        {isShowText ? (
          <Text
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
          />
        ) : (
          <Image
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
              imageProps && imageProps.style
            ])}
            ImageComponent={ImageComponent}
          />
        )}
      </Box>
    </Component>
  );
};

const styles = StyleSheet.create({
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
