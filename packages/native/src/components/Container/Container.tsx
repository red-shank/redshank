import { PropsWithChildren } from 'react';
import { BaseProps } from '../../@types/base';
import { Box } from '../Box';
import { FontSizesProps } from '../../context/theme/types';

export type ContainerSize = Pick<
  FontSizesProps,
  'xs' | 'sm' | 'md' | 'lg' | 'xl'
>;

export type ContainerProps = PropsWithChildren<
  Omit<BaseProps, 'flexDirection' | 'justifyContent'> & {
    size?: keyof ContainerSize;
  }
>;

const paddingSizes: ContainerSize = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
  xl: 5
};

export function Container({ children, size = 'sm', ...rest }: ContainerProps) {
  return (
    <Box {...rest} px={paddingSizes[size]}>
      {children}
    </Box>
  );
}
