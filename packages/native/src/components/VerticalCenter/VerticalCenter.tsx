import { PropsWithChildren } from 'react';
import { BaseProps } from '../../@types/base';
import { Box } from '../Box';

export type VerticalCenterProps = PropsWithChildren<
  Omit<BaseProps, 'flexDirection' | 'justifyContent'>
>;

export function VerticalCenter({ children, ...rest }: VerticalCenterProps) {
  return (
    <Box flexDirection="column" justifyContent="center" {...rest}>
      {children}
    </Box>
  );
}
