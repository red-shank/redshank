import dayjs from 'dayjs';
import React, { cloneElement, FC, useEffect, useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Platform,
  DimensionValue
} from 'react-native';

import { Icon } from '../Icon';
import { Text } from '../Text';
import { HelperText } from '../../utils/HelperText';
import useTheme from '../../context/theme/useTheme';
import { Ripple } from '../Ripple';
import type { DatePickerProps } from './types';
import { Calendar } from '../Calendar';
import { Box } from '../Box';
import { paddingInput } from '../../context/theme/defaultValues';
import createSxStyle from '../../lib/sx';
import { Modal } from '../Modal';

export const DatePicker: FC<DatePickerProps> = ({
  helperText,
  onChange,
  startContent,
  defaultValue,
  value,
  shape = 'rounded',
  locale = 'en',
  endContent = <Icon name="clockcircleo" type="ant-design" />,
  format = 'YYYY-MM-DD',
  error = false,
  size = 'middle',
  color = 'accents.2',
  background = 'input',
  borderColor = 'border',
  style = {},
  placeholder,
  sx,
  styles,
  isDisabled,
  ...restProps
}) => {
  const theme = useTheme();
  const { colors, sizes, width, borderWidth } = useTheme();
  const [date, setDate] = useState<dayjs.Dayjs>(
    dayjs(defaultValue, format).locale(locale)
  );
  const [show, setShow] = useState(false);

  const onApplyDate = (selectedDate: string) => {
    setShow(false);
    const currentDate = dayjs(selectedDate || date);
    setDate(currentDate);
    if (onChange) {
      onChange(currentDate.toDate(), currentDate.format(format));
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
    if (value && typeof value === 'object' && dayjs(value).isValid()) {
      setDate(dayjs(value));
    }
  }, [format, value]);

  return (
    <Box sx={sx?.root} style={[style, styles?.root]} {...restProps}>
      <Box
        sx={sx?.container}
        opacity={isDisabled ? 0.5 : 1}
        style={[_styles.wrapper, _styles.relative, styles?.container]}
      >
        <Ripple
          disableTransform
          onPress={onPress}
          rounded={`input.${shape}`}
          borderWidth={borderWidth}
          height={sizes[size]}
          backgroundColor={background}
          borderColor={error ? 'error' : borderColor}
          pl={startContent ? 4.4 : paddingInput}
          pr={endContent ? 11.25 : paddingInput}
          sx={sx?.toggle}
          style={[_styles.wrapper, style, styles?.toggle]}
        >
          {startContent && (
            <TouchableOpacity
              onPress={onPress}
              style={createSxStyle(
                {
                  left: 0,
                  sx: sx?.wrapperIcon,
                  style: [_styles.wrapperIcon, styles?.wrapperIcon]
                },
                theme
              )}
            >
              <Box sx={sx?.icon} style={[_styles.icon, styles?.icon]}>
                {cloneElement(startContent, {
                  color: colors.border,
                  ...startContent.props
                })}
              </Box>
            </TouchableOpacity>
          )}
          <Text sx={sx?.text} style={styles?.text} color={color}>
            {dateText || placeholder}
          </Text>
        </Ripple>

        {endContent && (
          <TouchableOpacity
            onPress={onPress}
            style={createSxStyle(
              {
                right: 0,
                style: [_styles.wrapperIcon, styles?.wrapperIcon]
              },
              theme
            )}
          >
            <Box sx={sx?.icon} style={[_styles.icon, styles?.icon]}>
              {React.cloneElement(endContent, {
                color: colors.get('border'),
                ...endContent.props
              })}
            </Box>
          </TouchableOpacity>
        )}
      </Box>
      {(error || helperText) && (
        <HelperText
          color={error ? 'error' : 'text.secondary'}
          sx={sx?.helperText}
          style={styles?.helperText}
        >
          {helperText}
        </HelperText>
      )}

      <Modal
        visible={show}
        transparent
        closable={false}
        onClose={() => setShow(false)}
        sx={{
          content: {
            bg: 'transparent'
          }
        }}
        style={createSxStyle(
          {
            sx: sx?.modal,
            style: styles?.modal
          },
          theme
        )}
      >
        <Box
          mx="auto"
          width={Platform.select<DimensionValue>({
            android: '100%',
            ios: '100%',
            default: width <= 450 ? '100%' : 450
          })}
          sx={sx?.modalBody}
          style={styles?.modalBody}
        >
          <Calendar
            locale={locale}
            backgroundColor={background}
            selected={date.toISOString()}
            onChange={onApplyDate}
            onCancel={() => setShow(false)}
            styles={{
              layout: {
                width: '100%',
                padding: 12
              },
              container: {
                paddingTop: 16,
                borderRadius: 20
              }
            }}
          />
        </Box>
      </Modal>
    </Box>
  );
};

const _styles = StyleSheet.create({
  relative: {
    position: 'relative'
  },
  wrapper: {
    justifyContent: 'center'
  },
  wrapperIcon: {
    position: 'absolute',
    width: 40,
    backgroundColor: 'transparent'
  },
  icon: {},
  modal: {
    flex: 1,
    justifyContent: 'center'
  }
});
