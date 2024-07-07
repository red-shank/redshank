import { ReactNode } from 'react';
import { SizeType } from '../../@types/input';
import { ColorName } from '../../context/theme/types';
import { SxProps } from '../../lib/styleDictionary';

export type NumberStringValue = string | number;

export interface RadioButtonProps {
  backgroundColors?: {
    activeColor?: ColorName;
    inactiveColor?: ColorName;
  };
  labelColors?: {
    activeColor?: ColorName;
    inactiveColor?: ColorName;
  };
  isActive?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  onPress?: (value: NumberStringValue) => void;
  size?: SizeType;
  label: string;
  value: NumberStringValue;
  borderRadius?: SxProps['borderRadius'];
  sx?: SxProps;
}

export type RadioGroupButtonProps = Partial<
  Pick<
    RadioButtonProps,
    'backgroundColors' | 'labelColors' | 'value' | 'size' | 'sx'
  >
> & {
  options: Pick<
    RadioButtonProps,
    'value' | 'label' | 'startAdornment' | 'endAdornment'
  >[];
  defaultValue?: NumberStringValue;
  error?: boolean;
  onChange?: (key: NumberStringValue) => void;
  helperText?: string;
  itemSx?: SxProps;
};
