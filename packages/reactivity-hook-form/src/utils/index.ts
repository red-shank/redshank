import { ControllerRenderProps } from 'react-hook-form/dist/types/controller';
import { FieldProps, RenderFieldProps } from '../components/FormItem';
import { ArrayKey } from '../types/extend-react-hook-form.type';
import { isValidElement } from 'react';
import { FieldValues } from 'react-hook-form/dist/types';

export const arrayKey: ArrayKey = '[number]';

export function hasRenderFunction<
  TFieldValues extends FieldValues = FieldValues
>(props: FieldProps<TFieldValues>): props is RenderFieldProps<TFieldValues> {
  return !isValidElement(props?.children);
}

export function cleanInputProps<TFieldValues extends FieldValues = FieldValues>(
  fieldProps: ControllerRenderProps<TFieldValues>
) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { value, onChange, ...rest } = fieldProps;
  return rest;
}

export const createNameKey = (currentKey: string, joinKey: string) => {
  return currentKey ? `${currentKey}.${joinKey}` : joinKey;
};

export const getNameAndIndexKey = (
  key: string
): { name: string; index: number | null } => {
  const arrayKeys = key.split('.');
  let index: null | number = null;

  const name = arrayKeys.reduce((previousValue, currentValue) => {
    const arrayIndex = Number(currentValue);

    if (!isNaN(arrayIndex)) {
      index = arrayIndex;
      // replace index for arrayKey or insert key
      return createNameKey(previousValue, arrayKey);
    }

    return createNameKey(previousValue, currentValue);
  }, '');

  return {
    name,
    index
  };
};
