import React from 'react';
import { scale } from 'react-native-size-matters';
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
  heightDynamic,
  leftIcon,
  rightIcon,
  titleStyle,
  headerStyle,
  titlePosition = defaultTitlePosition,
  titleOnScrollPosition = 'center',
  background = 'background',
  backgroundSticky = background,
}) => {
  const { scrollOffsetY, width, colors, zIndices } = useTheme();
  const [fadeInOpacity] = React.useState(new Animated.Value(0));
  const [opacityNumber, setOpacityNumber] = React.useState(0);

  const defaultHeight = useHeaderHeight();

  const { height = defaultHeight, ...restStyle } = StyleSheet.flatten([
    defaultHeight,
    headerStyle,
  ]) as ViewStyle;

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

  dynamicHeightAnimation?.addListener(({ value }) => {
    const TOLERANCE_HEIGHT = 2;
    setOpacityNumber(value <= TOLERANCE_HEIGHT ? 1 : 0);
  });

  React.useEffect(() => {
    if (opacityNumber > 0) {
      fadeInAnimation(0, 1);
    } else {
      fadeInAnimation(1, 0);
    }
  }, [fadeInAnimation, opacityNumber]);

  const backgroundColor = React.useMemo(() => {
    if (opacityNumber === 1) {
      return colors[backgroundSticky] || backgroundSticky;
    }
    return colors[background] || background;
  }, [background, backgroundSticky, opacityNumber, colors]);

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
          <View
            style={StyleSheet.flatten([
              styles.icon,
              rightIcon && !leftIcon && styles.hideIcon,
            ])}
          >
            {leftIcon || rightIcon}
          </View>

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

          <View
            style={StyleSheet.flatten([
              styles.icon,
              !rightIcon && leftIcon && styles.hideIcon,
            ])}
          >
            {leftIcon || rightIcon}
          </View>
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
      marginBottom: scale(5),
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
    paddingBottom: scale(5),
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  dynamicHead: {
    overflow: 'hidden',
  },
  defaultTitle: {
    flex: 1,
    paddingHorizontal: scale(16),
  },
  title: Platform.select({
    ios: {
      fontSize: 17,
      textAlign: 'center',
      fontWeight: '600',
      marginBottom: scale(5),
    },
    android: {
      fontSize: 20,
      textAlign: 'left',
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
      marginBottom: scale(7),
    },
    default: {
      fontSize: 18,
      textAlign: 'left',
      fontWeight: '500',
      marginBottom: scale(7),
    },
  }),
});
