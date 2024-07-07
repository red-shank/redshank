import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import useTheme from '../../context/theme/useTheme';
import { getSxStyleAndProps } from '../../lib/sx';
import { SxProps } from '../../lib/styleDictionary';

export type TouchableProps = TouchableOpacityProps &
  SxProps & {
    sx?: SxProps;
    Component?: React.ComponentType<any>;
  };

export const Touchable = React.forwardRef<any, TouchableProps>(
  ({ Component = TouchableOpacity, ...props }, ref) => {
    const theme = useTheme();

    const sxResult = getSxStyleAndProps(props, theme);

    return (
      <Component
        {...sxResult?.props}
        style={sxResult?.style}
        activeOpacity={theme.activeOpacity}
        // @ts-ignore
        ref={ref}
      />
    );
  }
);
