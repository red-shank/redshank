import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import useTheme from '../Context/theme/useTheme';
import { ProgressProps } from './types';

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
  Component = View,
  size = 5,
  ...restTouchProps
}) => {
  const { colors } = useTheme();

  const backgroundColor = React.useMemo(() => {
    return colors[fallbackColor] || colors.accents8;
  }, [fallbackColor, colors]);

  const backgroundActiveColor = React.useMemo(() => {
    return colors[activeColor] || colors.primary;
  }, [activeColor, colors]);

  const calcWidth = useMemo(() => {
    const progress = (current / count) * 100;
    if (progress >= 100) {
      return 100;
    }
    if (progress <= 0) {
      return 0;
    }
    return progress;
  }, [count, current]);

  return (
    <Component
      style={StyleSheet.flatten([
        styles.container,
        { width: '100%', height: size, borderRadius: size },
        { backgroundColor: backgroundColor },
        style,
      ])}
      // @ts-ignore
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onLongPress={onLongPress}
      {...restTouchProps}
    >
      <View
        style={StyleSheet.flatten([
          {
            backgroundColor: backgroundActiveColor,
            width: `${calcWidth}%`,
            height: size,
            borderRadius: size,
          },
        ])}
      />
    </Component>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
