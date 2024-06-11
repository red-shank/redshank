import React from 'react';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Group, GAP } from './Group';
import { Text } from '../Text';
import useTheme from '../../context/theme/useTheme';
import { Box } from '../Box';
export const Radio = ({ onPress, value, label, isActive, activeColor = 'primary', inactiveColor = 'border', type = 'circle', size = 'middle' }) => {
    const { borderRadius, colors, activeOpacity } = useTheme();
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
    const { width, height } = styles[size];
    const internalColor = isActive
        ? colors[activeColor] || activeColor
        : 'transparent';
    return (<TouchableOpacity onPress={onInternalPress} activeOpacity={activeOpacity} style={StyleSheet.flatten([styles.wrapper])}>
      <Box style={StyleSheet.flatten([
            styles.radio,
            {
                width,
                height,
                borderRadius: type === 'square' ? borderRadius.sm : borderRadius.max,
                borderColor: isActive
                    ? colors[activeColor] || activeColor
                    : colors[inactiveColor] || inactiveColor
            }
        ])}>
        <Animated.View style={{
            opacity: isActive ? animationState.fadeAnim : 0
        }}>
          <View style={StyleSheet.flatten([
            styles.radioAnimation,
            {
                width: width / 2,
                height: height / 2,
                borderRadius: type === 'square' ? borderRadius.xs : borderRadius.max,
                backgroundColor: internalColor,
                borderColor: internalColor
            }
        ])}/>
        </Animated.View>
      </Box>

      <Text>{label}</Text>
    </TouchableOpacity>);
};
Radio.Group = Group;
const styles = StyleSheet.create({
    wrapper: {
        gap: GAP / 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    radio: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    radioAnimation: {
        borderWidth: 1,
        borderStyle: 'solid'
    },
    small: {
        width: 16,
        height: 16
    },
    middle: {
        width: 18,
        height: 18
    },
    large: {
        width: 34,
        height: 34
    }
});
