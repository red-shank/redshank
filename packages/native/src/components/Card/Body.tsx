import React from 'react';
import { StyleSheet } from 'react-native';

import useTheme from '../../context/theme/useTheme';
import { useCardProvider } from './Context';
import type { CardBodyProps } from './types';
import { Box } from '../Box';
import createSxStyle from '../../lib/sx';

const Body: React.FC<CardBodyProps> = ({
  children,
  Component = Box,
  withPadding,
  sx,
  style = {},
  ...restProps
}) => {
  const { isOpen } = useCardProvider();
  const theme = useTheme();

  return (
    <Component
      activeOpacity={theme.activeOpacity}
      style={createSxStyle(
        {
          sx,
          style: StyleSheet.flatten([
            styles.wrapper,
            {
              padding: isOpen || !withPadding ? 0 : 16
            },
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

export default React.memo(Body);
