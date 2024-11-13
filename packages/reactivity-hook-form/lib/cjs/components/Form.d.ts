import { ComponentProps, ReactNode } from 'react';
import { FieldValues, SubmitHandler, UseFormProps, UseFormReturn } from 'react-hook-form';
import { FormDependencies } from '../types/dependencies.type';
import { FormValidations } from '../types/validations.type';
import { FormOptions } from '../context/FormOptions';
type FormProps<TFieldValues extends FieldValues = FieldValues> = UseFormProps<TFieldValues> & Partial<FormOptions> & Omit<ComponentProps<'form'>, 'onSubmit'> & {
    children: ReactNode;
    formId?: string;
    gap?: number;
    dependencies?: FormDependencies<TFieldValues>;
    validations?: FormValidations<TFieldValues>;
    onSubmit?: SubmitHandler<TFieldValues>;
    formContext?: UseFormReturn<TFieldValues>;
};
declare const Form: <TFieldValues extends FieldValues = FieldValues>(props: FormProps<TFieldValues>) => JSX.Element;
export default Form;
