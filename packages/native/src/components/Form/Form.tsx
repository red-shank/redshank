import React, { FC } from 'react';
import FormField, {
  useForm as useFormField,
  FormProps as FormFieldProps,
  FormInstance
} from 'rc-field-form';
import { FormItem, FormItemProps } from './FormItem';
import { FormProvider, useFormProvider, InternalFormInstance } from './context';
import { FieldData } from 'rc-field-form/es/interface';

interface GenericValue {
  [key: string]: unknown;
}

export interface FormProps extends Omit<FormFieldProps, 'children'> {
  children?: React.ReactNode;
  marginBottom?: number;
}

interface ComponentExport {
  useForm: typeof useForm;
  Item: typeof FormItem;
}

const InternalFormInstance = ({
  onFieldsChange,
  onValuesChange,
  form,
  ...props
}: FormProps) => {
  const { setErrors, removeError, internalForm } = useFormProvider();

  const onErrors = React.useCallback(
    (changedFields: FieldData[], allFields: FieldData[]) => {
      if (allFields.length) {
        const out = allFields.map((f) => {
          if ((f?.name || (f?.name as any)?.length) && f?.errors?.length) {
            const resolveName = Array.isArray(f.name) ? f.name[0] : f.name;
            return { name: resolveName as string, error: f.errors[0] };
          }
          return null;
        });
        setErrors(out.filter((f) => f !== null));
      }
      onFieldsChange && onFieldsChange(changedFields, allFields);
    },
    [setErrors, onFieldsChange]
  );

  const onInternalValuesChange = React.useCallback(
    (change: GenericValue, values: GenericValue) => {
      const keys = Object.keys(change);
      keys && keys?.length && removeError(keys[0]);
      onValuesChange && onValuesChange(change, values);
    },
    [onValuesChange, removeError]
  );

  return (
    <FormField
      component={false}
      form={internalForm || form}
      onFieldsChange={onErrors}
      onValuesChange={onInternalValuesChange}
      {...props}
    />
  );
};

const Form: FC<FormProps> & ComponentExport = ({
  marginBottom,
  ...restProps
}) => {
  return (
    <FormProvider marginBottom={marginBottom} form={restProps?.form}>
      <InternalFormInstance {...restProps} />
    </FormProvider>
  );
};

function useForm<Values = any>(
  form?: FormInstance<Values>
): [InternalFormInstance, () => void] {
  const [newForm] = useFormField<Values>(form);
  return [newForm as InternalFormInstance, newForm?.submit];
}

Form.useForm = useForm;
Form.Item = FormItem;

export { Form, FormItemProps };
