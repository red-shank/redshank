import React from 'react';
import { Animated, StyleSheet, TouchableOpacity } from 'react-native';

import { Text } from '../Text';
import useTheme from '../../context/theme/useTheme';
import type { NumberStringValue, TabItemProps } from './types';
import { Box } from '../Box';
import createSxStyle from '../../lib/sx';

export function Item({
  onPress,
  label,
  isActive,
  startAdornment,
  endAdornment,
  backgroundColors,
  labelColors,
  size,
  sx,
  borderRadius: borderRadiusProp
}: Omit<TabItemProps, 'key' | 'children'> & { id: NumberStringValue }) {
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

  const { height } = styles[size];

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={activeOpacity}
      style={StyleSheet.flatten([
        styles.wrapper,
        createSxStyle(
          {
            sx
          },
          useTheme()
        )
      ])}
    >
      <Box
        px={1}
        gap={0.5}
        flex={1}
        borderBottomWidth={1}
        borderRadius={isActive ? borderRadiusProp : undefined}
        borderBottomColor={
          isActive
            ? backgroundColors.activeColor
            : backgroundColors?.inactiveColor
        }
        style={StyleSheet.flatten([
          styles.radio,
          {
            height
          }
        ])}
      >
        {startAdornment}
        <Text
          color={isActive ? labelColors.activeColor : labelColors.inactiveColor}
        >
          {label}
        </Text>
        {endAdornment}
      </Box>
    </TouchableOpacity>
  );
}

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
    height: 40
  },
  large: {
    height: 55
  }
});
