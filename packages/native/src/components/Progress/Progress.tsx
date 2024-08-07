import React, { useEffect, useMemo } from 'react';
import { StyleSheet, Animated } from 'react-native';
import useTheme from '../../context/theme/useTheme';
import { ProgressProps } from './types';
import { Box } from '../Box';

export const Progress: React.FC<ProgressProps> = ({
  fallbackColor,
  activeColor,
  count,
  current,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  style,
  Component = Box,
  size = 3,
  ...restTouchProps
}) => {
  const animation = new Animated.Value(0);

  const { colors } = useTheme();

  const backgroundColor = React.useMemo(() => {
    return colors.get(fallbackColor) || colors.accents['8'];
  }, [fallbackColor, colors]);

  const backgroundActiveColor = React.useMemo(() => {
    return colors.get(activeColor) || colors.get('primary');
  }, [activeColor, colors]);

  const calcWidth = useMemo(() => {
    const progress = (current / count) * 100;
    if (progress >= 100) {
      return 1;
    }
    if (progress <= 0) {
      return 0;
    }
    return progress / 100;
  }, [count, current]);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: calcWidth,
      duration: 750,
      useNativeDriver: false
    }).start();
  }, [animation, calcWidth]);

  return (
    <Component
      style={StyleSheet.flatten([
        styles.container,
        {
          width: '100%',
          height: size,
          borderRadius: size
        },
        { backgroundColor: backgroundColor },
        style
      ])}
      // @ts-ignore
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onLongPress={onLongPress}
      {...restTouchProps}
    >
      <Animated.View
        style={StyleSheet.flatten([
          {
            backgroundColor: backgroundActiveColor,
            width: animation.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%']
            }),
            height: size,
            borderRadius: size
          }
        ])}
      />
    </Component>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
});
