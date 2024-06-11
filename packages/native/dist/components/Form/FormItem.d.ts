import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import type { FieldProps } from 'rc-field-form/lib/Field';
export interface FormItemProps extends FieldProps {
    label?: string;
    required?: boolean;
    isSubmit?: boolean;
    style?: StyleProp<ViewStyle>;
}
export declare const FormItem: ({ label, required, name, children, style, isSubmit, rules, ...rest }: FormItemProps) => React.JSX.Element;
