import React from 'react';
import { scale } from 'react-native-size-matters';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';

import { Group, GAP } from './Group';
import { Text } from '../Text';
import useTheme from '../Context/theme/useTheme';
import type { RadioProps } from './types';

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
}) => {
  const { borderRadius, colors, activeOpacity } = useTheme();

  const [animationState] = React.useState({
    fadeAnim: new Animated.Value(0),
  });

  const fadeInAnimation = React.useCallback(() => {
    Animated.timing(animationState.fadeAnim, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animationState.fadeAnim, {
        toValue: 1,
        duration: 500,
        delay: 10,
        useNativeDriver: true,
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

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={onInternalPress}
      activeOpacity={activeOpacity}
    >
      <View
        style={StyleSheet.flatten([
          styles.radio,
          {
            width,
            height,
            borderRadius:
              type === 'square' ? borderRadius.sm : borderRadius.max,
            borderColor: isActive
              ? colors[activeColor] || activeColor
              : colors[inactiveColor] || inactiveColor,
          },
        ])}
      >
        <Animated.View
          style={{
            opacity: isActive ? animationState.fadeAnim : 0,
          }}
        >
          <View
            style={StyleSheet.flatten([
              styles.radioAnimation,
              {
                width: width / 2,
                height: height / 2,
                borderRadius:
                  type === 'square' ? borderRadius.xs : borderRadius.max,
                backgroundColor: internalColor,
                borderColor: internalColor,
              },
            ])}
          />
        </Animated.View>
      </View>

      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

Radio.Group = Group;

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: GAP / 2,
    marginHorizontal: GAP / 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  radio: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginRight: scale(5),
    borderStyle: 'solid',
  },
  radioAnimation: {
    borderWidth: 1,
    borderStyle: 'solid',
  },
  small: {
    width: scale(16),
    height: scale(16),
  },
  middle: {
    width: scale(24),
    height: scale(24),
  },
  large: {
    width: scale(34),
    height: scale(34),
  },
});
