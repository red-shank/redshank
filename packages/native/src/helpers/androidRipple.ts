import { PressableProps } from 'react-native';

const androidRipple = (
  rippleColor?: string
): PressableProps['android_ripple'] => {
  return {
    borderless: false,
    color: rippleColor,
    radius: -5,
  };
};

export default androidRipple;
