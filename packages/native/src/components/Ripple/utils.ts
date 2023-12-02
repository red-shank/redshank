import { Animated } from 'react-native';

export const onAnimationSet = (
  state: any,
  toValue:
    | number
    | Animated.Value
    | Animated.ValueXY
    | Animated.AnimatedInterpolation<any>
    | { x: number; y: number }
) => {
  return Animated.timing(state, {
    toValue,
    duration: 250,
    useNativeDriver: true,
  }).start();
};
