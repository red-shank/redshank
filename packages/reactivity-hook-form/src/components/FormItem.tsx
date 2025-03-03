import React, { ComponentProps, ReactNode, useMemo } from 'react';
import {
  Controller,
  ControllerProps as RHFControllerProps,
  FieldValues,
  useFormContext,
  UseFormReturn
} from 'react-hook-form';
import { FieldPath, FieldPathValue } from 'react-hook-form/dist/types';
import { useValidations } from '../context/ValidationsContext';
import {
  cleanInputProps,
  hasRenderFunction,
  hasSubmitFunction
} from '../utils';
import { FieldAccessoryProps, useFormOptions } from '../context/FormOptions';

type ControllerProps<TFieldValues extends FieldValues = FieldValues> = Omit<
  RHFControllerProps<TFieldValues>,
  'render' | 'control'
>;

type InputFieldProps<TFieldValues extends FieldValues = FieldValues> = Omit<
  ControllerProps<TFieldValues>,
  'onChange'
> &
  Omit<ComponentProps<'div'>, 'children' | 'onChange'> & {
    children: React.ReactElement<{
      value: TFieldValues | unknown;
      checked: TFieldValues | unknown;
      helperText?: string;
      focused?: boolean;
      error?: boolean;
      onChange?: InputFieldProps<TFieldValues>['onChange'];
    }>;
    label?: ReactNode;
    labelProps?: Omit<React.ComponentProps<'label'>, 'children'>;
    injectPropsField?: string[];
    getValue?: (
      value: FieldPathValue<TFieldValues, FieldPath<TFieldValues>>
    ) => unknown;
    sanitize?: (props: FieldAccessoryProps<TFieldValues>) => {
      [key: string]: unknown;
    };
    onChange?: (
      event: any,
      props: FieldAccessoryProps<TFieldValues> & {
        context: UseFormReturn<TFieldValues>;
      }
    ) => void;
    isSubmit?: false;
  };

export type RenderFieldProps<TFieldValues extends FieldValues = FieldValues> = {
  children: (context: UseFormReturn<TFieldValues>) => React.ReactElement;
  name?: never;
  rules?: never;
  isSubmit?: false;
};

export type IsSubmitFieldProps = {
  isSubmit: true;
  children: React.ReactElement;
};

export type FieldProps<TFieldValues extends FieldValues = FieldValues> =
  | InputFieldProps<TFieldValues>
  | RenderFieldProps<TFieldValues>
  | IsSubmitFieldProps;

export const FormItem = <TFieldValues extends FieldValues = FieldValues>(
  props: FieldProps<TFieldValues>
): JSX.Element => {
  const formContext = useFormContext<TFieldValues>();
  const { getValidation } = useValidations<TFieldValues>();
  const { sanitize: contextSanitize, onSubmit } =
    useFormOptions<TFieldValues>();

  if (hasRenderFunction(props)) {
    return props.children(formContext);
  }
  if (hasSubmitFunction(props)) {
    return React.cloneElement(props?.children, {
      onPress: onSubmit
    });
  }

  const {
    children,
    name,
    rules,
    onChange,
    getValue,
    label,
    labelProps,
    shouldUnregister,
    disabled,
    defaultValue,
    isSubmit,
    sanitize: sanitizeProp,
    injectPropsField = [],
    ...restDivProps
  } = props;

  const sanitize = useMemo(
    () => sanitizeProp || contextSanitize,
    [sanitizeProp, contextSanitize]
  );

  return (
    <Controller
      rules={{
        ...getValidation(name),
        ...rules
      }}
      name={name}
      disabled={disabled}
      defaultValue={defaultValue}
      control={formContext.control}
      shouldUnregister={shouldUnregister}
      render={(renderProps) => {
        const { field, fieldState } = renderProps;

        const propsFieldInject = injectPropsField.reduce((acc, currentKey) => {
          return {
            ...acc,
            [currentKey]: cleanInputProps(field)
          };
        }, {});

        const args = sanitize({
          ...restDivProps,
          ...field,
          ...propsFieldInject,
          ...renderProps,
          helperText: fieldState.error
            ? fieldState.error.message
            : children?.props?.helperText || '',
          error: !!fieldState.error,
          value: getValue ? getValue(field.value) : field.value,
          checked: (getValue ? getValue(field.value) : field.value) as boolean,
          onChange: (args: any) => {
            onChange
              ? onChange(args, { ...renderProps, context: formContext })
              : field.onChange(args);
          },
          ...renderProps
        });

        return React.cloneElement(children, args);
      }}
    />
  );
};
