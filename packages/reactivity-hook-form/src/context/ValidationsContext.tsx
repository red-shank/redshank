import React from 'react';
import {
  PropsWithChildren,
  createContext,
  useContext,
  useCallback
} from 'react';
import { FieldPath, FieldPathValue } from 'react-hook-form/dist/types/path';

import { FormValidations, InternalValidate } from '../types/validations.type';
import { getNameAndIndexKey } from '../utils';
import { FieldValues } from 'react-hook-form';

type ValidationsContextProps<TFieldValues extends FieldValues = FieldValues> = {
  validations: FormValidations<TFieldValues>;
  getValidation: (name: unknown) => undefined | FormValidations<any>;
};

const ValidationsContext = createContext<ValidationsContextProps<any> | null>(
  null
);

export function ValidationsProvider<
  TFieldValues extends FieldValues = FieldValues
>({
  children,
  validations = {}
}: PropsWithChildren<
  Partial<Pick<ValidationsContextProps<TFieldValues>, 'validations'>>
>) {
  const getValidation = useCallback(
    (_name: string) => {
      const { name, index } = getNameAndIndexKey(_name);
      const rule = validations?.[name];
      if (!rule) return {};
      let validation = {};

      if (typeof rule?.validate === 'function') {
        validation = {
          validate(value, formValues) {
            return rule.validate(value, formValues, { index, name });
          }
        };
      } else if (typeof rule?.validate === 'object') {
        const validationRule = rule.validate as Record<
          string,
          InternalValidate<
            FieldPathValue<TFieldValues, FieldPath<TFieldValues>>,
            TFieldValues
          >
        >;

        validation = {
          validate: Object.keys(validationRule).reduce((acc, currentKey) => {
            return {
              ...acc,
              [currentKey]: (value, formValues) => {
                return validationRule[currentKey](value, formValues, {
                  index,
                  name
                });
              }
            };
          }, {})
        };
      }

      return {
        ...rule,
        ...validation
      };
    },
    [validations]
  );

  return (
    <ValidationsContext.Provider value={{ validations, getValidation }}>
      {children}
    </ValidationsContext.Provider>
  );
}

export function useValidations<
  TFieldValues extends FieldValues = FieldValues
>() {
  const context = useContext<ValidationsContextProps<TFieldValues> | null>(
    ValidationsContext
  );

  if (!context) {
    console.error('Validation provider error');
  }

  return context as ValidationsContextProps<TFieldValues>;
}
