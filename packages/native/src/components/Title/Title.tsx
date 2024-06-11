import React from 'react';

import useTheme from '../../context/theme/useTheme';
import type { FontType } from '../../context/theme/types';
import type { LevelType } from '../../@types/typography';
import { Text, TextProps } from '../Text';

export type TitleProps = TextProps & {
  level?: LevelType;
  font?: FontType;
};

export const Title: React.FC<TitleProps> = ({
  children,
  style,
  font = 'bold',
  level = 1,
  ...restTextProps
}) => {
  const { titleFontSizes, fonts } = useTheme();

  return (
    <Text
      style={style}
      fontFamily={fonts[font].fontFamily}
      fontWeight={fonts[font].fontWeight}
      size={titleFontSizes[`level${level}`]}
      {...restTextProps}
    >
      {children}
    </Text>
  );
};
