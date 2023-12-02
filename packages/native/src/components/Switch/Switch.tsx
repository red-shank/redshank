import React from 'react';
import { StyleSheet, Animated, TouchableOpacity, View } from 'react-native';

import useTheme from '../../context/theme/useTheme';
import { TextError } from '../../utils/TextError';
import type { SwitchProps } from './types';
import { scale } from 'react-native-size-matters';

export const Switch: React.FC<SwitchProps> = ({
  value,
  defaultValue,
  onChange,
  textError,
  bordered,
  type = 'rounded',
  borderColor = 'primary',
  activeColor = 'inputColor',
  deactiveColor = 'inputColor',
  thumbActiveColor = 'primary',
  thumbDisabledColor = 'border',
  error = false,
  size = 'middle',
  style = {},
  thumbStyle = {},
  icon,
}) => {
  const { colors, activeOpacity, borderRadius, borderWidth } = useTheme();
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

  const _borderColor = colors[borderColor] || borderColor;
  const _thumbActiveColor = colors[thumbActiveColor] || thumbActiveColor;
  const _thumbDisabledColor = colors[thumbDisabledColor] || thumbDisabledColor;
  const _activeColor = colors[activeColor] || activeColor;
  const _deactiveColor = colors[deactiveColor] || deactiveColor;

  const { height, width } = styles[size];

  const calcSizeToggle: number = height * (type === 'rounded' ? 0.75 : 0.7);
  const calcSizeIcon: number = height * 0.4;

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity activeOpacity={activeOpacity} onPress={onToggleSwitch}>
        <Animated.View
          style={StyleSheet.flatten([
            styles.content,
            {
              width,
              height,
              borderWidth,
              alignItems: isEnabled ? 'flex-end' : 'flex-start',
              borderRadius: type === 'rounded' ? height : borderRadius.sm,
              backgroundColor: isEnabled
                ? _thumbActiveColor
                : _thumbDisabledColor,
            },
            bordered && { borderColor: isError ? colors.error : _borderColor },
            thumbStyle,
          ])}
        >
          <Animated.View
            style={StyleSheet.flatten([
              styles.animation,
              {
                width: calcSizeToggle,
                height: calcSizeToggle,
                borderRadius:
                  type === 'rounded' ? calcSizeToggle : borderRadius.xs,
                backgroundColor: isEnabled ? _activeColor : _deactiveColor,
              },
              style,
            ])}
          >
            {icon &&
              isEnabled &&
              React.cloneElement(icon.true as any, {
                size: calcSizeIcon,
                color:
                  // @ts-ignore
                  icon.true?.props?.color || 'text',
              })}
            {icon &&
              !isEnabled &&
              React.cloneElement(icon.false as any, {
                size: calcSizeIcon,
                color:
                  // @ts-ignore
                  icon.false?.props?.color || 'text',
              })}
          </Animated.View>
        </Animated.View>
      </TouchableOpacity>
      {isError && textError && <TextError>{textError}</TextError>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
  },
  content: {
    borderStyle: 'solid',
    paddingHorizontal: scale(3),
    position: 'relative',
    justifyContent: 'center',
  },
  animation: {
    marginTop: 'auto',
    marginBottom: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  small: {
    width: scale(32),
    height: scale(20),
  },
  middle: {
    width: scale(44),
    height: scale(28),
  },
  large: {
    width: scale(64),
    height: scale(36),
  },
});
