import React from 'react';
import { StyleSheet, View } from 'react-native';

import useTheme from '../../context/theme/useTheme';
import type { CardDividerProps } from './types';
import { Box } from '../Box';

const Divider: React.FC<CardDividerProps> = ({
  height = 1,
  background = 'border',
  style = {},
  sx
}) => {
  const { colors } = useTheme();

  return (
    <Box
      sx={sx}
      style={StyleSheet.flatten([
        {
          height: height,
          backgroundColor: colors[background] || background
        },
        style
      ])}
    />
  );
};

export default Divider;
