import type { StyleProp, ViewStyle } from 'react-native';
import type { ColorName } from '../../context/theme/types';
import { SizeType } from '../../@types/input';

export interface ControllerProps {
  borderColor?: ColorName;
  color?: ColorName;
  error?: boolean;
  max?: number;
  maxOverflow?: () => void;
  min?: number;
  minOverflow?: () => void;
  onChange?: (count: number) => void;
  onDecrease?: (count: number) => void;
  onIncrease?: (count: number) => void;
  style?: StyleProp<ViewStyle>;
  textError?: string;
  value?: number;
  width?: number;
  size?: SizeType;
}
