import * as React from 'react';
import { FieldPath } from 'react-hook-form/dist/types';
import { FieldValues, useFormContext, UseFormReturn } from 'react-hook-form';

/* hook to set value in form and launch dependencies when values is set in javascript
 * and not inFormItem component e.g.
 *
 * const [setValue] = useSetValue();
 * useEffect(() => {
 *   setValue('name', 'First Name');
 * }, [setValue]);
 *
 * In this example, the value of the field 'name' will be set to 'First Name' when the component is mounted. and trigger dependencies 'name'
 */
export function useSetValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  context?: UseFormReturn<TFieldValues> | null
): [
  setValue: (
    name: TName,
    value: any,
    trigger?: boolean
  ) => Promise<void | boolean> | void
] {
  const methods = (context ??
    useFormContext<TFieldValues>()) as UseFormReturn<TFieldValues>;

  return [
    React.useCallback(
      (name: TName, value, trigger) => {
        if (!trigger) {
          return methods.setValue(name, value);
        } else {
          const control = methods.register(name);
          return control.onChange({
            target: {
              value,
              name
            },
            type: 'change'
          });
        }
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [methods.register]
    )
  ];
}
