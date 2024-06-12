import {
  GestureResponderEvent,
  LayoutChangeEvent,
  NativeSyntheticEvent,
  TargetedEvent
} from 'react-native';

export type JustifyType = 'start' | 'end' | 'center';
export type AlignType = 'start' | 'end' | 'center';
export type OrientationType = 'vertical' | 'horizontal';
export type GutterType = [right: number, bottom: number];
export type BaseProperties = {
  onBlur?: ((e: NativeSyntheticEvent<TargetedEvent>) => void) | undefined;
  onFocus?: ((e: NativeSyntheticEvent<TargetedEvent>) => void) | undefined;
  onLayout?: ((event: LayoutChangeEvent) => void) | undefined;
  onLongPress?: ((event: GestureResponderEvent) => void) | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  onPressIn?: ((event: GestureResponderEvent) => void) | undefined;
  onPressOut?: ((event: GestureResponderEvent) => void) | undefined;
};
