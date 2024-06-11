import React from 'react';
import { Box } from '../Box';
const paddingSizes = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5
};
export function Container({ children, size = 'sm', ...rest }) {
    return (<Box {...rest} px={paddingSizes[size]}>
      {children}
    </Box>);
}
