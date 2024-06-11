import React, { forwardRef } from 'react';
import { Box } from '../Box';
export const VerticalCenter = forwardRef(({ children, ...rest }, ref) => {
    return (<Box flexDirection="column" justifyContent="center" ref={ref} {...rest}>
        {children}
      </Box>);
});
