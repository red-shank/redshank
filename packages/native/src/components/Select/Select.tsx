import React, { useCallback, useEffect } from 'react';
import { Platform } from 'react-native';
// TODO: Migrate in the future to nativeComponent and remove lib
import RNPickerSelect from 'react-native-picker-select';

import { Icon as InternalIcon } from '../Icon';
import useTheme from '../../context/theme/useTheme';
import { HelperText } from '../../utils/HelperText';
import { getDarken, getLighten } from '../../utils/colors';
import type { SelectProps } from './types';
import { Box } from '../Box';
import createSxStyle, { getSxStyleAndProps } from '../../lib/sx';
import { paddingInput } from '../../context/theme/defaultValues';

export const Select: React.FC<SelectProps> = ({
  items,
  disabled,
  value,
  onChange,
  pickerProps,
  children,
  Icon,
  placeholder = 'Select an item',
  size = 'middle',
  helperText,
  error = false,
  color = 'accents.2',
  background = 'input',
  borderColor = 'border',
  shape = 'rounded',
  sx,
  styles,
  ...rest
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isError, setError] = React.useState<undefined | boolean>(false);
  const theme = useTheme();
  const { colors, fontSizes, isDark, borderWidth, sizes } = useTheme();

  const onInternalChange = (_value: string, index: number) => {
    onChange && onChange(_value, index);
  };

  const borderModalColor = isDark
    ? getDarken(colors.get('border'), 0.6)
    : getLighten(colors.get('border'), 85);
  const bgModalColor = isDark
    ? getLighten(colors.background.foreground, 5)
    : colors.white;

  useEffect(() => {
    typeof error === 'boolean' && setError(error);
  }, [error]);

  const RenderIcon = useCallback(() => {
    if (Icon) {
      return Icon;
    }
    return (
      <InternalIcon
        size={16}
        mt={Platform.select({
          android: 0.8,
          default: undefined
        })}
        type="antdesign"
        name={isOpen ? 'up' : 'down'}
        color={colors.get(borderColor)}
      />
    );
  }, [Icon, borderColor, colors, isOpen]);

  const resolveProps = getSxStyleAndProps(
    {
      ...rest,
      sx: sx?.root,
      style: styles?.root
    },
    theme
  );

  return (
    <Box
      position="relative"
      {...resolveProps?.props}
      sx={sx?.root}
      style={resolveProps?.props}
    >
      <RNPickerSelect
        {...rest}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        value={value}
        children={children}
        disabled={disabled}
        // Mimic touchable input on both iOS and Android
        useNativeAndroidPickerStyle={false}
        Icon={
          Platform.select({
            web: undefined,
            default: RenderIcon
          }) as any
        }
        placeholder={{
          label: placeholder,
          value: null
          // colors[placeholderColor] ?? placeholderColor
        }}
        onValueChange={onInternalChange}
        items={items.map(
          ({ value: _value, label, key, ...restItem }, index) => ({
            key: key || index,
            value: _value,
            label,
            ...restItem
          })
        )}
        // IOS props
        pickerProps={{
          itemStyle: createSxStyle(
            {
              bg: background,
              color: color,
              sx: sx?.iosPickerItem,
              style: styles?.iosPickerItem
            },
            theme
          ),
          ...pickerProps
        }}
        // general props
        touchableWrapperProps={{
          style: createSxStyle(
            {
              height: sizes[size],
              borderWidth,
              borderStyle: 'solid',
              borderRadius: `input.${shape}`,
              borderColor: isError ? 'error' : borderColor,
              backgroundColor: background,
              justifyContent: 'center',
              px: paddingInput,
              sx: sx?.touchableWrapper,
              style: styles?.touchableWrapper
            },
            theme
          )
        }}
        style={{
          inputAndroid: createSxStyle(
            {
              fontSize: 'base',
              color: isError ? 'error' : color,
              sx: sx?.inputAndroid,
              style: styles?.inputAndroid
            },
            theme
          ),
          inputIOS: createSxStyle(
            {
              fontSize: 'base',
              color: isError ? 'error' : color,
              sx: sx?.inputIOS,
              style: styles?.inputIOS
            },
            theme
          ),
          inputWeb: createSxStyle(
            {
              fontSize: fontSizes.base,
              color: isError ? 'error' : color,
              height: sizes[size],
              borderWidth,
              px: paddingInput,
              borderStyle: 'solid',
              borderRadius: `input.${shape}`,
              borderColor: isError ? 'error' : borderColor,
              bg: background,
              sx: sx?.inputWeb,
              style: styles?.inputWeb
            },
            theme
          ),
          modalViewMiddle: createSxStyle(
            {
              borderBottomWidth: 1,
              borderTopColor: borderModalColor,
              borderBottomColor: borderModalColor,
              backgroundColor: bgModalColor,
              sx: sx?.modalViewMiddle,
              style: styles?.modalViewMiddle
            },
            theme
          )
        }}
      />

      {(isError || helperText) && (
        <HelperText
          color={isError ? 'error' : 'text.secondary'}
          style={styles?.helperText}
          sx={sx?.helperText}
        >
          {helperText}
        </HelperText>
      )}
    </Box>
  );
};
