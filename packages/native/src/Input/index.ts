import React from 'react';

import { Input as InternalInput } from './Input';
import { InputProps, InputTypes } from './types';
import { TextArea, TextAreaProps } from './TextArea';

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    InputProps & React.RefAttributes<unknown>
  > {
  TextArea: typeof TextArea;
}

const Input = InternalInput as CompoundedComponent;

Input.TextArea = TextArea;

export { Input, TextAreaProps, InputProps, InputTypes };
