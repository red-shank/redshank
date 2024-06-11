import React, { forwardRef } from 'react';
import { Box } from '../Box';
export const HorizontalCenter = forwardRef(({ children, ...rest }, ref) => {
    return (<Box flexDirection="column" alignItems="center" ref={ref} {...rest}>
        {children}
      </Box>);
});
