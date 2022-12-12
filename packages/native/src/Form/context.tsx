import React from 'react';

interface ErrorProps {
  error: string;
  name: string;
}

interface ErrorContextProps {
  errors: ErrorProps[];
  marginBottom: number;
  setErrors: (e: ErrorProps[]) => void;
  removeError: (name: string) => void;
}

const initialValues = {
  marginBottom: 15,
  errors: [],
  setErrors: () => {},
  removeError: () => {},
};

export const FormContext =
  React.createContext<ErrorContextProps>(initialValues);

export const FormProvider = ({
  children,
  marginBottom = 15,
}: {
  children: React.ReactNode;
  marginBottom?: number;
}) => {
  const [errors, setErrors] = React.useState<ErrorProps[]>([]);

  const onChangeError = React.useCallback((e: ErrorProps[]) => {
    setErrors(e);
  }, []);

  const removeError = React.useCallback((name: string) => {
    setErrors((prevState) => prevState.filter((f) => f.name !== name));
  }, []);

  return (
    <FormContext.Provider
      value={{
        errors,
        removeError,
        marginBottom,
        setErrors: onChangeError,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormProvider = () => {
  return React.useContext(FormContext);
};
