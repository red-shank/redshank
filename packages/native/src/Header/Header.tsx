import React from 'react';
import { Animated, Platform, StyleSheet, View, ViewStyle } from 'react-native';

import useTheme from '../Context/theme/useTheme';
import useHeaderHeight from '../hooks/useHeaderHeight';
import type { HeaderProps } from './types';

const defaultTitlePosition = Platform.select<'center' | 'left'>({
  ios: 'center',
  default: 'left',
});
export const Header: React.FC<HeaderProps> = ({
  title,
  titleOnScroll,
  leftIcon,
  rightIcon,
  titleStyle,
  style,
  statusBarHeight,
  heightDynamic = 0,
  titlePosition = defaultTitlePosition,
  titleOnScrollPosition = 'center',
  background = 'background',
  backgroundSticky = background,
}) => {
  const { scrollOffsetY, width, colors, zIndices } = useTheme();
  const [fadeInOpacity] = React.useState(new Animated.Value(0));
  const [opacityNumber, setOpacityNumber] = React.useState(0);

  const defaultHeight = useHeaderHeight();
  const enableAnimation = React.useMemo(() => {
    return heightDynamic > 0;
  }, [heightDynamic]);

  const { height = statusBarHeight || defaultHeight, ...restStyle } =
    StyleSheet.flatten([defaultHeight, style]) as ViewStyle;

  const fadeInAnimation = React.useCallback(
    (start: number, end: number) => {
      Animated.timing(fadeInOpacity, {
        toValue: start,
        duration: 0,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(fadeInOpacity, {
          toValue: end,
          duration: 200,
          delay: 0,
          useNativeDriver: true,
        }).start();
      });
    },
    [fadeInOpacity]
  );

  const dynamicHeightAnimation = scrollOffsetY.interpolate({
    inputRange: [0, heightDynamic],
    outputRange: [heightDynamic, 0],
    extrapolate: 'clamp',
  });

  if (enableAnimation) {
    dynamicHeightAnimation?.addListener(({ value }) => {
      const TOLERANCE_HEIGHT = 2;
      setOpacityNumber(value <= TOLERANCE_HEIGHT ? 1 : 0);
    });
  }

  React.useEffect(() => {
    if (!enableAnimation) {
      fadeInAnimation(0, 1);
    } else if (opacityNumber > 0) {
      fadeInAnimation(0, 1);
    } else {
      fadeInAnimation(1, 0);
    }
  }, [enableAnimation, fadeInAnimation, opacityNumber]);

  const backgroundColor = React.useMemo(() => {
    if (opacityNumber === 1) {
      return colors[backgroundSticky] || backgroundSticky;
    }
    return colors[background] || background;
  }, [background, backgroundSticky, opacityNumber, colors]);

  const showIconSpace = React.useMemo(() => {
    if (opacityNumber !== 0) {
      return titleOnScrollPosition === 'center';
    }
    return titlePosition === 'center';
  }, [opacityNumber, titleOnScrollPosition, titlePosition]);

  return (
    <>
      {/* TitleLink element */}
      <Animated.View
        style={StyleSheet.flatten([
          styles.header,
          {
            height,
            width,
            backgroundColor,
            zIndex: zIndices.max,
          },
          restStyle,
        ])}
      >
        <View style={styles.content}>
          {(leftIcon || showIconSpace) && (
            <View
              style={StyleSheet.flatten([
                styles.icon,
                !leftIcon && styles.hideIcon,
              ])}
            >
              {leftIcon || rightIcon}
            </View>
          )}

          {typeof title === 'string' && opacityNumber === 0 ? (
            <Animated.Text
              aria-level="1"
              numberOfLines={1}
              style={[
                styles.defaultTitle,
                styles.title,
                {
                  color: colors.text,
                  textAlign: titlePosition,
                },
                titleStyle,
              ]}
            >
              {title}
            </Animated.Text>
          ) : opacityNumber === 0 ? (
            title
          ) : null}

          {typeof titleOnScroll === 'string' && opacityNumber !== 0 ? (
            <Animated.Text
              aria-level="1"
              numberOfLines={1}
              style={[
                styles.defaultTitle,
                styles.title,
                {
                  opacity: fadeInOpacity,
                  color: colors.text,
                  textAlign: titleOnScrollPosition,
                },
                titleStyle,
              ]}
            >
              {titleOnScroll}
            </Animated.Text>
          ) : opacityNumber !== 0 ? (
            titleOnScroll
          ) : null}

          {(rightIcon || showIconSpace) && (
            <View
              style={StyleSheet.flatten([
                styles.icon,
                !rightIcon && styles.hideIcon,
              ])}
            >
              {rightIcon || leftIcon}
            </View>
          )}
        </View>
      </Animated.View>

      {/* dynamic animation */}
      <Animated.View
        style={StyleSheet.flatten([
          styles.dynamicHead,
          {
            width,
            height: dynamicHeightAnimation,
          },
        ])}
      />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  icon: Platform.select({
    ios: {},
    default: {
      marginBottom: 5,
    },
  }),
  hideIcon: {
    opacity: 0,
  },
  header: {
    top: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    borderWidth: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 5,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  dynamicHead: {
    overflow: 'hidden',
  },
  defaultTitle: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: Platform.select({
    ios: {
      fontSize: 17,
      textAlign: 'center',
      fontWeight: '600',
      marginBottom: 5,
    },
    android: {
      fontSize: 20,
      textAlign: 'left',
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
      marginBottom: 7,
    },
    default: {
      fontSize: 18,
      textAlign: 'left',
      fontWeight: '500',
      marginBottom: 7,
    },
  }),
});
