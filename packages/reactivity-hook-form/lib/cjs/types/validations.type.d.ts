import { FieldValues, RegisterOptions } from 'react-hook-form';
import { FieldPath, FieldPathValue } from 'react-hook-form/dist/types/path';
import { FieldPathLib } from './extend-react-hook-form.type';
import { ValidateResult } from 'react-hook-form/dist/types/validator';
export type Rules<TValue extends FieldValues = FieldValues, TName extends FieldPath<TValue> = FieldPath<TValue>> = Omit<RegisterOptions<TValue>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled' | 'validate'> & {
    validate?: InternalValidate<FieldPathValue<TValue, TName>, TValue> | Record<string, InternalValidate<FieldPathValue<TValue, TName>, TValue>>;
};
export type FormValidations<TFieldValues extends FieldValues = FieldValues> = Partial<{
    [key in FieldPathLib<TFieldValues>]: Rules<TFieldValues>;
}>;
export type InternalValidate<TFieldValue, TFormValues> = (value: TFieldValue, formValues: TFormValues, options: {
    index: number | null;
    name: string | null;
}) => ValidateResult | Promise<ValidateResult>;
