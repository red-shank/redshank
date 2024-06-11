import React, { PropsWithChildren } from 'react';
import { BaseProps } from '../../@types/base';
import { Box } from '../Box';

export type CenterProps = PropsWithChildren<
  Omit<BaseProps, 'alignItems' | 'justifyContent'>
>;

export function Center({ children, ...rest }: CenterProps) {
  return (
    <Box
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      {...rest}
    >
      {children}
    </Box>
  );
}
