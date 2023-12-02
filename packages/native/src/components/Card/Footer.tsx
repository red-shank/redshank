import React from 'react';
import { StyleSheet, View } from 'react-native';

import useTheme from '../../context/theme/useTheme';
import { getOpacity } from '../../utils/colors';
import type { CardFooterProps } from './types';
import { useCardProvider } from './Context';

const Footer: React.FC<CardFooterProps> = ({
  children,
  Component = View,
  withBackground,
  isAbsolute = false,
  right,
  bottom = 0,
  left = 0,
  background = isAbsolute ? 'card' : undefined,
  style = {},
  ...restProps
}) => {
  const { isOpen, expandContent } = useCardProvider();
  const { colors, activeOpacity, borderRadius, zIndices, paddingSizes } =
    useTheme();

  const backgroundColor = React.useMemo(() => {
    if (!withBackground) {
      return 'transparent';
    }
    if (!background) {
      return background;
    }

    const color = colors[background] || background;
    if (isAbsolute) {
      return getOpacity(color, 0.6);
    }
    return color;
  }, [background, colors, isAbsolute, withBackground]);

  return (
    <>
      <Component
        activeOpacity={activeOpacity}
        style={StyleSheet.flatten([
          styles.wrapper,
          {
            zIndex: zIndices['2'],
            padding: paddingSizes.card,
            backgroundColor,
            position: isAbsolute ? 'absolute' : 'relative',
            borderBottomLeftRadius: borderRadius.card,
            borderBottomRightRadius: borderRadius.card,
          },
          isAbsolute && {
            bottom,
            left,
            right,
          },
          style,
        ])}
        {...restProps}
      >
        {children}
      </Component>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
});

export default React.memo(Footer);
