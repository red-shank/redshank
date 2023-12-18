import React from 'react';
import { StyleSheet } from 'react-native';

import { TextError } from '../../utils/TextError';
import { RadioSquare } from './RadioSquare';
import type { NumberStringValue, RadioGroupProps } from './types';
import { SxProps } from '../../lib/styleDictionary';
import { Box } from '../Box';

export const RadioButton: React.FC<RadioGroupProps & SxProps> = ({
  options,
  value,
  error,
  onChange,
  textError,
  defaultValue,
  backgroundColors,
  labelColors,
  size = 'middle',
  itemSx = {},
  borderRadius: borderRadiusProp = 'max',
  ...sxProps
}) => {
  const [internalValue, setInternalValue] =
    React.useState<NumberStringValue>('');
  const [isError, setError] = React.useState<undefined | boolean>(false);

  const onInternalChange = (val: NumberStringValue) => {
    setInternalValue(val);
    setError(false);
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

  React.useEffect(() => {
    typeof error === 'boolean' && setError(error);
  }, [error]);

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
          backgroundColors?.inactiveColor || 'radioButtonInactiveBackground'
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
                  backgroundColors?.activeColor ||
                  'radioButtonActiveBackground',
                inactiveColor:
                  backgroundColors?.inactiveColor ||
                  'radioButtonInactiveBackground'
              }}
              labelColors={{
                activeColor:
                  labelColors?.activeColor || 'radioButtonActiveText',
                inactiveColor:
                  labelColors?.inactiveColor || 'radioButtonInactiveLabel'
              }}
            />
          );
        })}
      </Box>
      {isError && textError && <TextError>{textError}</TextError>}
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
