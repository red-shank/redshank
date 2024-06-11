import type { ColorType } from '../../context/theme/types';
export declare type RadioType = 'circle' | 'square';
export declare type SizeRadioType = 'small' | 'middle' | 'large';
export interface CheckboxProps {
    activeColor?: ColorType;
    inactiveColor?: ColorType;
    defaultValue?: boolean;
    error?: boolean;
    label: string;
    onChange?: (value: boolean) => void;
    required?: boolean;
    size?: SizeRadioType;
    type?: RadioType;
    value?: boolean;
}
