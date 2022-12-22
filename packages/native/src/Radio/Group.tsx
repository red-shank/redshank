import React from 'react';
import { StyleSheet, View } from 'react-native';
import { scale } from 'react-native-size-matters';

import { TextError } from '../utils/TextError';
import { useChildren } from '../hooks/useChildren';
import { renderChildren } from '../utils/render';
import type { NumberStringValue, RadioGroupProps, RadioProps } from './types';

export const GAP = scale(10);

export const Group: React.FC<RadioGroupProps> = ({
  align = 'horizontal',
  children: _children,
  inactiveColor,
  value,
  error,
  onChange,
  size,
  type,
  textError,
  defaultValue,
  activeColor,
}) => {
  const [internalValue, setInternalValue] =
    React.useState<NumberStringValue>('');
  const [isError, setError] = React.useState<undefined | boolean>(false);

  const children = useChildren(_children);

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
    <View style={styles.wrapper}>
      <View style={StyleSheet.flatten([styles.content, styles[align]])}>
        {renderChildren<RadioProps>(children, (child) => ({
          isActive: internalValue === child?.props?.value,
          activeColor: isError ? 'error' : activeColor,
          deactiveColor: isError ? 'error' : inactiveColor,
          size,
          type,
          ...(child?.props || {}),
          onPress: onInternalChange,
        }))}
      </View>
      {isError && textError && <TextError>{textError}</TextError>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
  },
  content: {
    marginVertical: -(GAP / 2),
    marginHorizontal: -(GAP / 2),
  },
  vertical: {
    flexDirection: 'column',
  },
  horizontal: {
    flexDirection: 'row',
  },
});
