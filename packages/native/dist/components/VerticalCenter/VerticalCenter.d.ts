import React, { PropsWithChildren } from 'react';
import { BaseProps } from '../../@types/base';
import { View } from 'react-native';
export declare type VerticalCenterProps = PropsWithChildren<Omit<BaseProps, 'flexDirection' | 'justifyContent'>>;
export declare const VerticalCenter: React.ForwardRefExoticComponent<Omit<BaseProps, "flexDirection" | "justifyContent"> & {
    children?: React.ReactNode;
} & React.RefAttributes<View>>;
