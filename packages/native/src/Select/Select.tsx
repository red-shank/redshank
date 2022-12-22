import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
// TODO: Migrate in the future to nativeComponent and remove lib
import RNPickerSelect from 'react-native-picker-select';

import { Icon as InternalIcon } from '../Icon';
import useTheme from '../Context/theme/useTheme';
import { TextError } from '../utils/TextError';
import { sizes } from '../@types/input';
import { getDarken, getLighten } from "../utils/colors";
import type { SelectProps } from './types';

export const Select: React.FC<SelectProps> = ({
  items,
  placeholder,
  disabled,
  value,
  onChange,
  pickerProps,
  children,
  Icon,
  size = 'middle',
  textError,
  error = false,
  color = 'accents2',
  background = 'inputColor',
  borderInputColor = 'border',
  placeholderColor = 'border',
  ...rest
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isError, setError] = React.useState<undefined | boolean>(false);
  const { colors, borderRadius, fontSizes, isDark, borderWidth } = useTheme();

  const onInternalChange = (_value: string, index: number) => {
    onChange && onChange(_value, index);
  };

  const borderModalColor = isDark
    ? getDarken(colors.border, 0.6)
    : getLighten(colors.border, 85);
  const bgModalColor = isDark ? getLighten(colors.foreground, 5) : colors.white;

  useEffect(() => {
    typeof error === 'boolean' && setError(error);
  }, [error]);

  const RenderIcon = () => {
    if (Icon) {
      return Icon;
    }
    return (
      <InternalIcon
        size={20}
        type="antdesign"
        name={isOpen ? 'up' : 'down'}
        color={colors[borderInputColor] || borderInputColor}
      />
    );
  };

  return (
    <View style={styles.wrapper}>
      <RNPickerSelect
        {...rest}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        value={value}
        children={children}
        disabled={disabled}
        // Mimic touchable input on both iOS and Android
        useNativeAndroidPickerStyle={false}
        Icon={RenderIcon as any}
        placeholder={{
          label: placeholder,
          value: null,
          // colors[placeholderColor] ?? placeholderColor
        }}
        onValueChange={onInternalChange}
        items={items.map(
          ({ value: _value, label, key, ...restItem }, index) => ({
            key: key || index,
            value: _value,
            label,
            ...restItem,
          })
        )}
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
            borderWidth,
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
