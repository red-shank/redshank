import React from 'react';
import Form from 'rc-field-form';
const initialValues = {
    marginBottom: 15,
    errors: [],
    setErrors: () => { },
    removeError: () => { },
};
export const FormContext = React.createContext(initialValues);
export const FormProvider = ({ children, form: _form, marginBottom = 15, }) => {
    const [internalForm] = Form.useForm(_form);
    const [errors, setErrors] = React.useState([]);
    const onChangeError = React.useCallback((e) => {
        setErrors(e);
    }, []);
    const removeError = React.useCallback((name) => {
        setErrors((prevState) => prevState.filter((f) => f.name !== name));
    }, []);
    // @ts-ignore
    internalForm.setErrors = onChangeError;
    if (typeof _form !== 'undefined') {
        _form.setErrors = onChangeError;
    }
    return (<FormContext.Provider value={{
            errors,
            removeError,
            marginBottom,
            internalForm,
            setErrors: onChangeError,
        }}>
      {children}
    </FormContext.Provider>);
};
export const useFormProvider = () => {
    return React.useContext(FormContext);
};
