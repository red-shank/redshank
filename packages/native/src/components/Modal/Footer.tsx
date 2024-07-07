import React from 'react';
import useTheme from '../../context/theme/useTheme';

import { ModalFooterProps } from './types';
import { Box } from '../Box';
import { getSxStyleAndProps } from '../../lib/sx';

export const Footer: React.FC<ModalFooterProps> = ({
  children,
  style,
  sx,
  ...restProps
}) => {
  const theme = useTheme();
  const resolveProps = getSxStyleAndProps(
    {
      roundedBottom: theme.borderRadius.modal,
      p: 3,
      bg: 'modal',
      borderStyle: 'solid',
      borderTopWidth: 1,
      borderTopColor: 'border',
      borderBottomColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      sx,
      style,
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
