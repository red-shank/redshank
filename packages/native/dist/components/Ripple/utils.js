import { Animated } from 'react-native';
export const onAnimationSet = (state, toValue) => {
    return Animated.timing(state, {
        toValue,
        duration: 250,
        useNativeDriver: true,
    }).start();
};
