import React from 'react';
import { StyleSheet, Text, Image as ImageRN, View } from 'react-native';
import useTheme from '../Context/theme/useTheme';
import { Image } from '../Image';
import { Ripple } from '../Ripple';
import { Icon } from '../Icon';
import {
  getColorForBackground,
  getRandomColor,
  getTextForAvatar,
} from '../utils';
import { AvatarIcon, AvatarProps } from './types';

export const Avatar: React.FC<AvatarProps> = ({
  src,
  text,
  showCountText = 2,
  textColor,
  color,
  icon,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
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

  const backgroundColor = React.useMemo(() => {
    return src ? colors.accents7 : colors[color] || getRandomColor();
  }, [color, colors, src]);

  const colorText = React.useMemo<string | undefined>(() => {
    return colors[textColor] || textColor;
  }, [textColor, colors]);

  const borderRadiusElement = type === 'circle' ? size / 2 : borderRadius.lg;
  const sourceImage = typeof src === 'string' ? { uri: src } : src;

  return (
    <Component
      style={StyleSheet.flatten([
        styles.container,
        { width: size, height: size },
        { backgroundColor: backgroundColor },
        { borderRadius: borderRadiusElement },
        style,
      ])}
      // @ts-ignore
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onLongPress={onLongPress}
      {...restTouchProps}
    >
      {isShowText ? (
        <Text
          style={StyleSheet.flatten([
            { color: colorText || getColorForBackground(backgroundColor) },
            {
              fontSize: fontSize,
              lineHeight: fontSize + 7,
            },
          ])}
        >
          {textShow}
        </Text>
      ) : icon ? (
        <Icon
          color={textColor || getColorForBackground(backgroundColor)}
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
            { width: size, height: size },
            { borderRadius: borderRadiusElement },
            imageProps && imageProps.style,
          ])}
          ImageComponent={ImageComponent}
        />
      )}
    </Component>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  hiddenPlaceholderStyle: {
    backgroundColor: 'transparent',
  },
});
