import * as React from 'react';
import { createContext, PropsWithChildren, useContext } from 'react';
import { FieldPath, FieldValues } from 'react-hook-form/dist/types';
import {
  ControllerFieldState,
  ControllerRenderProps,
  UseFormStateReturn
} from 'react-hook-form';

export type FieldAccessoryProps<
  TFieldValues extends FieldValues = FieldValues
> = {
  field: ControllerRenderProps<TFieldValues, FieldPath<TFieldValues>>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<TFieldValues>;
};

export type SanitizeProps<TFieldValues extends FieldValues = FieldValues> =
  FieldAccessoryProps<TFieldValues> & {
    checked?: boolean;
    error?: boolean;
    helperText?: string;
    name?: string;
    onBlur?: () => any;
    onChange?: (args: any) => any;
    ref?: (elm: any) => any;
    value?: any;
  };

export type FormOptions<TFieldValues extends FieldValues = FieldValues> = {
  /** Show or hidden error text in fields, working with style.css for the style of text, for default is TRUE. */
  showErrorText?: boolean;
  /** Middleware that will resolve the props for each field, by default it passes value, onChange, error, helperText, ref, etc. If your components do not support these props you can use this middleware to set the properties you expect. **/
  sanitize: (args: SanitizeProps<TFieldValues>) => any;
};

const FormOptionsContext = createContext<FormOptions>({
  showErrorText: true,
  sanitize: (props) => props
});

const defaultSanitize: <
  TFieldValues extends FieldValues = FieldValues
>() => FormOptions<TFieldValues>['sanitize'] = () => (props) => props;

export function ReactivityHookFormProvider<
  TFieldValues extends FieldValues = FieldValues
>({
  children,
  showErrorText = true,
  sanitize = defaultSanitize<TFieldValues>()
}: PropsWithChildren<Partial<FormOptions<TFieldValues>>>) {
  return (
    <FormOptionsContext.Provider value={{ showErrorText, sanitize } as any}>
      {children}
    </FormOptionsContext.Provider>
  );
}

export function useFormOptions<
  TFieldValues extends FieldValues = FieldValues
>() {
  return useContext(FormOptionsContext) as FormOptions<TFieldValues>;
}
