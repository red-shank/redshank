import React, { forwardRef } from 'react';
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from 'react-native';

import { Text } from '../Text';
import { Ripple } from '../Ripple';
import useTheme from '../../context/theme/useTheme';
import type { CheckboxProps } from './types';
import { Box } from '../Box';

export const Checkbox = forwardRef<TouchableWithoutFeedback, CheckboxProps>(
  (
    {
      onChange,
      label,
      inactiveColor = 'accents.2',
      activeColor = 'primary',
      value,
      required = false,
      defaultValue = false,
      type = 'circle',
      size = 'middle',
      error = false
    },
    ref
  ) => {
    const theme = useTheme();
    const [active, setActive] = React.useState<boolean>(false);
    const [state] = React.useState({
      fadeAnim: new Animated.Value(0)
    });

    const fadeInAnimation = React.useCallback(() => {
      Animated.timing(state.fadeAnim, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true
      }).start(() => {
        Animated.timing(state.fadeAnim, {
          toValue: 1,
          duration: 500,
          delay: 10,
          useNativeDriver: true
        }).start();
      });
    }, [state.fadeAnim]);

    const onInternalPress = () => {
      setActive((prev) => {
        onChange && onChange(!prev);
        return !prev;
      });
    };

    React.useEffect(() => {
      if (active) {
        fadeInAnimation();
      }
    }, [active, fadeInAnimation]);

    React.useEffect(() => {
      setActive((prev) => {
        if (!prev) {
          return defaultValue;
        }
        return prev;
      });
    }, [defaultValue]);

    React.useEffect(() => {
      value !== undefined && setActive(value);
    }, [value]);

    const borderR = theme.borderRadius[`radio.${type}`];

    return (
      <Ripple
        ref={ref}
        onPress={onInternalPress}
        style={StyleSheet.flatten([styles.container])}
      >
        <Box
          borderRadius={borderR}
          borderColor={active ? activeColor : error ? 'error' : inactiveColor}
          style={StyleSheet.flatten([styles.radioButton, sizes[size]])}
        >
          <Animated.View style={styleAnimation(active, state.fadeAnim)}>
            <Box
              sx={StyleSheet.flatten([
                {
                  borderWidth: 1,
                  borderRadius: borderR - 2,
                  backgroundColor: active ? activeColor : 'transparent',
                  borderColor: active ? activeColor : 'transparent'
                },
                internalSizes[size]
              ])}
            />
          </Animated.View>
        </Box>
        {/* label */}
        <View style={StyleSheet.flatten([styles.labelView, styles.flexOne])}>
          {required && <Text color="error">*</Text>}
          <Text
            style={styles.flexOne}
            color={error && !active ? 'error' : 'text.main'}
          >
            {label}
          </Text>
        </View>
      </Ripple>
    );
  }
);

const styleAnimation = (active: boolean, value: any) => {
  return active ? value : 0;
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center'
  },
  radioButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  labelView: {
    paddingRight: 8,
    paddingLeft: 8,
    flexDirection: 'row'
  },
  flexOne: {
    flex: 1
  }
});

const sizes = StyleSheet.create({
  small: {
    width: 16,
    height: 16
  },
  middle: {
    width: 24,
    height: 24
  },
  large: {
    width: 34,
    height: 34
  }
});

const internalSizes = StyleSheet.create({
  small: {
    width: 8,
    height: 8
  },
  middle: {
    width: 12,
    height: 12
  },
  large: {
    width: 17,
    height: 17
  }
});
