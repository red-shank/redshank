import React from 'react';
import { StyleSheet } from 'react-native';

import { HelperText } from '../../utils/HelperText';
import { RadioSquare } from './RadioSquare';
import type { NumberStringValue, RadioGroupButtonProps } from './types';
import { SxProps } from '../../lib/styleDictionary';
import { Box } from '../Box';

export const RadioButton: React.FC<RadioGroupButtonProps & SxProps> = ({
  options,
  value,
  error,
  onChange,
  helperText,
  defaultValue,
  backgroundColors,
  labelColors,
  size = 'middle',
  itemSx = {},
  borderRadius: borderRadiusProp = 20,
  ...sxProps
}) => {
  const [internalValue, setInternalValue] =
    React.useState<NumberStringValue>('');

  const onInternalChange = (val: NumberStringValue) => {
    setInternalValue(val);
    onChange && onChange(val);
  };

  React.useEffect(() => {
    setInternalValue((prev) => {
      if (prev !== value) {
        return value;
      }
      return prev;
    });
  }, [value]);

  React.useEffect(() => {
    setInternalValue((prev) => {
      if (!prev) {
        return defaultValue;
      }
      return prev;
    });
  }, [defaultValue]);

  return (
    <Box style={StyleSheet.flatten([styles.wrapper])} {...sxProps}>
      <Box
        gap={0}
        mb={0.1}
        p={0.4}
        flexShrink={0}
        overflow="hidden"
        flexDirection="row"
        flexWrap="nowrap"
        borderRadius={borderRadiusProp}
        backgroundColor={
          backgroundColors?.inactiveColor || 'radioButtonColor.inactive'
        }
      >
        {options.map((option) => {
          return (
            <RadioSquare
              {...option}
              size={size}
              key={option.value}
              onPress={onInternalChange}
              isActive={internalValue === option.value}
              borderRadius={borderRadiusProp}
              sx={{
                ...itemSx,
                flex: 1 / (options?.length || 0)
              }}
              backgroundColors={{
                activeColor:
                  backgroundColors?.activeColor || 'radioButtonColor.active',
                inactiveColor:
                  backgroundColors?.inactiveColor || 'radioButtonColor.inactive'
              }}
              labelColors={{
                activeColor:
                  labelColors?.activeColor || 'radioButtonLabel.active',
                inactiveColor:
                  labelColors?.inactiveColor || 'radioButtonLabel.inactive'
              }}
            />
          );
        })}
      </Box>
      {(error || helperText) && (
        <HelperText color={error ? 'error' : 'text.secondary'}>
          {helperText}
        </HelperText>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10
  },
  vertical: {
    flexDirection: 'column'
  },
  horizontal: {
    flexDirection: 'row'
  }
});
