import dayjs from 'dayjs';
import React, { cloneElement, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Modal, Platform } from 'react-native';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { TextError } from '../../utils/TextError';
import useTheme from '../../context/theme/useTheme';
import { Ripple } from '../Ripple';
import { Calendar } from '../Calendar';
import { MIN_PADDING_VERTICAL } from '../Modal';
import { Box } from '../Box';
export const DatePicker = ({ textError, onChange, prefix, defaultValue, value, locale = 'en', suffix = <Icon name="clockcircleo" type="ant-design"/>, mode = 'date', format = mode === 'date'
    ? 'YYYY-MM-DD'
    : mode === 'time'
        ? 'hh:mm A'
        : 'YYYY-MM-DD hh:mm A', error = false, size = 'middle', color = 'accents2', background = 'inputColor', borderInputColor = 'border', style = {}, placeholder }) => {
    const { colors, borderRadius, sizes, width, paddingSizes, borderWidth } = useTheme();
    const [date, setDate] = useState(dayjs().locale(locale));
    const [show, setShow] = useState(false);
    // states
    const [isError, setError] = React.useState(false);
    const onApplyDate = (selectedDate) => {
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
    useEffect(() => {
        if (defaultValue) {
            setDate((prev) => {
                if (prev) {
                    return prev;
                }
                return dayjs(defaultValue, format);
            });
        }
    }, [defaultValue, format]);
    useEffect(() => {
        setError(error);
    }, [error, textError]);
    return (<View>
      <View style={StyleSheet.flatten([styles.wrapper, styles.relative])}>
        <Ripple onPress={onPress} style={StyleSheet.flatten([
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
        ])}>
          {prefix && (<TouchableOpacity onPress={onPress} style={StyleSheet.flatten([styles.wrapperIcon, { left: 0 }])}>
              <View style={styles.icon}>
                {cloneElement(prefix, {
                color: colors.border,
                ...prefix.props
            })}
              </View>
            </TouchableOpacity>)}
          <Text color={isError ? colors.error : colors[color] || color}>
            {dateText || placeholder}
          </Text>
        </Ripple>

        {suffix && (<TouchableOpacity onPress={onPress} style={StyleSheet.flatten([styles.wrapperIcon, { right: 0 }])}>
            <View style={styles.icon}>
              {React.cloneElement(suffix, {
                color: colors.border,
                ...suffix.props
            })}
            </View>
          </TouchableOpacity>)}
      </View>
      {isError && textError && <TextError>{textError}</TextError>}

      <Modal visible={show} transparent>
        <Box style={StyleSheet.flatten([
            styles.modal,
            {
                backgroundColor: colors.modalMask,
                paddingHorizontal: paddingSizes.card,
                paddingVertical: MIN_PADDING_VERTICAL * 1.5
            }
        ])}>
          <Box width={Platform.select({
            android: '100%',
            ios: '100%',
            default: width <= 450 ? '100%' : 450
        })} mx="auto">
            <Calendar locale={locale} backgroundColor={background} selected={date.toISOString()} onSelectedDate={onApplyDate} onClose={() => setShow(false)} styles={{
            layout: {
                paddingTop: 20,
                borderRadius: borderRadius.modal
            }
        }}/>
          </Box>
        </Box>
      </Modal>
    </View>);
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
    icon: {},
    modal: {
        flex: 1,
        justifyContent: 'center'
    }
});
