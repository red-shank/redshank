import React, { PropsWithChildren } from 'react';
import { BaseProps } from '../../@types/base';
export declare type CenterProps = PropsWithChildren<Omit<BaseProps, 'alignItems' | 'justifyContent'>>;
export declare function Center({ children, ...rest }: CenterProps): React.JSX.Element;
