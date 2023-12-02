import { PropsWithChildren } from 'react';
import { BaseProps } from '../../@types/base';
import { Box } from '../Box';

export type HorizontalCenterProps = PropsWithChildren<
  Omit<BaseProps, 'flexDirection' | 'alignItems'>
>;

export function HorizontalCenter({ children, ...rest }: HorizontalCenterProps) {
  return (
    <Box flexDirection="column" alignItems="center" {...rest}>
      {children}
    </Box>
  );
}
