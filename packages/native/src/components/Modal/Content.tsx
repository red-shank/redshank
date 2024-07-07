import React from 'react';
import { Animated } from 'react-native';
import useTheme from '../../context/theme/useTheme';

import { ModalContentProps } from './types';
import { getSxStyleAndProps } from '../../lib/sx';

export const Content: React.FC<ModalContentProps> = ({
  children,
  style,
  sx,
  rounded,
  Component = Animated.View,
  ...rest
}) => {
  const theme = useTheme();

  const resolveProps = getSxStyleAndProps(
    {
      p: 3,
      // bg: 'modal',
      flexShrink: 0,
      sx,
      rounded,
      style: style,
      ...rest
    },
    theme
  );

  return (
    // @ts-ignore
    <Component style={resolveProps.style} {...resolveProps.props}>
      {children}
    </Component>
  );
};
