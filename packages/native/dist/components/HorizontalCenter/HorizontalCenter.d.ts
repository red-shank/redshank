import { View } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { BaseProps } from '../../@types/base';
export declare type HorizontalCenterProps = PropsWithChildren<Omit<BaseProps, 'flexDirection' | 'alignItems'>>;
export declare const HorizontalCenter: React.ForwardRefExoticComponent<Omit<BaseProps, "flexDirection" | "alignItems"> & {
    children?: React.ReactNode;
} & React.RefAttributes<View>>;
