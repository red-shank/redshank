import React from 'react';
import useTheme from '../../context/theme/useTheme';

import type { ModalHeaderProps } from './types';
import { Box } from '../Box';
import { getSxStyleAndProps } from '../../lib/sx';

export const Header: React.FC<ModalHeaderProps> = ({
  children,
  style,
  sx,
  ...restProps
}) => {
  const theme = useTheme();
  const resolveProps = getSxStyleAndProps(
    {
      p: 3,
      bg: 'modal',
      borderStyle: 'solid',
      borderBottomWidth: theme.borderWidth,
      borderColor: 'border',
      roundedTop: 'modal',
      style,
      sx,
      ...restProps
    },
    theme
  );

  return (
    <Box {...resolveProps.props} style={resolveProps.style}>
      {children}
    </Box>
  );
};
