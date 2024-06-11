import React, { forwardRef, PropsWithChildren } from 'react';
import { View, ViewProps } from 'react-native';

import { BaseProps } from '../../@types/base';
import { getSxStyleAndProps } from '../../lib/sx';
import useTheme from '../../context/theme/useTheme';

export type BoxProps = PropsWithChildren<BaseProps & Omit<ViewProps, 'style'>>;

export const Box = forwardRef<View, BoxProps>(
  ({ children, ...sxProps }, ref) => {
    const theme = useTheme();

    const sxResult = getSxStyleAndProps(sxProps, theme);

    return (
      <View ref={ref} {...sxResult.props} style={sxResult.style}>
        {children}
      </View>
    );
  }
);
