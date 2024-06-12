import React, { FC, useState } from 'react';
import { StyleSheet, Text as TextNative } from 'react-native';

import { Button } from '../Button';
import useTheme from '../../context/theme/useTheme';
import type { TextProps } from './types';
import createSxStyle from '../../lib/sx';
import { Box } from '../Box';

export const Text: FC<TextProps> = ({
  children,
  lines,
  fontWeight,
  lineHeight,
  fontSize,
  sx,
  styles,
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
    <Box sx={styles?.root} position="relative">
      <TextNative
        numberOfLines={showMore ? 0 : lines}
        style={StyleSheet.flatten([
          transformText !== 'none' && _styles[transformText],
          italic && _styles.italic,
          underline && _styles.underline,
          {
            fontSize: fontSizes[size] || size || fontSize
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
              sx: {
                ...sx,
                ...styles?.text
              }
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
            _styles.readMore
          ])}
        >
          {showMore ? textReadLess : textReadMore}
        </Button>
      )}
    </Box>
  );
};

const _styles = StyleSheet.create({
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
