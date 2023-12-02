import { ReactElement } from 'react';
import { SizeType } from '../../@types/input';
import { ColorType } from '../../context/theme/types';

type RadioType = 'circle' | 'square';

export type NumberStringValue = string | number;

export interface RadioProps {
  activeColor?: ColorType;
  inactiveColor?: ColorType;
  isActive?: boolean;
  label: string;
  onPress?: (value: NumberStringValue) => void;
  size?: SizeType;
  type?: RadioType;
  value: NumberStringValue;
}

type AlignType = 'horizontal' | 'vertical';

export interface RadioGroupProps {
  activeColor?: ColorType;
  align?: AlignType;
  children?: ReactElement<RadioProps> | ReactElement<RadioProps>[];
  inactiveColor?: ColorType;
  defaultValue?: NumberStringValue;
  error?: boolean;
  onChange?: (key: NumberStringValue) => void;
  textError?: string;
  value?: NumberStringValue;
  size?: SizeType;
  type?: RadioType;
}
