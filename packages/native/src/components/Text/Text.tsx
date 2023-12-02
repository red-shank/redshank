import React, { FC, useState } from 'react';
import { StyleSheet, Text as TextNative, View } from 'react-native';

import { Button } from '../Button';
import useTheme from '../../context/theme/useTheme';
import type { TextProps } from './types';

export const Text: FC<TextProps> = ({
  children,
  lines,
  lineHeight,
  fontWeight,
  margin,
  marginTop,
  marginBottom,
  marginVertical,
  marginHorizontal,
  transform = 'none',
  size = 'base',
  color = 'text',
  readMore = false,
  textReadMore = 'Read more!',
  textReadLess = 'Read less!',
  align = 'left',
  bold = false,
  underline = false,
  italic = false,
  containerStyle = {},
  style = {},
  readMoreButtonProps = {},
  ...rest
}) => {
  const { colors, fonts, fontSizes } = useTheme();
  const [showMore, setShowMore] = useState<boolean>(false);

  const changeShowMore = () => {
    setShowMore((prev) => !prev);
  };

  const font = bold ? 'bold' : 'regular';

  return (
    <View style={StyleSheet.flatten([containerStyle, styles.container])}>
      <TextNative
        {...rest}
        numberOfLines={showMore ? 0 : lines}
        style={StyleSheet.flatten([
          {
            margin,
            marginTop,
            marginBottom,
            marginVertical,
            marginHorizontal,
            fontFamily: fonts[font].fontFamily,
            fontWeight: fontWeight || fonts[font].fontWeight,
            textAlign: align,
            fontSize: fontSizes[size] || size,
            color: colors[color] || color,
          },
          lineHeight && {
            lineHeight: fontSizes[size] ? fontSizes[size] + 4 : size,
          },
          transform !== 'none' && styles[transform],
          italic && styles.italic,
          underline && styles.underline,
          style,
        ])}
      >
        {children}
      </TextNative>
      {readMore && (
        <Button
          type="link"
          onPress={changeShowMore}
          {...readMoreButtonProps}
          style={StyleSheet.flatten([
            readMoreButtonProps?.style,
            styles.readMore,
          ])}
        >
          {showMore ? textReadLess : textReadMore}
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  italic: {
    fontStyle: 'italic',
  },
  underline: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  lowercase: {
    textTransform: 'lowercase',
  },
  readMore: {
    marginRight: 0,
    marginLeft: 'auto',
  },
});
