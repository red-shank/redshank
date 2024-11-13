import React, { ReactNode, ComponentProps } from 'react';
import { ControllerProps as RHFControllerProps, FieldValues, UseFormReturn, ControllerRenderProps, ControllerFieldState, UseFormStateReturn } from 'react-hook-form';
import { FieldPath, FieldPathValue } from 'react-hook-form/dist/types';
type ControllerProps<TFieldValues extends FieldValues = FieldValues> = Omit<RHFControllerProps<TFieldValues>, 'render' | 'control'>;
export type FieldAccessoryProps<TFieldValues extends FieldValues = FieldValues> = {
    field: ControllerRenderProps<TFieldValues, FieldPath<TFieldValues>>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<TFieldValues>;
};
type InputFieldProps<TFieldValues extends FieldValues = FieldValues> = Omit<ControllerProps<TFieldValues>, 'onChange'> & Omit<ComponentProps<'div'>, 'children' | 'onChange'> & {
    children: React.ReactElement<{
        cyName: string;
        value: TFieldValues | unknown;
        checked: TFieldValues | unknown;
        helperText?: string;
        focused?: boolean;
        error?: boolean;
        onChange?: InputFieldProps<TFieldValues>['onChange'];
    }>;
    label?: ReactNode;
    labelProps?: Omit<React.ComponentProps<'label'>, 'children'>;
    injectPropsField?: string[];
    getValue?: (value: FieldPathValue<TFieldValues, FieldPath<TFieldValues>>) => unknown;
    sanitize?: (props: FieldAccessoryProps<TFieldValues>) => {
        [key: string]: unknown;
    };
    onChange?: (event: any, props: FieldAccessoryProps<TFieldValues> & {
        context: UseFormReturn<TFieldValues>;
    }) => void;
};
export type RenderFieldProps<TFieldValues extends FieldValues = FieldValues> = {
    children: (context: UseFormReturn<TFieldValues>) => React.ReactElement;
    name?: never;
    rules?: never;
};
export type FieldProps<TFieldValues extends FieldValues = FieldValues> = InputFieldProps<TFieldValues> | RenderFieldProps<TFieldValues>;
export declare const FormItem: <TFieldValues extends FieldValues = FieldValues>(props: FieldProps<TFieldValues>) => JSX.Element;
export {};
