import React from 'react';
import useTheme from '../../context/theme/useTheme';
import { Text } from '../Text';
export const Title = ({ children, style, font = 'bold', level = 1, ...restTextProps }) => {
    const { titleFontSizes, fonts } = useTheme();
    return (<Text style={style} fontFamily={fonts[font].fontFamily} fontWeight={fonts[font].fontWeight} size={titleFontSizes[`level${level}`]} {...restTextProps}>
      {children}
    </Text>);
};
