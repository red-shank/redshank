import React from 'react';
import useTheme from '../../context/theme/useTheme';

import { MenuDividerProps } from './types';
import { Box } from '../Box';
import { getSxStyleAndProps } from '../../lib/sx';

export const Divider: React.FC<MenuDividerProps> = ({
  children,
  sx,
  ...restProps
}) => {
  const theme = useTheme();
  const resolveProps = getSxStyleAndProps(
    {
      width: '100%',
      backgroundColor: theme.colors.get('border'),
      sx,
      ...restProps,
      style: {
        paddingTop: 1
      }
    },
    theme
  );

  return (
    <Box {...resolveProps.props} style={resolveProps.style}>
      {children}
    </Box>
  );
};
