import React, { cloneElement, FC, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import DateTimePickerModal, {
  DateTimePickerProps,
} from 'react-native-modal-datetime-picker';

import { Icon } from '../Icon';
import { Text } from '../Text';
import { TextError } from '../utils/TextError';
import useTheme from '../Context/theme/useTheme';
import type { ColorType } from '../Context/theme/types';
import { SizeType, sizes } from '../@types/input';

export interface DatePickerProps
  extends Omit<DateTimePickerProps, 'onChange' | 'onCancel' | 'onConfirm'> {
  size?: SizeType;
  value?: Date | string;
  defaultValue?: Date | string;
  prefix?: JSX.Element;
  suffix?: JSX.Element | null | false;
  textError?: string;
  error?: boolean;
  placeholder?: string;
  color?: ColorType;
  background?: ColorType;
  borderInputColor?: ColorType;
  format?: string;
  style?: StyleProp<ViewStyle>;
  onChange?: (d: string, date: Date) => void;

  // rest DatePickerModal props https://github.com/mmazzarolo/react-native-modal-datetime-picker
  [key: string]: unknown;
}

export const DatePicker: FC<DatePickerProps> = ({
  textError,
  onChange,
  prefix,
  defaultValue,
  value,
  suffix = <Icon name="clockcircleo" type="antdesign" />,
  display = 'spinner',
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
  const { colors, isDark, borderRadius } = useTheme();
  const [date, setDate] = useState<Date>();
  const [show, setShow] = useState(false);

  // states
  const [isError, setError] = React.useState<undefined | boolean>(false);

  const onInternalChange = (selectedDate: any) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShow(false);
    if (onChange) {
      onChange(dayjs(currentDate).format(format), currentDate);
    }
  };

  const onPress = () => {
    setShow((prev) => !prev);
  };

  const dateText = React.useMemo(() => {
    return dayjs(date).format(format);
  }, [date, format]);

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
    <View
      style={StyleSheet.flatten([
        {
          position: 'relative',
        },
      ])}
    >
      <TouchableOpacity
        onPress={onPress}
        style={StyleSheet.flatten([
          styles.inputDate,
          {
            backgroundColor: colors[background] || background,
            borderColor: isError
              ? colors.error
              : colors[borderInputColor] || borderInputColor,
            borderRadius: borderRadius.xl,
          },
          prefix && {
            paddingLeft: 35,
          },
          suffix && {
            paddingRight: 45,
          },
          sizes[size],
          style,
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
                ...prefix.props,
              })}
            </View>
          </TouchableOpacity>
        )}
        <Text color={isError ? colors.error : colors[color] || color}>
          {dateText}
        </Text>
      </TouchableOpacity>

      <DateTimePickerModal
        mode={mode}
        date={date}
        isVisible={show}
        // @ts-ignore
        display={display}
        onCancel={onPress}
        isDarkModeEnabled={isDark}
        onConfirm={onInternalChange}
        {...rest}
      />

      {suffix && (
        <TouchableOpacity
          onPress={onPress}
          style={StyleSheet.flatten([styles.wrapperIcon, { right: 0 }])}
        >
          <View style={styles.icon}>
            {React.cloneElement(suffix, {
              color: colors.border,
              ...suffix.props,
            })}
          </View>
        </TouchableOpacity>
      )}
      {isError && textError && <TextError>{textError}</TextError>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputDate: {
    borderWidth: 1,
    marginBottom: 22,
  },
  wrapperIcon: {
    position: 'absolute',
    width: 40,
    height: '100%',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  icon: {
    marginTop: -20,
  },
});
