import React, { forwardRef } from 'react';
import { StyleSheet, Animated, TouchableOpacity } from 'react-native';

import useTheme from '../../context/theme/useTheme';
import { HelperText } from '../../utils/HelperText';
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
      type = 'circle',
      borderColor = 'primary',
      activeColor = 'input',
      deactiveColor = 'input',
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
    const [isEnabled, setIsEnabled] = React.useState<boolean>(
      defaultValue ?? false
    );

    const onToggleSwitch = () => {
      setIsEnabled((prev) => {
        const newValue = !prev;
        onChange && onChange(newValue);
        return newValue;
      });
    };

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

    const { height, width } = sizesStyle[size];

    const calcSizeToggle: number = height * (type !== 'square' ? 0.75 : 0.7);
    const calcSizeIcon: number = height * 0.4;

    return (
      <Box
        mb={2}
        ref={ref}
        style={[style, styles?.root]}
        sx={{
          ...sx?.root,
          ...sx
        }}
        {...restSxProps}
      >
        <TouchableOpacity
          activeOpacity={activeOpacity}
          onPress={onToggleSwitch}
          style={createSxStyle(
            {
              style: styles?.touchable,
              sx: sx?.touchable
            },
            theme
          )}
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
                sx: sx?.thumb,
                style: styles?.thumb,
                alignItems: isEnabled ? 'flex-end' : 'flex-start',
                rounded: `switch.${type}`,
                borderColor:
                  bordered || error
                    ? error
                      ? 'error'
                      : borderColor
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
                  sx: sx?.toggle,
                  style: styles?.toggle,
                  rounded: `switch.${type}`,
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
        {(error || textError) && (
          <HelperText
            color={error ? 'error' : 'text.secondary'}
            sx={sx?.helperText}
            style={styles?.helperText}
          >
            {textError}
          </HelperText>
        )}
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
