import React, { FC } from 'react';
import { FormProps as FormFieldProps, FormInstance } from 'rc-field-form';
import { FormItem, FormItemProps } from './FormItem';
import { InternalFormInstance } from './context';
export interface FormProps extends Omit<FormFieldProps, 'children'> {
    children?: React.ReactNode;
    marginBottom?: number;
}
interface ComponentExport {
    useForm: typeof useForm;
    Item: typeof FormItem;
}
declare const InternalFormInstance: ({ onFieldsChange, onValuesChange, form, ...props }: FormProps) => React.JSX.Element;
declare const Form: FC<FormProps> & ComponentExport;
declare function useForm<Values = any>(form?: FormInstance<Values>): [InternalFormInstance, () => void];
export { Form, FormItemProps };
