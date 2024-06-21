import React, { PropsWithChildren } from 'react';
import { BaseProps } from '../../@types/base';
import { Box } from '../Box';
import { FontSizesProps } from '../../context/theme/types';
import { SxProps } from '../../lib/styleDictionary';

export type ContainerSize = Pick<
  FontSizesProps,
  'xs' | 'sm' | 'md' | 'lg' | 'xl'
>;

export type ContainerProps = PropsWithChildren<
  Omit<BaseProps, 'flexDirection' | 'justifyContent' | 'sx'> & {
    size?: keyof ContainerSize;
    sx?: SxProps;
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
    <Box height="100%" width="100%" p={paddingSizes[size]} {...rest}>
      {children}
    </Box>
  );
}
