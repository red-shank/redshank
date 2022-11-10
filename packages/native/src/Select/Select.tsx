import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
// TODO: Migrate in the future to nativeComponent and remove lib
import RNPickerSelect, { PickerSelectProps } from 'react-native-picker-select';

import { Icon } from '../Icon';
import useTheme from '../Context/theme/useTheme';
import { TextError } from '../utils/TextError';
import { SizeType, sizes } from '../@types/input';
import { getDarken, getLighten } from '../utils/colors';
import type { ColorType } from '../Context/theme/types';

export interface SelectItemProps {
  label: string;
  value: string;
  key?: string | number;
}

export interface SelectProps
  extends Omit<PickerSelectProps, 'onValueChange' | 'items'> {
  onChange?: (value: any, index: number) => void;
  items: SelectItemProps[];
  placeholder?: string;
  textError?: string;
  error?: boolean;
  disabled?: boolean;
  value?: string;
  size?: SizeType;
  color?: ColorType;
  background?: ColorType;
  borderInputColor?: ColorType;
  placeholderColor?: ColorType;
}

export const Select: React.FC<SelectProps> = ({
  items,
  placeholder,
  disabled,
  value,
  onChange,
  pickerProps,
  children,
  Icon: icon,
  size = 'middle',
  textError,
  error = false,
  color = 'accents2',
  background = 'inputColor',
  borderInputColor = 'border',
  placeholderColor = 'border',
  ...rest
}) => {
  const [isError, setError] = React.useState<undefined | boolean>(false);
  const { colors, borderRadius, fontSizes, isDark } = useTheme();

  const onInternalChange = (_value: string, index: number) => {
    onChange && onChange(_value, index);
  };

  const borderModalColor = isDark
    ? getLighten(colors.foreground, 10)
    : getDarken(colors.foreground, 0.1);

  const bgModalColor = isDark
    ? getLighten(colors.foreground, 5)
    : colors.foreground;

  useEffect(() => {
    typeof error === 'boolean' && setError(error);
  }, [error]);

  return (
    <View style={styles.wrapper}>
      <RNPickerSelect
        {...rest}
        value={value}
        children={children}
        disabled={disabled}
        // Mimic touchable input on both iOS and Android
        useNativeAndroidPickerStyle={false}
        Icon={
          icon ?? (
            <Icon
              size={20}
              name="down"
              type="antdesign"
              color={colors[borderInputColor] ?? borderInputColor}
            />
          )
        }
        placeholder={{
          label: placeholder,
          value: null,
          // colors[placeholderColor] ?? placeholderColor
        }}
        onValueChange={onInternalChange}
        items={items.map(({ value: _value, label, key, ...restItem }) => ({
          key: key ?? label.trim(),
          value: _value,
          label,
          ...restItem,
        }))}
        // IOS props
        pickerProps={{
          itemStyle: {
            backgroundColor: colors[background] ?? background,
            color: colors[color] ?? color,
          },
          ...pickerProps,
        }}
        // general props
        touchableWrapperProps={{
          style: {
            ...sizes[size],
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: borderRadius.lg,
            borderColor: isError
              ? colors.error
              : colors[borderInputColor] ?? borderInputColor,
            backgroundColor: colors[background] ?? background,
          },
        }}
        style={{
          inputAndroid: {
            fontSize: fontSizes.base,
            color: isError ? colors.error : colors[color] ?? color,
          },
          inputIOS: {
            fontSize: fontSizes.base,
            color: isError ? colors.error : colors[color] ?? color,
          },
          modalViewMiddle: {
            borderBottomWidth: 1,
            borderTopColor: borderModalColor,
            borderBottomColor: borderModalColor,
            backgroundColor: bgModalColor,
          },
        }}
      />

      {isError && <TextError>{textError}</TextError>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    marginBottom: 22,
  },
  arrow: {
    position: 'absolute',
    width: 40,
    height: '100%',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
  },
  icon: {},
});
