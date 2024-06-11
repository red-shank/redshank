import React from 'react';
import { ScrollView as NScrollView, ScrollViewProps as RNScrollViewProps } from 'react-native';
import { SxProps } from '../../lib/styleDictionary';
export declare type ScrollViewProps = RNScrollViewProps & {
    sx?: SxProps;
    contentContainerSx?: SxProps;
};
export declare const ScrollView: React.ForwardRefExoticComponent<RNScrollViewProps & {
    sx?: SxProps;
    contentContainerSx?: SxProps;
} & React.RefAttributes<NScrollView>>;
