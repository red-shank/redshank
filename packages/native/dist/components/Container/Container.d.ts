import React, { PropsWithChildren } from 'react';
import { BaseProps } from '../../@types/base';
import { FontSizesProps } from '../../context/theme/types';
export declare type ContainerSize = Pick<FontSizesProps, 'xs' | 'sm' | 'md' | 'lg' | 'xl'>;
export declare type ContainerProps = PropsWithChildren<Omit<BaseProps, 'flexDirection' | 'justifyContent'> & {
    size?: keyof ContainerSize;
}>;
export declare function Container({ children, size, ...rest }: ContainerProps): React.JSX.Element;
