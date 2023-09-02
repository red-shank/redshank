import React, {useEffect, useMemo} from "react";
import { StyleSheet, View, Animated } from 'react-native';
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
  size = 3,
  ...restTouchProps
}) => {
  const animation = new Animated.Value(0);

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
      useNativeDriver: false,
    }).start();
  }, [calcWidth]);

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
              outputRange: ['0%', '100%'],
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
