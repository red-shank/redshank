import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { useKeyboardHeight } from '../../hooks/useKeyboardHeight';
import { SxProps } from '../../lib/styleDictionary';

export type KeyboardSpaceProps = {
  // sx?: SxProps;
};

export const KeyboardSpace: React.FC<KeyboardSpaceProps> = (props) => {
  const keyboardHeight = useKeyboardHeight();
  const animatedState = useRef(true);
  const animatedHeight = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (keyboardHeight === 0 && animatedState.current) {
      Animated.timing(animatedHeight, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false
      }).start(() => {
        animatedState.current = false;
      });
    } else if (!animatedState.current) {
      Animated.timing(animatedHeight, {
        toValue: keyboardHeight,
        duration: 200,
        useNativeDriver: false
      }).start(() => {
        animatedState.current = true;
      });
    }
  }, [animatedState, animatedHeight, keyboardHeight]);

  return (
    <Animated.View
      {...props}
      style={{
        height: animatedHeight
      }}
      // height={keyboardHeight}
      // width="100%" opacity={1}
    />
  );
};
