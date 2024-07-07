import React from 'react';
import { StyleSheet } from 'react-native';

import useTheme from '../../context/theme/useTheme';
import { getOpacity } from '../../utils/colors';
import type { CardFooterProps } from './types';
import { Box } from '../Box';
import createSxStyle from '../../lib/sx';

const Footer: React.FC<CardFooterProps> = ({
  children,
  Component = Box,
  withBackground,
  isAbsolute = false,
  right,
  bottom = 0,
  left = 0,
  sx,
  background = isAbsolute ? 'card' : undefined,
  style = {},
  ...restProps
}) => {
  const theme = useTheme();

  const backgroundColor = React.useMemo(() => {
    if (!withBackground) {
      return 'transparent';
    }
    if (!background) {
      return background;
    }

    const color = theme.colors.get(background);
    if (isAbsolute) {
      return getOpacity(color, 0.6);
    }
    return color;
  }, [background, theme.colors, isAbsolute, withBackground]);

  return (
    <>
      <Component
        activeOpacity={theme.activeOpacity}
        zIndex={2}
        p={2}
        borderBottom={2}
        bg={backgroundColor}
        position={isAbsolute ? 'absolute' : 'relative'}
        style={createSxStyle(
          {
            sx,
            style: [
              styles.wrapper,
              isAbsolute && {
                bottom,
                left,
                right
              },
              style
            ]
          },
          theme
        )}
        {...restProps}
      >
        {children}
      </Component>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%'
  }
});

export default React.memo(Footer);
