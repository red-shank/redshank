import React from 'react';
import { StyleSheet } from 'react-native';

import useTheme from '../../context/theme/useTheme';
import { getOpacity } from '../../utils/colors';
import { useCardProvider } from './Context';

import type { CardHeaderProps } from './types';
import { Box } from '../Box';
import createSxStyle from '../../lib/sx';

const Header: React.FC<CardHeaderProps> = ({
  children,
  Component = Box,
  isAbsolute = false,
  withBackground = false,
  background = 'card',
  right,
  top = 0,
  left = 0,
  sx,
  style = {},
  ...restProps
}) => {
  const { isOpen, statusBarHeight } = useCardProvider();
  const theme = useTheme();
  const { colors, zIndices } = theme;

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
    <Component
      style={createSxStyle(
        {
          sx,
          style: StyleSheet.flatten([
            styles.wrapper,
            {
              zIndex: zIndices['2'],
              padding: 20,
              backgroundColor,
              position: isAbsolute ? 'absolute' : 'relative',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20
            },
            isAbsolute && {
              top,
              left,
              right
            },
            isOpen && { paddingTop: statusBarHeight },
            style
          ])
        },
        theme
      )}
      {...restProps}
    >
      {children}
    </Component>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%'
  }
});

export default React.memo(Header);
