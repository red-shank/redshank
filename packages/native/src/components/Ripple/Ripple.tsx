/*
 * Code is based in https://github.com/n4kz/react-native-material-ripple
 */
import React from 'react';
import {
  View,
  Animated,
  Easing,
  Platform,
  TouchableWithoutFeedback,
  I18nManager,
  StyleSheet,
} from 'react-native';

import { onAnimationSet } from './utils';
import { styles, radius } from './styles';
import useTheme from '../../context/theme/useTheme';
import type { RippleProps, StateType } from './type';
import WithAnimatedObject = Animated.WithAnimatedObject;

export const Ripple: React.FC<RippleProps> = ({
  nativeID,
  children,
  onPress,
  onLongPress,
  onLayout: onLayoutProp,
  disableTransform,
  disableRipple = false,
  rippleColor = 'hover',
  rippleOpacity = 0.3,
  rippleDuration = 350,
  rippleSize = 0,
  rippleContainerBorderRadius = 0,
  rippleCentered = false,
  rippleSequential = false,
  rippleFades = true,
  disabled = false,
  onRippleAnimation = (animation, callback) => animation.start(callback),
  style,
  ...props
}) => {
  let isMounted = React.useRef<boolean>(true);
  let scale = React.useRef<Animated.Value>(new Animated.Value(1)).current;
  let unique = React.useRef<number>(0).current;

  const { colors } = useTheme();
  const [state, setState] = React.useState<StateType>({
    width: 0,
    height: 0,
    ripples: [],
  });

  const onLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;

    if (typeof onLayoutProp === 'function') {
      onLayoutProp(event);
    }

    setState((prev) => ({ ...prev, width, height }));
  };

  const onAnimationEnd = () => {
    if (isMounted?.current) {
      setState((prev) => ({ ...prev, ripples: prev.ripples.slice(1) }));
    }
  };

  const startRipple = (event) => {
    const { width, height } = state;

    const w2 = 0.5 * width;
    const h2 = 0.5 * height;

    const defaultLocations = { locationX: w2, locationY: h2 };

    const locationX = rippleCentered
      ? defaultLocations.locationX
      : event?.nativeEvent?.locationX || defaultLocations?.locationX;

    const locationY = rippleCentered
      ? defaultLocations.locationY
      : event?.nativeEvent?.locationY || defaultLocations.locationY;

    const offsetX = Math.abs(w2 - locationX);
    const offsetY = Math.abs(h2 - locationY);

    const R =
      rippleSize > 0
        ? 0.5 * rippleSize
        : Math.sqrt(Math.pow(w2 + offsetX, 2) + Math.pow(h2 + offsetY, 2));

    unique += Math.random() + 1;
    let ripple = {
      unique: unique,
      progress: new Animated.Value(0),
      locationX,
      locationY,
      R,
    };

    const animation = Animated.timing(ripple.progress, {
      toValue: 1,
      easing: Easing.out(Easing.ease),
      duration: rippleDuration,
      useNativeDriver: true,
    });

    onRippleAnimation(animation, onAnimationEnd);

    setState((prev) => ({ ...prev, ripples: prev.ripples.concat(ripple) }));
    return null;
  };

  const onPressIn = (event) => {
    !disableTransform && onAnimationSet(scale, 0.95);
    if (typeof props?.onPressIn === 'function') {
      props?.onPressIn(event);
    }
  };

  const onPressOut = (event) => {
    !disableTransform && onAnimationSet(scale, 1);
    if (typeof props?.onPressOut === 'function') {
      props?.onPressOut(event);
      requestAnimationFrame(() => props?.onPressOut(event));
    }
    !disableRipple && startRipple(event);
  };

  const renderRipple = ({
    unique: _unique,
    progress,
    locationX,
    locationY,
    R,
  }) => {
    const rippleStyle = {
      top: locationY - radius,
      [I18nManager.isRTL ? 'right' : 'left']: locationX - radius,
      backgroundColor: colors[rippleColor] || rippleColor,

      transform: [
        {
          scale: progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0.5 / radius, R / radius],
          }),
        },
      ],

      opacity: rippleFades
        ? progress.interpolate({
            inputRange: [0, 1],
            outputRange: [rippleOpacity, 0],
          })
        : rippleOpacity,
      borderRadius: R / radius,
    };

    return <Animated.View style={[styles.ripple, rippleStyle]} key={_unique} />;
  };

  React.useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const containerStyle = {
    borderRadius: rippleContainerBorderRadius,
  };

  return (
    <TouchableWithoutFeedback
      disabled={disabled}
      onLayout={onLayout}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      onLongPress={onLongPress}
      {...(Platform.OS !== 'web' ? { nativeID } : null)}
    >
      <Animated.View
        {...props}
        hitSlop={props.hitSlop as WithAnimatedObject<any>}
        style={StyleSheet.flatten([
          {
            transform: [
              {
                scale,
              },
            ],
          },
          style,
        ])}
        pointerEvents="box-only"
      >
        {children}
        <View style={[styles.container, containerStyle]}>
          {state.ripples.map(renderRipple)}
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
