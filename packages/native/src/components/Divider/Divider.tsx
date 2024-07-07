import React from 'react';
import useTheme from '../../context/theme/useTheme';
import { Box } from '../Box';
import { SxProps } from '../../lib/styleDictionary';

export type DividerProps = SxProps;

export function Divider(sx: DividerProps) {
  const theme = useTheme();

  return <Box height={theme.borderWidth} bg="border" sx={sx} />;
}
