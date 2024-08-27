import React, { useMemo } from 'react';
import { Field } from 'rc-field-form';
import type { FieldProps } from 'rc-field-form/lib/Field';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { Text } from '../Text';
import { useFormProvider } from './context';
import { Box } from '../Box';
import { SxProps } from '../../lib/styleDictionary';
import createSxStyle from '../../lib/sx';
import useTheme from '../../context/theme/useTheme';

export interface FormItemProps extends FieldProps {
  label?: React.ReactNode;
  required?: boolean;
  isSubmit?: boolean;
  style?: StyleProp<ViewStyle>;
  sx?: SxProps & {
    wrapper?: SxProps;
    label?: SxProps;
  };
}

export const FormItem = ({
  label,
  required,
  name,
  children,
  style,
  isSubmit,
  sx,
  rules = [],
  ...rest
}: FormItemProps) => {
  const theme = useTheme();
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

  const isLabelReactNode = React.isValidElement(label);

  return (
    <View style={StyleSheet.flatten([styles.wrapper, { marginBottom }, style])}>
      {label && (
        <Box
          sx={createSxStyle(
            {
              flexDirection: 'row',
              marginBottom: 0.07,
              marginTop: 0,
              lineHeight: 0
            },
            theme
          )}
        >
          {required && <Text color="error">*</Text>}
          {isLabelReactNode ? label : <Text sx={sx?.label}>{label}</Text>}
        </Box>
      )}

      {isSubmit ? (
        React.cloneElement(children as JSX.Element, {
          onPress: internalForm.submit
        })
      ) : (
        <Field {...rest} name={name} rules={internalRules}>
          {(childProps) => {
            return React.cloneElement(children as JSX.Element, {
              ...childProps,
              error: !!textError,
              helperText: textError
            });
          }}
        </Field>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative'
  },
  labelWrapper: {
    flexDirection: 'row',
    marginBottom: 12,
    marginTop: 0,
    lineHeight: 0
  }
});
