import React from 'react';
import { PropsWithChildren } from 'react';
import { FormValidations } from '../types/validations.type';
import { FieldValues } from 'react-hook-form';
type ValidationsContextProps<TFieldValues extends FieldValues = FieldValues> = {
    validations: FormValidations<TFieldValues>;
    getValidation: (name: unknown) => undefined | FormValidations<any>;
};
export declare function ValidationsProvider<TFieldValues extends FieldValues = FieldValues>({ children, validations }: PropsWithChildren<Partial<Pick<ValidationsContextProps<TFieldValues>, 'validations'>>>): React.JSX.Element;
export declare function useValidations<TFieldValues extends FieldValues = FieldValues>(): ValidationsContextProps<TFieldValues>;
export {};
