import React from 'react';
import FormField, { useForm as useFormField, } from 'rc-field-form';
import { FormItem } from './FormItem';
import { FormProvider, useFormProvider } from './context';
const InternalFormInstance = ({ onFieldsChange, onValuesChange, form, ...props }) => {
    const { setErrors, removeError, internalForm } = useFormProvider();
    const onErrors = React.useCallback((changedFields, allFields) => {
        if (allFields.length) {
            const out = allFields.map((f) => {
                if ((f?.name || f?.name?.length) && f?.errors?.length) {
                    const resolveName = Array.isArray(f.name) ? f.name[0] : f.name;
                    return { name: resolveName, error: f.errors[0] };
                }
                return null;
            });
            setErrors(out.filter((f) => f !== null));
        }
        onFieldsChange && onFieldsChange(changedFields, allFields);
    }, [setErrors, onFieldsChange]);
    const onInternalValuesChange = React.useCallback((change, values) => {
        const keys = Object.keys(change);
        keys && keys?.length && removeError(keys[0]);
        onValuesChange && onValuesChange(change, values);
    }, [onValuesChange, removeError]);
    return (<FormField component={false} form={internalForm || form} onFieldsChange={onErrors} onValuesChange={onInternalValuesChange} {...props}/>);
};
const Form = ({ marginBottom, ...restProps }) => {
    return (<FormProvider marginBottom={marginBottom} form={restProps?.form}>
      <InternalFormInstance {...restProps}/>
    </FormProvider>);
};
function useForm(form) {
    const [newForm] = useFormField(form);
    return [newForm, newForm?.submit];
}
Form.useForm = useForm;
Form.Item = FormItem;
export { Form };
