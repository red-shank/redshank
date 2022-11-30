import React from 'react';
import { scale } from 'react-native-size-matters';
import {
  TouchableOpacityProps,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image as ImageRN,
  StyleProp,
  TextStyle,
  View,
} from 'react-native';
import { IconObject } from '../Icon';
import useTheme from '../Context/theme/useTheme';
import { ImageProps, Image } from '../Image';
import { ImageSrcType } from '../@types/image';
import {
  getColorForBackground,
  getRandomColor,
  getTextForAvatar,
} from '../utils';

type AvatarIcon = IconObject & {
  iconStyle?: StyleProp<TextStyle>;
};

export interface AvatarProps extends Omit<TouchableOpacityProps, 'children'> {
  size?: number;
  type?: 'circle' | 'square';
  text?: string;
  showCountText?: number | 'all';
  color?: string;
  textColor?: string;
  src?: ImageSrcType;
  icon?: AvatarIcon;
  iconStyle?: StyleProp<TextStyle>;
  imageProps?: Partial<ImageProps>;
  ImageComponent?: React.ComponentClass;
  Component?: React.FunctionComponent | React.ComponentClass;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  text,
  showCountText = 2,
  textColor,
  color,
  icon,
  iconStyle,
  Component = View,
  ImageComponent = ImageRN,
  size = 40,
  type = 'circle',
  style = {},
  imageProps = {},
  ...restTouchProps
}) => {
  const { borderRadius, colors } = useTheme();

  const hidePlaceholder = !src;
  // get text for show
  const textShow = hidePlaceholder ? getTextForAvatar(text, showCountText) : '';

  const fontSize = (size - 8) / (textShow?.length ?? 1);

  const backgroundColor = React.useMemo(() => {
    return colors[color] ?? getRandomColor();
  }, [color, colors]);

  const colorText = React.useMemo<string | undefined>(() => {
    return colors[textColor];
  }, [textColor, colors]);

  const borderRadiusElement = type === 'circle' ? size / 2 : borderRadius.lg;
  const sourceImage = typeof src === 'string' ? { uri: src } : src;

  return (
    <Component
      style={StyleSheet.flatten([
        styles.container,
        { width: scale(size), height: scale(size) },
        { backgroundColor: backgroundColor },
        { borderRadius: borderRadiusElement },
        style,
      ])}
      {...restTouchProps}
    >
      {hidePlaceholder ? (
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
      ) : (
        <Image
          source={sourceImage}
          resizeMode="cover"
          {...imageProps}
          style={StyleSheet.flatten([
            { width: scale(size), height: scale(size) },
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
