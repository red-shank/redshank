import { ReactElement } from 'react';
import { SizeType } from '../../@types/input';
import { ColorType } from '../../context/theme/types';
import { SxProps } from '../../lib/styleDictionary';
declare type RadioType = 'circle' | 'square';
export declare type NumberStringValue = string | number;
export interface RadioProps {
    activeColor?: ColorType;
    inactiveColor?: ColorType;
    isActive?: boolean;
    label: string;
    onPress?: (value: NumberStringValue) => void;
    size?: SizeType;
    type?: RadioType;
    value: NumberStringValue;
    sx?: SxProps;
}
declare type AlignType = 'horizontal' | 'vertical';
export interface RadioGroupProps {
    activeColor?: ColorType;
    align?: AlignType;
    children?: ReactElement<RadioProps> | ReactElement<RadioProps>[];
    inactiveColor?: ColorType;
    defaultValue?: NumberStringValue;
    error?: boolean;
    onChange?: (key: NumberStringValue) => void;
    textError?: string;
    value?: NumberStringValue;
    size?: SizeType;
    type?: RadioType;
    sx?: SxProps;
}
export {};
