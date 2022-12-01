import React from 'react';
import { scale } from 'react-native-size-matters';
import { StyleSheet, Animated, Easing } from 'react-native';

import { Text } from '../Text';
import { Ripple } from '../Ripple';
import { useCollapse } from './Context';
import useTheme from '../Context/theme/useTheme';
import type { CollapseInternalItemProps, CollapseItemProps } from './types';

const animationDuration = 150;

const Panel: React.FC<CollapseItemProps> = (props) => {
  let rotateAnimation = React.useRef<Animated.Value>(
    new Animated.Value(0)
  ).current;
  let fadeAnimation = React.useRef<Animated.Value>(
    new Animated.Value(0)
  ).current;
  let heightAnimation = React.useRef<Animated.Value>(
    new Animated.Value(0)
  ).current;

  const [isInternalOpen, setIsInternalOpen] = React.useState<boolean>(false);

  const { colors, paddingSizes, fontSizes, borderRadius } = useTheme();

  const {
    openKeys,
    onChange,
    icon,
    borderColor,
    iconPosition,
    showArrow,
    headerColor,
    contentColor,
    borderless,
  } = useCollapse();

  const {
    id,
    title,
    disabled,
    children,
    subTitle,
    styleHeader,
    styleContent,
    isFirstElement,
    isLastElement,
  } = props as CollapseInternalItemProps;

  const isOpen = openKeys.includes(id);
  const spin = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  });

  // memos
  const internalOpenIcon = React.useMemo(() => {
    if (icon && showArrow) {
      return (
        <Animated.View
          style={StyleSheet.flatten([
            { transform: [{ rotate: spin }] },
            iconPosition === 'left' && styles.iconLeft,
            iconPosition === 'right' && styles.iconRight,
          ])}
        >
          {React.cloneElement(icon as any, {
            color: disabled ? 'accents7' : 'text',
          })}
        </Animated.View>
      );
    }
    return null;
  }, [icon, iconPosition, showArrow, spin, disabled]);

  const startInAnimation = React.useCallback(() => {
    // height animation
    Animated.timing(heightAnimation, {
      toValue: 0,
      duration: animationDuration * 3,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(heightAnimation, {
        toValue: 1,
        duration: animationDuration * 3,
        useNativeDriver: true,
      }).start();
    });

    // fadeIn animation
    Animated.timing(fadeAnimation, {
      toValue: 1,
      delay: animationDuration,
      duration: animationDuration,
      useNativeDriver: true,
    }).start();

    setIsInternalOpen(true);
  }, [fadeAnimation, heightAnimation]);

  const startOutAnimation = React.useCallback(() => {
    // height animation
    Animated.timing(heightAnimation, {
      toValue: 1,
      duration: animationDuration * 3,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(heightAnimation, {
        toValue: 0,
        duration: animationDuration * 3,
        useNativeDriver: true,
      }).start();
    });

    // fadeIn animation
    Animated.timing(fadeAnimation, {
      toValue: 0,
      delay: animationDuration,
      duration: animationDuration,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      setIsInternalOpen(false);
    }, animationDuration * 0.7);
  }, [fadeAnimation, heightAnimation]);

  const onInternalChange = () => {
    onChange(id);
  };

  // effects
  React.useEffect(() => {
    // First set up animation
    Animated.timing(rotateAnimation, {
      toValue: isOpen ? 1 : 0,
      duration: 150,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true, // To make use of native driver for performance
    }).start();
    if (isOpen) {
      startInAnimation();
    } else {
      startOutAnimation();
    }
  }, [isOpen, rotateAnimation, startInAnimation, startOutAnimation]);

  return (
    <Animated.View>
      <Ripple
        disabled={disabled}
        disableRipple={false}
        disableTransform={true}
        onPress={onInternalChange}
        style={StyleSheet.flatten([
          styles.header,
          {
            paddingVertical: paddingSizes.lg,
            paddingHorizontal: paddingSizes.card,
            borderTopWidth: isFirstElement || borderless ? 0 : 1,
            borderColor: colors[borderColor] || borderColor,
            backgroundColor: colors[headerColor] || headerColor,
          },
          isFirstElement && {
            borderTopLeftRadius: borderRadius.card,
            borderTopRightRadius: borderRadius.card,
          },
          isLastElement &&
            !isOpen && {
              borderBottomLeftRadius: borderRadius.card,
              borderBottomRightRadius: borderRadius.card,
            },
          styleHeader,
        ])}
      >
        <>
          {iconPosition === 'left' ? internalOpenIcon : null}
          <Animated.View style={styles.headerContent}>
            {typeof title === 'string' || typeof title === 'number' ? (
              <Text
                fontWeight="500"
                size={fontSizes.sm}
                color={disabled ? 'accents7' : 'text'}
              >
                {title}
              </Text>
            ) : (
              React.cloneElement(title as any, {
                color: disabled ? 'accents7' : 'text',
              })
            )}

            {typeof subTitle === 'string' ? (
              <Text
                size={fontSizes.xs}
                color={disabled ? 'accents7' : 'accents5'}
              >
                {subTitle}
              </Text>
            ) : subTitle ? (
              React.cloneElement(subTitle as any, {
                color: disabled ? 'accents7' : 'accents5',
              })
            ) : null}
          </Animated.View>
          {iconPosition === 'right' ? internalOpenIcon : null}
        </>
      </Ripple>
      <Animated.View
        style={StyleSheet.flatten([
          styles.content,
          {
            display: isInternalOpen || isOpen ? 'flex' : 'none',
            paddingTop: paddingSizes.card / 2,
            paddingBottom: paddingSizes.card,
            paddingHorizontal: paddingSizes.card,
            backgroundColor: colors[contentColor] || contentColor,
          },
          isLastElement &&
            (isInternalOpen || isOpen) && {
              borderBottomLeftRadius: borderRadius.card,
              borderBottomRightRadius: borderRadius.card,
            },
          styleContent,
        ])}
      >
        <Animated.View
          style={StyleSheet.flatten([
            {
              opacity: fadeAnimation,
            },
          ])}
        >
          {typeof children === 'string' || typeof children === 'number' ? (
            <Text>{children}</Text>
          ) : (
            children
          )}
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContent: {
    flex: 1,
  },
  content: {
    backgroundColor: 'transparent',
  },
  iconLeft: {
    marginRight: scale(5),
  },
  iconRight: {
    marginLeft: scale(5),
  },
});

export default Panel;
