import React, { forwardRef } from 'react';
import { StyleSheet, Animated, TouchableOpacity } from 'react-native';

import useTheme from '../../context/theme/useTheme';
import { TextError } from '../../utils/TextError';
import type { SwitchProps } from './types';
import { Box } from '../Box';
import createSxStyle from '../../lib/sx';

export const Switch: React.FC<SwitchProps> = forwardRef<any, SwitchProps>(
  (
    {
      value,
      defaultValue,
      onChange,
      textError,
      bordered,
      styles,
      type = 'rounded',
      borderColor = 'primary',
      activeColor = 'inputColor',
      deactiveColor = 'inputColor',
      thumbActiveColor = 'primary',
      thumbDisabledColor = 'border',
      error = false,
      size = 'middle',
      style = {},
      icon,
      sx,
      ...restSxProps
    },
    ref
  ) => {
    const theme = useTheme();
    const { activeOpacity, borderWidth } = useTheme();
    const [isError, setError] = React.useState<undefined | boolean>(false);
    const [isEnabled, setIsEnabled] = React.useState<boolean>(
      defaultValue ?? false
    );

    const onToggleSwitch = () => {
      setError(false);
      setIsEnabled((prev) => {
        const newValue = !prev;
        onChange && onChange(newValue);
        return newValue;
      });
    };

    // React.useEffect(() => {
    //   typeof defaultValue === 'boolean' &&
    //     setIsEnabled((prev) => {
    //       if (prev !== defaultValue) {
    //         onChange && onChange(defaultValue);
    //         return defaultValue;
    //       }
    //       return prev;
    //     });
    // }, [defaultValue, onChange]);

    React.useEffect(() => {
      if (typeof value === 'boolean') {
        setIsEnabled((prev) => {
          if (prev !== value) {
            onChange && onChange(value);
            return value;
          }
          return prev;
        });
      }
    }, [value, onChange]);

    React.useEffect(() => {
      typeof error === 'boolean' && setError(error);
    }, [error]);

    const { height, width } = sizesStyle[size];

    const calcSizeToggle: number = height * (type === 'rounded' ? 0.75 : 0.7);
    const calcSizeIcon: number = height * 0.4;

    return (
      <Box
        mb={2}
        ref={ref}
        style={style}
        sx={{
          ...styles?.root,
          ...sx
        }}
        {...restSxProps}
      >
        <TouchableOpacity
          activeOpacity={activeOpacity}
          onPress={onToggleSwitch}
          style={createSxStyle(styles?.touchable, theme)}
        >
          <Animated.View
            style={createSxStyle(
              {
                borderStyle: 'solid',
                px: 0.4,
                position: 'relative',
                justifyContent: 'center',
                width,
                height,
                borderWidth,
                sx: styles?.thumb,
                alignItems: isEnabled ? 'flex-end' : 'flex-start',
                borderRadius: type === 'rounded' ? 10 : 0.9,
                borderColor:
                  bordered || isError
                    ? isError
                      ? 'error'
                      : borderColor || 'borderColor'
                    : 'transparent',
                backgroundColor: isEnabled
                  ? thumbActiveColor
                  : thumbDisabledColor
              },
              theme
            )}
          >
            <Animated.View
              style={createSxStyle(
                {
                  my: 'auto',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: calcSizeToggle,
                  height: calcSizeToggle,
                  sx: styles?.toggle,
                  borderRadius: type === 'rounded' ? 10 : 0.65,
                  backgroundColor: isEnabled ? activeColor : deactiveColor
                },
                theme
              )}
            >
              {icon &&
                isEnabled &&
                React.cloneElement(icon.true as any, {
                  size: calcSizeIcon,
                  color: icon.true?.props?.color || 'text'
                })}
              {icon &&
                !isEnabled &&
                React.cloneElement(icon.false as any, {
                  size: calcSizeIcon,
                  color: icon.false?.props?.color || 'text'
                })}
            </Animated.View>
          </Animated.View>
        </TouchableOpacity>
        {isError && textError && <TextError>{textError}</TextError>}
      </Box>
    );
  }
);

const sizesStyle = StyleSheet.create({
  small: {
    width: 32,
    height: 18
  },
  middle: {
    width: 40,
    height: 22
  },
  large: {
    width: 54,
    height: 30
  }
});
