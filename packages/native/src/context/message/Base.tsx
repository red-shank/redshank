import React from 'react';
import { scale } from 'react-native-size-matters';
import { StyleSheet, Animated, View, Platform } from 'react-native';

import { Text } from '../../components/Text';
import { Ripple } from '../../components/Ripple';
import useTheme from '../theme/useTheme';
import { isValidChild } from '../../utils/render';
import { getDarken, getLighten, getOpacity } from '../../utils';
import type { MessageProps } from './types';

export const Base: React.FC<MessageProps> = ({
  iconLeft,
  iconRight,
  content,
  onPress,
  withBoxShadow,
  withIcon = false,
  type = 'default',
  internalType = 'default',
  Component = onPress ? Ripple : View,
  style = {},
  styleText = {},
}) => {
  const { colors, activeOpacity, paddingSizes, marginSizes, isDark } =
    useTheme();

  const backgroundColor = React.useMemo(() => {
    if (type === 'shadow' && internalType !== 'default') {
      return isDark
        ? getDarken(colors[internalType], 0.6)
        : getLighten(colors[internalType], 75);
    }
    if (internalType === 'default') {
      return colors.message;
    }
    return colors[internalType];
  }, [colors, internalType, isDark, type]);

  const boxShadowColor = React.useMemo(() => {
    if (internalType !== 'default') {
      return getOpacity(colors[internalType], 0.8);
    }
    return colors.message;
  }, [colors, internalType]);

  const textColor = React.useMemo(() => {
    if (internalType === 'default' || type === 'shadow') {
      return 'text';
    }
    return 'white';
  }, [internalType, type]);

  return (
    <Component
      onPress={onPress}
      disableRipple={false}
      disableTransform={true}
      activeOpacity={activeOpacity}
      style={styles.wrapper}
    >
      <Animated.View
        style={StyleSheet.flatten([
          styles.content,
          styles.paddingBottom,
          {
            backgroundColor,
            paddingHorizontal: paddingSizes.md,
          },
          withBoxShadow && styles.shadowStyle,
          withBoxShadow && {
            shadowColor: boxShadowColor,
          },
          style,
        ])}
      >
        {withIcon && iconLeft ? iconLeft : null}
        {isValidChild(content) ? (
          content
        ) : (
          <Text
            fontWeight="500"
            color={textColor}
            style={StyleSheet.flatten([
              styles.contentText,
              { marginHorizontal: marginSizes.xxs, marginVertical: 0 },
              styleText,
            ])}
          >
            {content}
          </Text>
        )}
        {withIcon && iconRight ? iconRight : null}
      </Animated.View>
    </Component>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  content: {
    flex: 1,
    position: 'relative',
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  shadowStyle: {
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 20,
  },
  paddingBottom: Platform.select({
    ios: {
      paddingBottom: scale(12),
    },
    android: {
      paddingBottom: scale(14),
    },
    default: {
      paddingBottom: scale(14),
    },
  }),
  contentText: {},
});
