import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
declare type BaseProps = {
    Component: any;
    children: React.ReactNode;
    style: StyleProp<ViewStyle>;
    activeOpacity: number;
    onPress?: (e?: any) => void;
    [key: string]: any;
};
declare const _default: React.NamedExoticComponent<BaseProps>;
export default _default;
