import { SyntheticEvent, useEffect } from 'react';
import { FieldValues, Path, useFormContext } from 'react-hook-form';
import { FieldErrors } from 'react-hook-form/dist/types/errors';
import useToggle from './useToggle';

type HookOutput = {
  open: boolean;
  hasError: boolean;
  handleExpand: (_e: SyntheticEvent, expanded: boolean) => void;
};

function findErrorInFormState<TFieldValues extends FieldValues = FieldValues>(
  object: FieldErrors<TFieldValues>,
  name: string
) {
  // Split the name into parts using dot as a separator
  const nameInArray = name.split('.');

  // Recursive helper function to search for the property
  function recursiveSearch(obj: any, parts: string[]): any {
    // Check if the current object has the property
    if (!obj.hasOwnProperty(parts[0])) return;
    // If there are more parts in the name, continue the recursive search
    // If there are no more parts, return the value of the found property
    return parts.length > 1
      ? recursiveSearch(obj[parts[0]], parts.slice(1))
      : obj[parts[0]];
  }

  // Call the recursive function with the object and name parts
  return recursiveSearch(object, nameInArray);
}

type OptionsProps = { defaultOpen?: boolean; cleanErrors?: boolean };

const defaultOpts: OptionsProps = {
  defaultOpen: false,
  cleanErrors: true
};

export function useCollapsibleExpandError<
  TFieldValues extends FieldValues = FieldValues
>(names: Path<TFieldValues>[], options: OptionsProps = {}): HookOutput {
  const { defaultOpen, cleanErrors: isCleanErrors } = {
    ...defaultOpts,
    ...options
  };

  const { formState, clearErrors, trigger } = useFormContext<TFieldValues>();
  const [open, { onVisible }, toggle] = useToggle(defaultOpen);

  const errors = names
    .map((_name) => {
      return findErrorInFormState(formState.errors, _name);
    })
    .filter(Boolean);

  const hasError = !!errors.length;

  useEffect(() => {
    if (hasError) {
      onVisible();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasError]);

  const handleExpand = (_e: SyntheticEvent, expanded: boolean) => {
    if (isCleanErrors) {
      const action = expanded ? trigger : clearErrors;
      names.forEach((name) => action?.(name));
    }
    toggle();
  };

  return {
    open,
    hasError,
    handleExpand
  };
}
