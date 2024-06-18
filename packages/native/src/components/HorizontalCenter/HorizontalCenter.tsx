import { View } from 'react-native';
import React, { forwardRef, PropsWithChildren } from 'react';
import { BaseProps } from '../../@types/base';
import { Box } from '../Box';

export type HorizontalCenterProps = PropsWithChildren<
  Omit<BaseProps, 'flexDirection' | 'alignItems'>
>;

export const HorizontalCenter = forwardRef<View, HorizontalCenterProps>(
  ({ children, flex = 1, ...rest }, ref) => {
    return (
      <Box
        flex={flex}
        flexDirection="column"
        alignItems="center"
        ref={ref}
        {...rest}
      >
        {children}
      </Box>
    );
  }
);
