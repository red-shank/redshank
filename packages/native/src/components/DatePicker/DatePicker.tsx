import dayjs from 'dayjs';
import React, { forwardRef, useEffect, useState } from 'react';
import { Platform, DimensionValue } from 'react-native';

import useTheme from '../../context/theme/useTheme';
import type { DatePickerProps } from './types';
import { Calendar } from '../Calendar';
import { Box } from '../Box';
import createSxStyle from '../../lib/sx';
import { Modal } from '../Modal';
import { InputBox } from '../Input/InputBox';
import { ClockIcon } from '../../icons';

export const DatePicker = forwardRef<any, DatePickerProps>(
  (
    {
      helperText,
      onChange,
      startContent,
      defaultValue,
      value,
      shape = 'rounded',
      locale = 'en',
      format = 'YYYY-MM-DD',
      error = false,
      size = 'middle',
      color = 'accents.2',
      background = 'input',
      borderColor = 'border',
      endContent = <ClockIcon fill={borderColor} size={20} />,
      style = {},
      placeholder,
      sx,
      styles,
      isDisabled,
      ...restProps
    },
    ref
  ) => {
    const theme = useTheme();
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
      <Box ref={ref} sx={sx?.root} style={[style, styles?.root]} {...restProps}>
        <InputBox
          onPress={onPress}
          style={style}
          sx={sx}
          borderColor={borderColor}
          endContent={endContent}
          text={dateText}
          placeholder={placeholder}
          error={error}
          size={size}
          styles={styles}
          isDisabled={isDisabled}
          color={color}
          startContent={startContent}
          background={background}
          shape={shape}
          helperText={helperText}
        />

        <Modal
          visible={show}
          // transparent
          closable={false}
          // animationType="fade"
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
              default: theme.width <= 475 ? '100%' : 475
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
                  paddingHorizontal: 6,
                  borderRadius: 20
                }
              }}
            />
          </Box>
        </Modal>
      </Box>
    );
  }
);
