import type { ColorName } from '../../context/theme/types';
import { ShapeInput } from '../Input/types';
import { ReactNode } from 'react';

export type SizeRadioType = 'small' | 'middle' | 'large';

export interface CheckboxProps {
  activeColor?: ColorName;
  inactiveColor?: ColorName;
  defaultValue?: boolean;
  error?: boolean;
  label: ReactNode;
  onChange?: (value: boolean) => void;
  required?: boolean;
  size?: SizeRadioType;
  type?: ShapeInput;
  value?: boolean;
}
