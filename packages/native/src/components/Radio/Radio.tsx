import React from 'react';
import { Animated, StyleSheet, TouchableOpacity } from 'react-native';

import { Group } from './Group';
import { Text } from '../Text';
import useTheme from '../../context/theme/useTheme';
import type { RadioProps } from './types';
import { Box } from '../Box';
import createSxStyle from '../../lib/sx';

interface ComponentExport {
  Group: typeof Group;
}

export const Radio: React.FC<RadioProps> & ComponentExport = ({
  onPress,
  value,
  label,
  isActive,
  activeColor = 'primary',
  inactiveColor = 'border',
  type = 'circle',
  size = 'middle',
  sx,
  styles
}) => {
  const theme = useTheme();

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

  const { width, height } = sizes[size];

  const internalColor = isActive
    ? theme.colors.get(activeColor)
    : 'transparent';

  return (
    <TouchableOpacity
      onPress={onInternalPress}
      activeOpacity={theme.activeOpacity}
      style={createSxStyle(
        {
          gap: 1,
          flexDirection: 'row',
          alignItems: 'center',
          sx: sx?.root,
          style: styles?.root
        },
        theme
      )}
    >
      <Box
        width={width}
        height={height}
        borderRadius={`radio.${type}`}
        borderColor={isActive ? activeColor : inactiveColor}
        justifyContent="center"
        alignItems="center"
        borderWidth={1}
        borderStyle="solid"
        style={styles?.container}
        sx={sx?.container}
      >
        <Animated.View
          style={{
            opacity: isActive ? animationState.fadeAnim : 0
          }}
        >
          <Box
            borderRadius={`radio.${type}`}
            style={createSxStyle(
              {
                borderWidth: 1,
                borderStyle: 'solid',
                width: width / 2,
                height: height / 2,
                backgroundColor: internalColor,
                borderColor: internalColor,
                sx: sx?.toggle,
                style: styles?.toggle
              },
              theme
            )}
          />
        </Animated.View>
      </Box>

      <Text sx={sx?.text} style={styles?.text}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

Radio.Group = Group;

const sizes = StyleSheet.create({
  small: {
    width: 16,
    height: 16
  },
  middle: {
    width: 20,
    height: 20
  },
  large: {
    width: 34,
    height: 34
  }
});
