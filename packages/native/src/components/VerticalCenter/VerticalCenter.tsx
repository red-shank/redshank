import React, { forwardRef, PropsWithChildren } from 'react';
import { BaseProps } from '../../@types/base';
import { Box } from '../Box';
import { View } from 'react-native';

export type VerticalCenterProps = PropsWithChildren<
  Omit<BaseProps, 'flexDirection' | 'justifyContent'>
>;

export const VerticalCenter = forwardRef<View, VerticalCenterProps>(
  ({ children, ...rest }, ref) => {
    return (
      <Box flexDirection="column" justifyContent="center" ref={ref} {...rest}>
        {children}
      </Box>
    );
  }
);
