import type { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
declare type PopConfirmType = 'default' | 'delete';
export declare type PopConfirmProps = {
    cancelText?: string;
    children?: ReactNode;
    extra?: ReactNode;
    okText?: string;
    onClose: () => void;
    onOk?: () => void;
    type?: PopConfirmType;
    visible?: boolean;
};
export declare type PropHeaderProps = {
    description: string;
    image?: ReactNode;
    style?: StyleProp<ViewStyle>;
    title: string;
};
export declare type PropContentProps = {
    children?: ReactNode;
    style?: StyleProp<ViewStyle>;
    withBorder?: boolean;
};
export declare type PropFooterProps = {
    children?: ReactNode;
    noPadding?: boolean;
    style?: StyleProp<ViewStyle>;
    withBorder?: boolean;
};
export {};
