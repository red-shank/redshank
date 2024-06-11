import React, {
  useMemo,
  useRef,
  useEffect,
  useCallback,
  useState
} from 'react';
import { Animated, Platform, StyleSheet, View } from 'react-native';

import useTheme from '../../context/theme/useTheme';
import useHeaderHeight from '../../hooks/useHeaderHeight';
import { HeaderProps, TitleStickyPosition } from './types';
import { getResolveValue } from './utils';
import createSxStyle from '../../lib/sx';
import { Box } from '../Box';

const defaultTitlePosition = Platform.select<{
  initial?: TitleStickyPosition;
  sticky?: TitleStickyPosition;
}>({
  ios: {
    initial: 'center',
    sticky: 'center'
  },
  default: {
    initial: 'left',
    sticky: 'left'
  }
});

const defaultStatusHeight = Platform.select({
  ios: 50,
  android: 70,
  default: 0
});

export function Header<T = unknown>({
  title: _title,
  icon,
  styles,
  animateInHeight,
  setHeightLayout,
  isSticky,
  statusBarHeight = defaultStatusHeight,
  titlePosition: _titlePosition = defaultTitlePosition,
  background: _background = {
    sticky: 'header',
    initial: 'stickyHeader'
  }
}: HeaderProps<T>) {
  const theme = useTheme();
  const defaultHeight = useHeaderHeight();
  const [fadeInText] = useState(new Animated.Value(0));
  const fadeInBackground = useRef(new Animated.Value(0)).current;
  const isFirstTime = useRef(true);

  const title = getResolveValue(_title);
  const background = getResolveValue(_background);
  const titlePosition = getResolveValue<TitleStickyPosition>(_titlePosition);

  const enableAnimation = useMemo(() => {
    return animateInHeight > 0;
  }, [animateInHeight]);

  const backgroundColor = fadeInBackground.interpolate({
    inputRange: [0, 1],
    outputRange: [
      theme.colors?.[background.initial],
      theme.colors?.[background.sticky]
    ]
  });

  const fadeInBackgroundAnimation = useCallback(
    (value: number, end?: number) => {
      if (typeof end === 'number') {
        Animated.timing(fadeInBackground, {
          toValue: value,
          duration: 50,
          useNativeDriver: false
        }).start(() => {
          Animated.timing(fadeInBackground, {
            toValue: end,
            duration: 400,
            useNativeDriver: false
          }).start();
        });
      } else {
        Animated.timing(fadeInBackground, {
          toValue: value,
          duration: 200,
          useNativeDriver: false
        }).start();
      }
    },
    [fadeInBackground]
  );

  const fadeInTextAnimation = useCallback(
    (value: number, end?: number) => {
      if (typeof end === 'number') {
        Animated.parallel([
          Animated.timing(fadeInText, {
            toValue: value,
            duration: 0,
            useNativeDriver: false
          }),
          Animated.timing(fadeInText, {
            toValue: end,
            duration: 500,
            useNativeDriver: false
          })
        ]).start();
      } else {
        Animated.timing(fadeInText, {
          toValue: value,
          duration: 500,
          useNativeDriver: false
        }).start();
      }
    },
    [fadeInText]
  );

  useEffect(() => {
    if (!enableAnimation || isFirstTime.current) {
      fadeInBackgroundAnimation(0);
      fadeInTextAnimation(1);
    } else if (isSticky) {
      fadeInBackgroundAnimation(0, 1);
      fadeInTextAnimation(0, 1);
    } else {
      fadeInBackgroundAnimation(1, 0);
      fadeInTextAnimation(0, 1);
    }

    isFirstTime.current = false;
  }, [
    isSticky,
    enableAnimation,
    fadeInTextAnimation,
    fadeInBackgroundAnimation
  ]);

  const titleBase = useMemo(() => {
    if (!title?.initial) return null;
    if (React.isValidElement(title?.initial)) return title?.initial;

    return (
      <Animated.Text
        aria-level="1"
        numberOfLines={1}
        style={createSxStyle(
          {
            color: 'text',
            sx: isSticky ? styles?.titleSticky : styles?.title,
            textAlign: titlePosition?.[isSticky ? 'sticky' : 'initial'],
            style: StyleSheet.flatten([STYLES.title])
          },
          theme
        )}
      >
        {title?.initial}
      </Animated.Text>
    );
  }, [
    title?.initial,
    styles?.title,
    styles?.titleSticky,
    titlePosition,
    isSticky,
    theme
  ]);

  const titleSticky = useMemo(() => {
    if (!title?.sticky) return null;
    if (React.isValidElement(title?.sticky)) return title?.sticky;

    return (
      <Animated.Text
        aria-level="1"
        numberOfLines={1}
        style={createSxStyle(
          {
            color: 'text',
            sx: isSticky ? styles?.titleSticky : styles?.title,
            textAlign: titlePosition?.[isSticky ? 'sticky' : 'initial'],
            style: StyleSheet.flatten([STYLES.title])
          },
          theme
        )}
      >
        {title?.sticky}
      </Animated.Text>
    );
  }, [
    title?.sticky,
    styles?.title,
    styles?.titleSticky,
    titlePosition,
    isSticky,
    theme
  ]);

  const showIconSpace = useMemo(() => {
    if (isSticky && titlePosition?.sticky === 'center') return true;
    return titlePosition?.initial === 'center';
  }, [isSticky, titlePosition]);

  return (
    <Animated.View
      onLayout={(layout) => {
        setHeightLayout(layout?.nativeEvent?.layout?.height ?? 0);
      }}
      style={[
        createSxStyle(
          {
            width: '100%',
            sx: styles?.header,
            height: defaultHeight || statusBarHeight,
            zIndex: theme?.zIndices.max,
            style: STYLES.header
          },
          theme
        ),
        { backgroundColor }
      ]}
    >
      <Box style={[STYLES.content]}>
        {(icon?.left || showIconSpace) && (
          <View
            style={StyleSheet.flatten([
              STYLES.icon,
              !icon?.left && STYLES.hideIcon
            ])}
          >
            {icon?.left || icon?.right}
          </View>
        )}

        <Animated.View style={[STYLES.defaultTitle, { opacity: fadeInText }]}>
          {isSticky ? titleSticky : titleBase}
        </Animated.View>

        {(icon?.right || showIconSpace) && (
          <View
            style={StyleSheet.flatten([
              STYLES.icon,
              !icon?.right && STYLES.hideIcon
            ])}
          >
            {icon?.right || icon?.left}
          </View>
        )}
      </Box>
    </Animated.View>
  );
}

const STYLES = StyleSheet.create({
  wrapper: {},
  icon: Platform.select({
    ios: {},
    default: {
      marginBottom: 5
    }
  }),
  hideIcon: {
    opacity: 0
  },
  header: {
    top: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    borderWidth: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
    justifyContent: 'flex-end'
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 5,
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  defaultTitle: {
    flex: 1,
    paddingHorizontal: 16
  },
  title: Platform.select({
    ios: {
      fontSize: 17,
      textAlign: 'center',
      fontWeight: '600',
      marginBottom: 5
    },
    android: {
      fontSize: 20,
      textAlign: 'left',
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
      marginBottom: 7
    },
    default: {
      fontSize: 18,
      textAlign: 'left',
      fontWeight: '500',
      marginBottom: 7
    }
  })
});
