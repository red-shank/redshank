import { TouchableOpacityProps } from 'react-native';
import type { ColorType } from '../../context/theme/types';

export type StateType = {
  width: number;
  height: number;
  ripples: any[];
};

export interface RippleProps extends TouchableOpacityProps {
  rippleColor?: ColorType;
  nativeID?: any;
  rippleOpacity?: number; // 0 to 1
  rippleDuration?: number;
  rippleSize?: number;
  rippleContainerBorderRadius?: number;
  rippleCentered?: boolean;
  rippleSequential?: boolean;
  rippleFades?: boolean;
  disableRipple?: boolean;
  disableTransform?: boolean;
  disabled?: boolean;

  onRippleAnimation?: (animation: any, callback: any) => any;
}
