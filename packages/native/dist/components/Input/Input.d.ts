import React from 'react';
import { TextInput } from 'react-native';
import type { InputProps } from './types';
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<TextInput>>;
export declare const styles: {
    wrapper: {
        width: "100%";
        position: "relative";
    };
    withBorder: {
        marginBottom: number;
    };
    input: {
        paddingRight: number;
        paddingLeft: number;
    };
    wrapperIcon: {
        position: "absolute";
        width: number;
        height: "100%";
        bottom: number;
        alignItems: "center";
        justifyContent: "center";
        backgroundColor: string;
        zIndex: number;
    };
    icon: {};
};
