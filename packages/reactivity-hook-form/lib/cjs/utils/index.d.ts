import { ControllerRenderProps } from 'react-hook-form/dist/types/controller';
import { FieldProps, RenderFieldProps } from '../components/FormItem';
import { ArrayKey } from '../types/extend-react-hook-form.type';
import { FieldValues } from 'react-hook-form/dist/types';
export declare const arrayKey: ArrayKey;
export declare function hasRenderFunction<TFieldValues extends FieldValues = FieldValues>(props: FieldProps<TFieldValues>): props is RenderFieldProps<TFieldValues>;
export declare function cleanInputProps<TFieldValues extends FieldValues = FieldValues>(fieldProps: ControllerRenderProps<TFieldValues>): {
    onBlur: import("react-hook-form/dist/types").Noop;
    disabled?: boolean | undefined;
    name: import("react-hook-form/dist/types").Path<TFieldValues>;
    ref: import("react-hook-form/dist/types").RefCallBack;
};
export declare const createNameKey: (currentKey: string, joinKey: string) => string;
export declare const getNameAndIndexKey: (key: string) => {
    name: string;
    index: number | null;
};
