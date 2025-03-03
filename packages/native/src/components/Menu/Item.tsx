import React from 'react';
import useTheme from '../../context/theme/useTheme';

import type { MenuItemProps } from './types';
import { Box } from '../Box';
import { getSxStyleAndProps } from '../../lib/sx';

export const Item: React.FC<MenuItemProps> = ({ ...restProps }) => {
  const theme = useTheme();
  const resolveProps = getSxStyleAndProps(
    {
      p: 3,
      bg: 'modal',
      borderStyle: 'solid',
      borderBottomWidth: theme.borderWidth,
      borderColor: 'border',
      roundedTop: 'modal',
      ...restProps
    },
    theme
  );

  return (
    <Box {...resolveProps.props} style={resolveProps.style}>
      {null}
    </Box>
  );
};
