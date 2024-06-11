import React, { forwardRef } from 'react';
import { View } from 'react-native';
import { getSxStyleAndProps } from '../../lib/sx';
import useTheme from '../../context/theme/useTheme';
export const Box = forwardRef(({ children, ...sxProps }, ref) => {
    const theme = useTheme();
    const sxResult = getSxStyleAndProps(sxProps, theme);
    return (<View ref={ref} {...sxResult.props} style={sxResult.style}>
        {children}
      </View>);
});
