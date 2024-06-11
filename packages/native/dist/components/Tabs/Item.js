import React from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import useTheme from '../../context/theme/useTheme';
import { Box } from '../Box';
import createSxStyle from '../../lib/sx';
export function Item({ onPress, label, isActive, startAdornment, endAdornment, backgroundColors, labelColors, sx, size, labelProps, variant }) {
    const theme = useTheme();
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
    const variantStyle = getVariantStyles({
        backgroundColors,
        isActive,
        labelColors
    })[variant];
    return (<TouchableOpacity onPress={onPress} activeOpacity={activeOpacity} style={createSxStyle({
            ...variantStyle?.container,
            flexDirection: 'row',
            alignItems: 'center',
            sx
        }, theme)}>
      <Box flex={1} gap={0.5} p={paddingSize[size]} borderWidth={2} borderStyle="solid" alignItems="center" flexDirection="row" justifyContent="center" sx={variantStyle?.bg}>
        {startAdornment}
        <Text bold {...labelProps} sx={variantStyle?.label}>
          {label}
        </Text>
        {endAdornment}
      </Box>
    </TouchableOpacity>);
}
const paddingSize = {
    large: 1.6,
    middle: 1,
    small: 0.6
};
const getVariantStyles = ({ backgroundColors, isActive, labelColors }) => {
    return {
        solid: {
            container: {},
            bg: {
                borderRadius: 0.8,
                borderColor: isActive
                    ? backgroundColors?.activeColor || 'primary'
                    : backgroundColors?.inactiveColor || 'card',
                backgroundColor: isActive
                    ? backgroundColors?.activeColor || 'primary'
                    : backgroundColors?.inactiveColor || 'card'
            },
            label: {
                color: isActive
                    ? labelColors?.activeColor || 'white'
                    : labelColors?.inactiveColor || 'text'
            }
        },
        underlined: {
            container: {},
            bg: {
                borderColor: 'transparent',
                borderBottomColor: isActive
                    ? backgroundColors?.activeColor || 'primary'
                    : backgroundColors?.inactiveColor || 'transparent'
            },
            label: {
                color: isActive
                    ? labelColors?.activeColor || 'primary'
                    : labelColors?.inactiveColor || 'text'
            }
        },
        bordered: {
            container: {},
            bg: {
                borderRadius: 0.6,
                borderWidth: 1,
                borderColor: isActive
                    ? backgroundColors?.activeColor || 'border'
                    : backgroundColors?.inactiveColor || 'transparent',
                backgroundColor: isActive
                    ? backgroundColors?.activeColor || 'background'
                    : backgroundColors?.inactiveColor || 'transparent'
            },
            label: {
                color: isActive
                    ? labelColors?.activeColor || 'text'
                    : labelColors?.inactiveColor || 'text'
            }
        },
        light: {
            container: {},
            bg: {
                borderRadius: 0.6,
                borderColor: 'transparent',
                backgroundColor: isActive
                    ? backgroundColors?.activeColor || 'primary'
                    : backgroundColors?.inactiveColor || 'transparent'
            },
            label: {
                color: isActive
                    ? labelColors?.activeColor || 'white'
                    : labelColors?.inactiveColor || 'text'
            }
        }
    };
};
