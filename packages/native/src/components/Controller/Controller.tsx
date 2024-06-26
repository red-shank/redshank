import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';

// components
import { Icon } from '../Icon';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';
import useTheme from '../../context/theme/useTheme';
import { TextError } from '../../utils/TextError';
import type { ControllerProps } from './types';

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
  width = 135,
  error = false,
  color = 'text',
  borderColor = 'accents4'
}) => {
  const { colors, borderRadius } = useTheme();
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
    <View style={StyleSheet.flatten([styles.wrapper, { width }])}>
      <View
        style={StyleSheet.flatten([
          styles.content,
          {
            backgroundColor: colors.inputColor,
            borderRadius: borderRadius.lg,
            borderColor: error
              ? colors.error
              : colors[borderColor] || borderColor
          },
          style
        ])}
      >
        <View style={styles.item}>
          <Button
            onlyIcon
            type="link"
            appearance="black"
            onPress={onPrev}
            sx={{
              container: buttonSx,
              icon: {
                color: 'accents3',
                mt: iconMtSx
              }
            }}
          >
            <Icon
              size={18}
              name="minus"
              type="antdesign"
              color={error ? colors.error : colors[borderColor] || borderColor}
            />
          </Button>
        </View>

        <View style={styles.item}>
          <Text size={16} color={colors[color] || color} bold>
            {count}
          </Text>
        </View>

        <View style={styles.item}>
          <Button
            onlyIcon
            type="link"
            appearance="black"
            onPress={onAdd}
            sx={{
              container: buttonSx,
              icon: {
                color: 'accents3',
                mt: iconMtSx
              }
            }}
          >
            <Icon
              size={18}
              name="plus"
              type="antdesign"
              color={error ? colors.error : colors[borderColor] || borderColor}
            />
          </Button>
        </View>
      </View>
      {<TextError>{error && textError && textError}</TextError>}
    </View>
  );
};

const buttonSx = {
  flex: 1,
  px: 1,
  m: 0
};

const iconMtSx = Platform.select({
  ios: 5,
  android: 5,
  default: 0
});

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
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
