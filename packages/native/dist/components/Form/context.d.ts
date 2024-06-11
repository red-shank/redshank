import React from 'react';
import { FormInstance } from 'rc-field-form';
interface ErrorProps {
    error: string;
    name: string;
}
interface ErrorContextProps {
    errors: ErrorProps[];
    marginBottom: number;
    setErrors: (e: ErrorProps[]) => void;
    removeError: (name: string) => void;
    internalForm?: FormInstance;
}
export declare type InternalFormInstance = FormInstance & {
    setErrors?: (Errors: ErrorProps[]) => void;
};
declare type FormInternalContext = {
    children: React.ReactNode;
    marginBottom?: number;
    form?: InternalFormInstance;
};
export declare const FormContext: React.Context<ErrorContextProps>;
export declare const FormProvider: ({ children, form, marginBottom, }: FormInternalContext) => React.JSX.Element;
export declare const useFormProvider: () => ErrorContextProps;
export {};
