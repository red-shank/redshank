import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { scale } from 'react-native-size-matters';

import { Text } from '../Text';
import { Ripple } from '../Ripple';
import useTheme from '../../context/theme/useTheme';
import { getOpacity } from '../../utils';

import type { BadgeProps } from './types';

const SIZE_SMALL_BADGE = scale(20);
const SIZE_MIDDLE_BADGE = scale(25);
const SIZE_LARGE_BADGE = scale(35);
const SIZE_DOT_SMALL_BADGE = scale(10);
const SIZE_DOT_MIDDLE_BADGE = scale(14);
const SIZE_DOT_LARGE_BADGE = scale(18);
const SIZE_DOT_BADGE_POSITION = scale(1);

export const Badge: React.FC<BadgeProps> = ({
  content,
  wrapperStyle,
  style,
  isInvisible,
  enableShadow,
  children,
  childrenStyle,
  onPress,
  isPressable = !!onPress,
  placement = 'top-right',
  bold = true,
  size = children ? 'small' : 'middle',
  background = 'border',
  variant = 'default',
  disableOutline = !children,
  type = 'rounded',
  color = variant === 'bordered' || variant === 'flat' ? background : 'white',
}) => {
  const { colors, borderRadius, borderWidth, isDark, zIndices } = useTheme();

  const { height, heightPosition, ...restStyle } =
    variant === 'dot' ? sizesDot[size] : styles[size];

  const fontSize: number = height * 0.5;
  const isBordered = React.useMemo(() => variant === 'bordered', [variant]);
  const isFlat = React.useMemo(() => variant === 'flat', [variant]);

  const backgroundColor = React.useMemo(() => {
    if (isBordered) {
      return 'transparent';
    }
    if (isFlat) {
      return getOpacity(colors[background] || background, 0.3);
    }
    return colors[background] || background;
  }, [isBordered, isFlat, colors, background]);

  const borderColor = React.useMemo(() => {
    if (isBordered) {
      return colors[background] || background;
    }
    if (!disableOutline && !isBordered) {
      return colors.background;
    }
    if (isFlat) {
      return 'transparent';
    }
    return backgroundColor;
  }, [isBordered, disableOutline, isFlat, backgroundColor, colors, background]);

  const Component = React.useMemo<any>(() => {
    if (isPressable) {
      return Ripple;
    }
    return View;
  }, [isPressable]);

  return (
    <Component
      onPress={onPress}
      style={StyleSheet.flatten([styles.wrapper, wrapperStyle])}
    >
      {isInvisible ? null : (
        <Animated.View
          style={StyleSheet.flatten([
            styles.badge,
            styles.shadow,
            restStyle,
            {
              height,
              borderWidth,
              borderColor,
              backgroundColor,
              zIndex: zIndices['2'],
              borderRadius: type === 'square' ? borderRadius.sm : height,
            },
            {
              shadowOpacity: isDark ? 1 : 0.8,
              shadowColor: enableShadow
                ? colors[background] || background
                : 'transparent',
            },
            styles[variant],
            children &&
              StyleSheet.flatten([
                styles.placement,
                placementStyle(heightPosition)[placement],
              ]),
            style,
          ])}
        >
          {variant !== 'dot' ? (
            <Text bold={bold} color={color} lineHeight={0} size={fontSize}>
              {content}
            </Text>
          ) : null}
        </Animated.View>
      )}
      <View
        style={StyleSheet.flatten([{ zIndex: zIndices['1'], childrenStyle }])}
      >
        {children}
      </View>
    </Component>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    alignSelf: 'flex-start',
  },
  default: {},
  bordered: {},
  flat: {},
  dot: {},
  badge: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placement: {
    position: 'absolute',
  },
  small: {
    height: SIZE_SMALL_BADGE,
    heightPosition: SIZE_SMALL_BADGE,
    paddingHorizontal: scale(3),
  },
  middle: {
    height: SIZE_MIDDLE_BADGE,
    heightPosition: SIZE_MIDDLE_BADGE,
    paddingHorizontal: scale(8),
  },
  large: {
    height: SIZE_LARGE_BADGE,
    heightPosition: SIZE_LARGE_BADGE,
    paddingHorizontal: scale(8),
  },
  shadow: {
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 10,
  },
});

const sizesDot = StyleSheet.create({
  small: {
    width: SIZE_DOT_SMALL_BADGE,
    height: SIZE_DOT_SMALL_BADGE,
    borderRadius: SIZE_DOT_SMALL_BADGE,
    heightPosition: SIZE_DOT_BADGE_POSITION,
  },
  middle: {
    width: SIZE_DOT_MIDDLE_BADGE,
    height: SIZE_DOT_MIDDLE_BADGE,
    borderRadius: SIZE_DOT_MIDDLE_BADGE,
    heightPosition: SIZE_DOT_BADGE_POSITION + scale(3),
  },
  large: {
    width: SIZE_DOT_LARGE_BADGE,
    height: SIZE_DOT_LARGE_BADGE,
    borderRadius: SIZE_DOT_LARGE_BADGE,
    heightPosition: SIZE_DOT_BADGE_POSITION + scale(7),
  },
});

const CALC_MULTIPLY = 0.7;
const CALC_SPLIT = 2;

const placementStyle = (height) =>
  StyleSheet.create({
    'top-right': {
      right: -height * CALC_MULTIPLY,
      top: -height / CALC_SPLIT,
    },
    'top-left': {
      left: -height * CALC_MULTIPLY,
      top: -height / CALC_SPLIT,
    },
    'bottom-right': {
      right: -height * CALC_MULTIPLY,
      bottom: -height / CALC_SPLIT,
    },
    'bottom-left': {
      left: -height * CALC_MULTIPLY,
      bottom: -height / CALC_SPLIT,
    },
  });
