import React, { FC } from 'react';
import FormField, {
  useForm as useFormField,
  FormProps as FormFieldProps,
  FormInstance,
} from 'rc-field-form';
import { FormItem, FormItemProps } from './FormItem';
import { FormProvider, useFormProvider } from './context';

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
  onFinishFailed,
  onValuesChange,
  ...props
}: FormProps) => {
  const { setErrors, removeError } = useFormProvider();

  const onErrors = React.useCallback(
    (e: any) => {
      if (e?.errorFields?.length) {
        const out = e.errorFields.map((f) => {
          if (f?.name?.length && f?.errors?.length) {
            return { name: f.name[0], error: f.errors[0] };
          }
          return null;
        });
        setErrors(out.filter((f) => f !== null));
      }
      onFinishFailed && onFinishFailed(e);
    },
    [onFinishFailed, setErrors]
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
      onValuesChange={onInternalValuesChange}
      onFinishFailed={onErrors}
      {...props}
    />
  );
};

const Form: FC<FormProps> & ComponentExport = ({
  marginBottom,
  ...restProps
}) => {
  return (
    <FormProvider marginBottom={marginBottom}>
      <InternalFormInstance {...restProps} />
    </FormProvider>
  );
};

function useForm<Values = any>(
  form?: FormInstance<Values>
): [FormInstance<Values>, () => void] {
  const [newForm] = useFormField<Values>(form);
  return [newForm, newForm?.submit];
}

Form.useForm = useForm;
Form.Item = FormItem;

export { Form, FormItemProps };
