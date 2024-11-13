import * as React from 'react';
import { PropsWithChildren } from 'react';
export type FormOptions = {
    showErrorText?: boolean;
};
export declare function ReactivityHookFormProvider({ children, showErrorText }: PropsWithChildren<FormOptions>): React.JSX.Element;
export declare function useFormOptions(): FormOptions;
