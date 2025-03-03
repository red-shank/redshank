import React from 'react';
import { StyleSheet, View } from 'react-native';

// components
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';
import { HelperText } from '../../utils/HelperText';
import type { ControllerProps } from './types';
import { Box } from '../Box';
import useTheme from '../../context/theme/useTheme';
import { MinusIcon, PlusIcon } from '../../icons';

export const Controller: React.FC<ControllerProps> = ({
  value,
  max,
  min,
  onChange,
  onIncrease,
  onDecrease,
  minOverflow,
  maxOverflow,
  style,
  textError,
  size = 'middle',
  width = 135,
  error = false,
  color = 'text',
  borderColor = 'accents.3'
}) => {
  const theme = useTheme();
  const [count, setCount] = React.useState<number>(min ?? 1);

  React.useEffect(() => {
    if (typeof value === 'number') {
      setCount(value);
    }
  }, [value]);

  React.useEffect(() => {
    if (onChange) {
      onChange(count);
    }
  }, [count, onChange]);

  const onAdd = () => {
    setCount((prev) => {
      let newCount = prev + 1;
      if (max && newCount > max) {
        maxOverflow && maxOverflow();
        return prev;
      }
      onIncrease && onIncrease(newCount);
      return newCount;
    });
  };

  const onPrev = () => {
    setCount((prev) => {
      let newCount = prev - 1;
      if (typeof min === 'number' && newCount < min) {
        minOverflow && minOverflow();
        return prev;
      }
      onDecrease && onDecrease(newCount);
      return newCount;
    });
  };

  return (
    <Box
      height={theme.sizes[size]}
      style={StyleSheet.flatten([styles.wrapper, { width }])}
    >
      <Box
        bg="input"
        height="100%"
        borderRadius={2}
        borderColor={error ? 'error' : borderColor}
        style={StyleSheet.flatten([styles.content, style])}
      >
        <View style={styles.item}>
          <Button onlyIcon appearance="transparent" onPress={onPrev}>
            <MinusIcon size={18} color={error ? 'error' : borderColor} />
          </Button>
        </View>

        <View style={styles.item}>
          <Text size={16} color={color} bold>
            {count}
          </Text>
        </View>

        <View style={styles.item}>
          <Button onlyIcon onPress={onAdd} appearance="transparent">
            <PlusIcon size={18} color={error ? 'error' : borderColor} />
          </Button>
        </View>
      </Box>
      {(error || textError) && (
        <HelperText color={error ? 'error' : 'text.secondary'}>
          {textError}
        </HelperText>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative'
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 0,
    borderWidth: 1
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
