import React, { FC, useState } from 'react';
import { StyleSheet, Text as TextNative, View } from 'react-native';

import { Button } from '../Button';
import useTheme from '../../context/theme/useTheme';
import type { TextProps } from './types';
import createSxStyle from '../../lib/sx';

export const Text: FC<TextProps> = ({
  children,
  lines,
  fontWeight,
  lineHeight,
  fontSize,
  sx,
  transformText = 'none',
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
  ...restSxProps
}) => {
  const theme = useTheme();
  const { fonts, fontSizes } = useTheme();
  const [showMore, setShowMore] = useState<boolean>(false);

  const changeShowMore = () => {
    setShowMore((prev) => !prev);
  };

  const font = bold ? 'bold' : 'regular';

  return (
    <View style={StyleSheet.flatten([containerStyle, styles.container])}>
      <TextNative
        numberOfLines={showMore ? 0 : lines}
        style={StyleSheet.flatten([
          transformText !== 'none' && styles[transformText],
          italic && styles.italic,
          underline && styles.underline,
          {
            fontSize: fontSizes[size] || size
          },
          lineHeight && {
            lineHeight: lineHeight
          },
          createSxStyle(
            {
              ...restSxProps,
              fontFamily: fonts[font].fontFamily,
              fontWeight: fontWeight || fonts[font].fontWeight,
              textAlign: align,
              color,
              style,
              sx
            },
            theme
          )
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
            styles.readMore
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
    position: 'relative'
  },
  italic: {
    fontStyle: 'italic'
  },
  underline: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through'
  },
  uppercase: {
    textTransform: 'uppercase'
  },
  capitalize: {
    textTransform: 'capitalize'
  },
  lowercase: {
    textTransform: 'lowercase'
  },
  readMore: {
    marginRight: 0,
    marginLeft: 'auto'
  }
});
