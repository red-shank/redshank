import { TouchableOpacityProps } from 'react-native';
import type { ColorType } from '../../context/theme/types';
import { SxProps } from '../../lib/styleDictionary';

export type StateType = {
  width: number;
  height: number;
  ripples: any[];
};

export type RippleProps = TouchableOpacityProps &
  SxProps & {
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
    sx?: SxProps;

    onRippleAnimation?: (animation: any, callback: any) => any;
  };
