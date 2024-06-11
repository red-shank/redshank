import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { SizeType } from '../../@types/input';
export interface TextAreaProps {
    numberOfLines?: number;
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    isDisabled?: boolean;
    color?: string;
    background?: string;
    minHeight?: number;
    textError?: string;
    error?: boolean;
    borderInputColor?: string;
    placeholderColor?: string;
    size?: SizeType;
    onChange?: (v: string) => void;
    style?: StyleProp<TextStyle>;
    [key: string]: unknown;
}
export declare const TextArea: React.FC<TextAreaProps>;
