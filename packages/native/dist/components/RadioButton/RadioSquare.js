import React from 'react';
import { Animated, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import useTheme from '../../context/theme/useTheme';
import { Box } from '../Box';
import createSxStyle from '../../lib/sx';
export const RadioSquare = ({ onPress, value, label, isActive, startAdornment, endAdornment, backgroundColors, labelColors, size, sx, borderRadius: borderRadiusProp }) => {
    const { activeOpacity } = useTheme();
    const [animationState] = React.useState({
        fadeAnim: new Animated.Value(0)
    });
    const fadeInAnimation = React.useCallback(() => {
        Animated.timing(animationState.fadeAnim, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true
        }).start(() => {
            Animated.timing(animationState.fadeAnim, {
                toValue: 1,
                duration: 500,
                delay: 10,
                useNativeDriver: true
            }).start();
        });
    }, [animationState.fadeAnim]);
    React.useEffect(() => {
        if (isActive) {
            fadeInAnimation();
        }
    }, [fadeInAnimation, isActive]);
    const onInternalPress = () => {
        onPress && onPress(value);
    };
    const { height } = styles[size];
    return (<TouchableOpacity onPress={onInternalPress} activeOpacity={activeOpacity} style={StyleSheet.flatten([
            styles.wrapper,
            createSxStyle({
                sx
            }, useTheme())
        ])}>
      <Box px={1} gap={0.5} flex={1} borderRadius={isActive ? borderRadiusProp : undefined} backgroundColor={isActive
            ? backgroundColors.activeColor
            : backgroundColors.inactiveColor} style={StyleSheet.flatten([
            styles.radio,
            {
                height
            }
        ])}>
        {startAdornment}
        <Text color={isActive ? labelColors.activeColor : labelColors.inactiveColor}>
          {label}
        </Text>
        {endAdornment}
      </Box>
    </TouchableOpacity>);
};
const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    radio: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    small: {
        height: 20
    },
    middle: {
        height: 35
    },
    large: {
        height: 45
    }
});
