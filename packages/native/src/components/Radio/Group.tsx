import React, { forwardRef } from 'react';
import { StyleSheet } from 'react-native';

import { HelperText } from '../../utils/HelperText';
import { useChildren } from '../../hooks/useChildren';
import { renderChildren } from '../../utils/render';
import type { NumberStringValue, RadioGroupProps, RadioProps } from './types';
import { SxProps } from '../../lib/styleDictionary';
import { Box } from '../Box';

export const Group = forwardRef<any, RadioGroupProps & SxProps>(
  (
    {
      align = 'horizontal',
      children: _children,
      inactiveColor,
      value,
      error,
      onChange,
      size,
      type,
      helperText,
      defaultValue,
      activeColor,
      styles,
      sx,
      style,
      ...sxProps
    },
    ref
  ) => {
    const [internalValue, setInternalValue] =
      React.useState<NumberStringValue>('');

    const children = useChildren(_children);

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
      <Box
        ref={ref}
        mb={1}
        sx={sx?.root}
        style={[style, styles?.root]}
        {...sxProps}
      >
        <Box
          gap={1}
          mb={0.1}
          {...orientation[align]}
          sx={sx?.container}
          style={styles?.container}
        >
          {renderChildren<RadioProps>(children, (child) => ({
            isActive: internalValue === child?.props?.value,
            activeColor: error ? 'error' : activeColor,
            deactiveColor: error ? 'error' : inactiveColor,
            size,
            type,
            ...(child?.props || {}),
            onPress: onInternalChange
          }))}
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
      </Box>
    );
  }
);

const orientation = StyleSheet.create({
  vertical: {
    flexDirection: 'column'
  },
  horizontal: {
    flexDirection: 'row'
  }
});
