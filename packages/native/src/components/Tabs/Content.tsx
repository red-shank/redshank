import React from 'react';
import { Animated } from 'react-native';
import { BoxProps } from '../Box';
import { getSxStyleAndProps } from '../../lib/sx';
import useTheme from '../../context/theme/useTheme';

export default function Content(restProps: BoxProps) {
  const opacityRef = React.useRef(new Animated.Value(0.4)).current;

  React.useEffect(() => {
    Animated.timing(opacityRef, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true
    }).start();
  }, [opacityRef]);

  const { props, style } = getSxStyleAndProps(
    {
      opacity: opacityRef,
      ...restProps
    },
    useTheme()
  );

  return <Animated.View style={style} {...props} />;
}
