import type { ColorType } from '../Context/theme/types';

export type RadioType = 'circle' | 'square';
export type SizeRadioType = 'small' | 'middle' | 'large';

export interface CheckboxProps {
  activeColor?: ColorType;
  inactiveColor?: ColorType;
  defaultValue?: boolean;
  error?: boolean;
  label: string;
  onChange?: (value: boolean) => void;
  required?: boolean;
  size?: SizeRadioType;
  type?: RadioType;
  value?: boolean;
}
