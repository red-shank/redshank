import React, { cloneElement, FC, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';

import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { Icon } from '../Icon';
import { Text } from '../Text';
import { TextError } from '../utils/TextError';
import useTheme from '../Context/theme/useTheme';
import { Ripple } from '../Ripple';
import type { DatePickerProps } from './types';

export const DatePicker: FC<DatePickerProps> = ({
  textError,
  onChange,
  prefix,
  defaultValue,
  value,
  locale = 'en_US',
  suffix = <Icon name="clockcircleo" type="antdesign" />,
  display = Platform.select({
    ios: 'spinner',
    default: undefined
  }),
  mode = 'date',
  format = mode === 'date'
    ? 'YYYY-MM-DD'
    : mode === 'time'
    ? 'hh:mm A'
    : 'YYYY-MM-DD hh:mm A',
  error = false,
  size = 'middle',
  color = 'accents2',
  background = 'inputColor',
  borderInputColor = 'border',
  style = {},
  ...rest
}) => {
  const { colors, isDark, borderRadius, sizes, borderWidth } = useTheme();
  const [date, setDate] = useState<Date>(dayjs().locale(locale).toDate());
  const [show, setShow] = useState(false);

  // states
  const [isError, setError] = React.useState<undefined | boolean>(false);

  const onInternalChange = (selectedDate: any) => {
    setShow(false);
    const currentDate = selectedDate || date;
    setDate(currentDate);
    if (onChange) {
      onChange(currentDate, dayjs(currentDate).format(format));
    }
  };

  const onPress = () => {
    setShow((prev) => !prev);
  };

  const dateText = React.useMemo(() => {
    return dayjs(date).locale(locale).format(format);
  }, [date, format, locale]);

  // effects
  useEffect(() => {
    if (value && typeof value === 'object') {
      setDate(value);
    }
  }, [format, value]);

  useEffect(() => {
    if (defaultValue) {
      setDate((prev) => {
        if (prev) {
          return prev;
        }
        return dayjs(defaultValue, format).toDate();
      });
    }
  }, [defaultValue, format]);

  useEffect(() => {
    setError(error);
  }, [error, textError]);

  return (
    <View>
      <View style={StyleSheet.flatten([styles.wrapper, styles.relative])}>
        <Ripple
          onPress={onPress}
          style={StyleSheet.flatten([
            styles.inputDate,
            styles.wrapper,
            {
              borderWidth,
              height: sizes[size],
              backgroundColor: colors[background] || background,
              borderColor: isError
                ? colors.error
                : colors[borderInputColor] || borderInputColor,
              borderRadius: borderRadius.xl
            },
            prefix && {
              paddingLeft: 35
            },
            suffix && {
              paddingRight: 45
            },
            style
          ])}
        >
          {prefix && (
            <TouchableOpacity
              onPress={onPress}
              style={StyleSheet.flatten([styles.wrapperIcon, { left: 0 }])}
            >
              <View style={styles.icon}>
                {cloneElement(prefix, {
                  color: colors.border,
                  ...prefix.props
                })}
              </View>
            </TouchableOpacity>
          )}
          <Text color={isError ? colors.error : colors[color] || color}>
            {dateText}
          </Text>
        </Ripple>

        {suffix && (
          <TouchableOpacity
            onPress={onPress}
            style={StyleSheet.flatten([styles.wrapperIcon, { right: 0 }])}
          >
            <View style={styles.icon}>
              {React.cloneElement(suffix, {
                color: colors.border,
                ...suffix.props
              })}
            </View>
          </TouchableOpacity>
        )}
      </View>
      {isError && textError && <TextError>{textError}</TextError>}

      <DateTimePickerModal
        mode={mode}
        date={date}
        isVisible={show}
        display={display}
        locale={locale}
        onCancel={onPress}
        isDarkModeEnabled={isDark}
        onConfirm={onInternalChange}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  relative: {
    position: 'relative'
  },
  wrapper: {
    justifyContent: 'center'
  },
  inputDate: {
    paddingRight: 10,
    paddingLeft: 10
  },
  wrapperIcon: {
    position: 'absolute',
    width: 40,
    backgroundColor: 'transparent'
  },
  icon: {}
});
