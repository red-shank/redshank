import React from 'react';
import { Box } from '../Box';
export function Center({ children, ...rest }) {
    return (<Box alignItems="center" flexDirection="column" justifyContent="center" {...rest}>
      {children}
    </Box>);
}
