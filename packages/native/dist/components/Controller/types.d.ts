import type { StyleProp, ViewStyle } from 'react-native';
import type { ColorType } from '../../context/theme/types';
export interface ControllerProps {
    borderColor?: ColorType;
    color?: ColorType;
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
}
