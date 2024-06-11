import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Field } from 'rc-field-form';
import { Text } from '../Text';
import { useFormProvider } from './context';
export const FormItem = ({ label, required, name, children, style, isSubmit, rules = [], ...rest }) => {
    const [textError, setTextError] = React.useState();
    const { errors, marginBottom, internalForm } = useFormProvider();
    React.useEffect(() => {
        const find = errors.find((f) => f.name === name);
        if (find) {
            setTextError(find.error);
        }
        else {
            setTextError(undefined);
        }
    }, [errors, name]);
    const internalRules = useMemo(() => {
        if (required) {
            return [{ required: true, message: `${label} is required` }, ...rules];
        }
        return rules;
    }, [label, required, rules]);
    return (<View style={StyleSheet.flatten([styles.wrapper, { marginBottom }, style])}>
      {label && (<View style={styles.labelWrapper}>
          {required && <Text color="error">*</Text>}
          <Text>{label}</Text>
        </View>)}

      {isSubmit ? (React.cloneElement(children, {
            onPress: internalForm.submit,
        })) : (<Field {...rest} name={name} rules={internalRules}>
          {(childProps) => {
                return React.cloneElement(children, {
                    ...childProps,
                    error: !!textError,
                    textError,
                });
            }}
        </Field>)}
    </View>);
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
