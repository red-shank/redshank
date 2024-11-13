import * as React from 'react';
import {
  ComponentProps,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState
} from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormProps,
  useForm,
  UseFormReturn
} from 'react-hook-form';
import { ValidationsProvider } from '../context/ValidationsContext';
import { FormDependencies } from '../types/dependencies.type';
import { FieldPathLib } from '../types/extend-react-hook-form.type';
import { FormValidations } from '../types/validations.type';
import { getNameAndIndexKey } from '../utils';
import {
  FormOptions,
  ReactivityHookFormProvider
} from '../context/FormOptions';

type FormProps<TFieldValues extends FieldValues = FieldValues> =
  UseFormProps<TFieldValues> &
    Omit<ComponentProps<'form'>, 'onSubmit'> & {
      children: ReactNode;
      formId?: string;
      gap?: number;
      dependencies?: FormDependencies<TFieldValues>;
      validations?: FormValidations<TFieldValues>;
      onSubmit?: SubmitHandler<TFieldValues>;
      formContext?: UseFormReturn<TFieldValues>;
      options?: Partial<FormOptions>;
    };

const Component = ({
  options,
  children
}: PropsWithChildren<{ options?: Partial<FormOptions> }>) => {
  if (typeof options !== 'undefined') {
    return (
      <ReactivityHookFormProvider {...options}>
        {children}
      </ReactivityHookFormProvider>
    );
  }
  return <>{children}</>;
};

const Form = <TFieldValues extends FieldValues = FieldValues>(
  props: FormProps<TFieldValues>
): JSX.Element => {
  const {
    formId,
    children,
    dependencies,
    validations,
    onSubmit,
    formContext,
    defaultValues,
    options,
    gap = 16,
    ...restFormProps
  } = props;

  // using a state here to make the "scroll & focus" happen once per submission
  const [canFocus, setCanFocus] = useState(true);

  const methods =
    formContext ??
    useForm<TFieldValues>({
      mode: 'onChange',
      defaultValues,
      ...restFormProps
    });

  // this useEffect is to enable the watcher and launch the action of the dependencies
  useEffect(() => {
    if (dependencies?.length) {
      const subscription = methods.watch(
        (formValues, { name: _name, type }) => {
          if (type === 'change' && _name) {
            const { name, index } = getNameAndIndexKey(_name);
            const findDependencies = dependencies.filter((dep) => {
              return dep.dependencies.includes(
                name as FieldPathLib<TFieldValues>
              );
            });

            findDependencies.forEach((dependency) =>
              dependency.callback?.(formValues, methods, { index, name })
            );
          }
        }
      );

      return () => subscription.unsubscribe();
    }
    return () => {};
  }, [methods, dependencies]);

  // This useEffect is to enable auto-scroll to the input with error
  useEffect(() => {
    if (methods.formState.errors && canFocus) {
      // Sort inputs based on their position on the page. (the order will be based on validaton order otherwise)
      const elements = Object.keys(methods.formState.errors)
        .map((name) => document.getElementsByName(name)[0])
        .filter(Boolean)
        .sort(
          (a, b) =>
            a.getBoundingClientRect().top - b.getBoundingClientRect().top
        );

      if (elements.length > 0) {
        const errorElement = elements[0];
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' }); // scrollIntoView options are not supported in Safari
        errorElement.focus({ preventScroll: true });
      }

      setCanFocus(false);
    }
  }, [methods.formState, canFocus]);

  useEffect(() => {
    setCanFocus(true);
  }, [methods.formState.submitCount]);

  return (
    <Component options={options}>
      <FormProvider {...methods}>
        <ValidationsProvider validations={validations}>
          <form
            id={formId}
            onSubmit={methods.handleSubmit(onSubmit ?? (() => {}))}
            {...restFormProps}
            style={{
              gap,
              display: 'flex',
              flexDirection: 'column',
              ...restFormProps?.style
            }}
          >
            {children}
          </form>
        </ValidationsProvider>
      </FormProvider>
    </Component>
  );
};

export default Form;
