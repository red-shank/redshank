import * as React from 'react';
import {
  ComponentProps,
  ElementType,
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
  UseFormReturn,
  useFieldArray,
  useFormContext,
  useWatch,
  useController,
  useFormState
} from 'react-hook-form';
import { ValidationsProvider } from '../context/ValidationsContext';
import { FormDependencies } from '../types/dependencies.type';
import { FieldPathLib } from '../types/extend-react-hook-form.type';
import { FormValidations } from '../types/validations.type';
import { getFirstNameFromObject, getNameAndIndexKey } from '../utils';
import {
  FormOptions,
  ReactivityHookFormProvider
} from '../context/FormOptions';
import { FormItem } from './FormItem';

interface ComponentExport {
  Item: typeof FormItem;
  useForm: typeof useForm;
  useFieldArray: typeof useFieldArray;
  useFormContext: typeof useFormContext;
  useWatch: typeof useWatch;
  useController: typeof useController;
  useFormState: typeof useFormState;
}

type FormProps<TFieldValues extends FieldValues = FieldValues> =
  UseFormProps<TFieldValues> &
    Omit<ComponentProps<'form'>, 'onSubmit'> & {
      children: ReactNode;
      formId?: string;
      gap?: number;
      dependencies?: FormDependencies<TFieldValues>;
      validations?: FormValidations<TFieldValues>;
      onSubmit?: SubmitHandler<TFieldValues>;
      context?: UseFormReturn<TFieldValues>;
      formContext?: UseFormReturn<TFieldValues>;
      options?: Partial<FormOptions>;
      Component?: ElementType;
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
    context: externalContext,
    formContext = externalContext,
    defaultValues,
    options,
    gap = 16,
    Component = ((props) => <form {...props} />) as ElementType,
    ...restFormProps
  } = props;

  // using a state here to make the "scroll & focus" happen once per submission
  const [canFocus, setCanFocus] = useState(true);

  const methods = (formContext ??
    useForm<TFieldValues>({
      mode: 'onChange',
      defaultValues,
      ...restFormProps
    })) as UseFormReturn<TFieldValues>;

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
    if (
      methods.formState.errors &&
      canFocus &&
      typeof window &&
      typeof window !== 'undefined' &&
      window?.document &&
      typeof window?.document !== 'undefined'
    ) {
      // Sort inputs based on their position on the page. (the order will be based on validation order otherwise)
      const elements = Object.keys(methods.formState.errors)
        .map((name) => {
          const valueName = methods.formState.errors?.[name];
          let arrayName = name;

          // if by object fields
          if (
            valueName?.constructor === Object &&
            !Object.prototype.hasOwnProperty.call(valueName, 'ref') &&
            !Object.prototype.hasOwnProperty.call(valueName, 'message')
          ) {
            return Object.entries(valueName).map(([key, value]) => {
              const currName = getFirstNameFromObject(value, `${name}.${key}`);
              return document.getElementsByName(currName)[0];
            });
          } else if (Array.isArray(valueName)) {
            arrayName = Object.values(valueName).reduce<string>(
              (acc, currentValue, currentIndex) => {
                if (acc || currentIndex !== 0) return acc;
                return getFirstNameFromObject(
                  currentValue,
                  `${name}.${currentIndex}`
                );
              },
              ''
            );
          }
          return document.getElementsByName(arrayName)[0];
        })
        .flat()
        .filter(Boolean)
        .sort(
          (a, b) =>
            a.getBoundingClientRect().top - b.getBoundingClientRect().top
        );

      if (elements.length > 0) {
        const errorElement = elements[0];
        errorElement.scrollIntoView?.({ behavior: 'smooth', block: 'center' }); // scrollIntoView options are not supported in Safari
        errorElement.focus();
      }

      setCanFocus(false);
    }
  }, [methods.formState, canFocus]);

  useEffect(() => {
    setCanFocus(true);
  }, [methods.formState.submitCount]);

  const handleSubmit = methods.handleSubmit(onSubmit || (() => {}));

  return (
    <ReactivityHookFormProvider onSubmit={handleSubmit} {...options}>
      <FormProvider {...methods}>
        <ValidationsProvider validations={validations}>
          <Component
            id={formId}
            onSubmit={handleSubmit}
            {...restFormProps}
            style={{
              gap,
              display: 'flex',
              flexDirection: 'column',
              ...restFormProps?.style
            }}
          >
            {children}
          </Component>
        </ValidationsProvider>
      </FormProvider>
    </ReactivityHookFormProvider>
  );
};

export type * from 'react-hook-form/dist/types/index';

export default Form as (<TFieldValues extends FieldValues = FieldValues>(
  props: FormProps<TFieldValues>
) => JSX.Element) &
  ComponentExport;

Form.Item = FormItem;
Form.useForm = useForm;
Form.useFieldArray = useFieldArray;
Form.useFormContext = useFormContext;
Form.useWatch = useWatch;
Form.useController = useController;
Form.useFormState = useFormState;
