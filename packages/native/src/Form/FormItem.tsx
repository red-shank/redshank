import React from 'react';
import { View } from 'react-native';
import { Field } from 'rc-field-form';
import type { FieldProps } from 'rc-field-form/lib/Field';

import { Text } from '../Text';
import { useFormProvider } from './context';

export interface FormItemProps extends FieldProps {
  label?: string;
  required?: boolean;
}

export const FormItem = ({
  label,
  required,
  name,
  children,
  ...rest
}: FormItemProps) => {
  const [textError, setTextError] = React.useState<string>();
  const { errors, marginBottom } = useFormProvider();

  React.useEffect(() => {
    const find = errors.find((f) => f.name === name);
    if (find) {
      setTextError(find.error);
    } else {
      setTextError(undefined);
    }
  }, [errors, name]);

  return (
    <View style={{ marginBottom }}>
      {label && (
        <Text style={{ marginBottom: 12, marginTop: 0, lineHeight: 0 }}>
          <Text color="error">{required ? '* ' : ''}</Text>
          {label}
        </Text>
      )}
      <Field name={name} {...rest}>
        {React.cloneElement(children as JSX.Element, {
          error: !!textError,
          textError,
        })}
      </Field>
    </View>
  );
};
