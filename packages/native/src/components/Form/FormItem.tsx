import React, { useMemo } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Field } from 'rc-field-form';
import type { FieldProps } from 'rc-field-form/lib/Field';

import { Text } from '../Text';
import { useFormProvider } from './context';

export interface FormItemProps extends FieldProps {
  label?: string;
  required?: boolean;
  isSubmit?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const FormItem = ({
  label,
  required,
  name,
  children,
  style,
  isSubmit,
  rules = [],
  ...rest
}: FormItemProps) => {
  const [textError, setTextError] = React.useState<string>();
  const { errors, marginBottom, internalForm } = useFormProvider();

  React.useEffect(() => {
    const find = errors.find((f) => f.name === name);
    if (find) {
      setTextError(find.error);
    } else {
      setTextError(undefined);
    }
  }, [errors, name]);

  const internalRules = useMemo(() => {
    if (required) {
      return [{ required: true, message: `${label} is required` }, ...rules];
    }
    return rules;
  }, [label, required, rules]);

  return (
    <View style={StyleSheet.flatten([styles.wrapper, { marginBottom }, style])}>
      {label && (
        <View style={styles.labelWrapper}>
          {required && <Text color="error">*</Text>}
          <Text>{label}</Text>
        </View>
      )}

      {isSubmit ? (
        React.cloneElement(children as JSX.Element, {
          onPress: internalForm.submit,
        })
      ) : (
        <Field {...rest} name={name} rules={internalRules}>
          {(childProps) => {
            return React.cloneElement(children as JSX.Element, {
              ...childProps,
              error: !!textError,
              textError,
            });
          }}
        </Field>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  labelWrapper: {
    flexDirection: 'row',
    marginBottom: 12,
    marginTop: 0,
    lineHeight: 0,
  },
});
