import React from 'react';
import { StyleSheet, Text, Image as ImageRN, View } from 'react-native';
import useTheme from '../../context/theme/useTheme';
import { Image } from '../Image';
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
  showCountText = 2,
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
  bordered = !!borderColor,
  Component = onPress || onPressIn || onPressOut || onLongPress ? Ripple : View,
  ImageComponent = ImageRN,
  size = 40,
  type = 'circle',
  style = {},
  imageProps = {},
  ...restTouchProps
}) => {
  const { borderRadius, colors } = useTheme();

  const isShowText = !src && Boolean(text);
  // get text for show
  const textShow = isShowText ? getTextForAvatar(text, showCountText) : '';

  const baseSize = size - (showCountText === 1 ? 12 : 8);
  const fontSize = baseSize / (textShow?.length ?? 1);

  const innerBorderColorResolve = React.useMemo(() => {
    if (bordered) {
      return innerBorderColor
        ? colors[innerBorderColor] ?? innerBorderColor
        : colors.background;
    }
    return 'transparent';
  }, [colors, bordered, innerBorderColor]);

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

  const borderRadiusElement = type === 'circle' ? size / 2 : borderRadius.lg;
  const sourceImage = typeof src === 'string' ? { uri: src } : src;

  const internalPaddingImage = !bordered ? 0 : size * 0.15;

  return (
    <Component
      style={StyleSheet.flatten([
        styles.container,
        { width: size, height: size },
        {
          borderRadius: borderRadiusElement,
          backgroundColor: innerBorderColorResolve
        },
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
      <View
        style={StyleSheet.flatten([
          styles.container,
          {
            overflow: 'hidden',
            backgroundColor: _backgroundColor,
            padding: internalPaddingImage,
            borderRadius: borderRadiusElement,
            width: bordered ? size - internalPaddingImage : size,
            height: bordered ? size - internalPaddingImage : size
          }
        ])}
      >
        {isShowText ? (
          <Text
            style={StyleSheet.flatten([
              { color: colorText || getColorForBackground(_backgroundColor) },
              {
                fontSize: fontSize,
                lineHeight: fontSize + 7
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
      </View>
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
