import React from 'react';
import Form, { FormInstance } from 'rc-field-form';

interface ErrorProps {
  error: string;
  name: string;
}

interface ErrorContextProps {
  errors: ErrorProps[];
  marginBottom: number;
  setErrors: (e: ErrorProps[]) => void;
  removeError: (name: string) => void;
  internalForm?: FormInstance;
}

export type InternalFormInstance = FormInstance & {
  setErrors?: (Errors: ErrorProps[]) => void;
};

const initialValues = {
  marginBottom: 15,
  errors: [],
  setErrors: () => {},
  removeError: () => {}
};

type FormInternalContext = {
  children: React.ReactNode;
  marginBottom?: number;
  form?: InternalFormInstance;
};

export const FormContext =
  React.createContext<ErrorContextProps>(initialValues);

export const FormProvider = ({
  children,
  form: _form,
  marginBottom = 15
}: FormInternalContext) => {
  const [internalForm] = Form.useForm(_form);
  const [errors, setErrors] = React.useState<ErrorProps[]>([]);

  const onChangeError = React.useCallback((e: ErrorProps[]) => {
    setErrors(e);
  }, []);

  const removeError = React.useCallback((name: string) => {
    setErrors((prevState) => prevState.filter((f) => f.name !== name));
  }, []);

  // @ts-ignore
  internalForm.setErrors = onChangeError;
  if (typeof _form !== 'undefined') {
    _form.setErrors = onChangeError;
  }

  return (
    <FormContext.Provider
      value={{
        errors,
        removeError,
        marginBottom,
        internalForm,
        setErrors: onChangeError
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormProvider = () => {
  return React.useContext(FormContext);
};
