import React from 'react';
import { InputProps, InputTypes } from './types';
import { TextArea, TextAreaProps } from './TextArea';
interface CompoundedComponent extends React.ForwardRefExoticComponent<InputProps & React.RefAttributes<any>> {
    TextArea: typeof TextArea;
}
declare const Input: CompoundedComponent;
export { Input, TextAreaProps, InputProps, InputTypes };
