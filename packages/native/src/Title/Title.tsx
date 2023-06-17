import React from 'react';
import { Text, TextProps, StyleSheet, DimensionValue } from 'react-native';

import useTheme from '../Context/theme/useTheme';
import type { ColorType, FontType } from '../Context/theme/types';
import type { AlignType, LevelType, TransformType } from '../@types/typography';

export interface TitleProps extends TextProps {
  level?: LevelType;
  color?: ColorType;
  font?: FontType;
  align?: AlignType;
  marginBottom?: DimensionValue;
  transform?: TransformType;
}

export const Title: React.FC<TitleProps> = ({
  children,
  font = 'bold',
  color = 'text',
  align = 'left',
  transform = 'none',
  level = 1,
  marginBottom = stylesLevel[level].marginBottom,
  style = {},
  ...restTextProps
}) => {
  const { colors, titleFontSizes, fonts } = useTheme();

  return (
    <Text
      style={StyleSheet.flatten([
        {
          marginBottom,
          fontSize: titleFontSizes[`level${level}`],
          fontFamily: fonts[font].fontFamily,
          fontWeight: fonts[font].fontWeight,
          textAlign: align,
          textTransform: transform,
          color: colors[color] || color,
        },
        style,
      ])}
      {...restTextProps}
    >
      {children}
    </Text>
  );
};

const stylesLevel = StyleSheet.create({
  1: {
    marginBottom: 20,
  },
  2: {
    marginBottom: 15,
  },
  3: {
    marginBottom: 10,
  },
  4: {
    marginBottom: 5,
  },
  5: {
    marginBottom: 0,
  },
});
