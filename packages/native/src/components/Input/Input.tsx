import React, { cloneElement, forwardRef, useMemo } from 'react';
import { TextInput, TouchableOpacity, KeyboardTypeOptions } from 'react-native';

import { HelperText } from '../../utils/HelperText';
import useTheme from '../../context/theme/useTheme';
import type { InputProps } from './types';
import useCreateRef from '../../hooks/useCreateRef';
import { Box } from '../Box';
import createSxStyle from '../../lib/sx';
import { SxProps } from '../../lib/styleDictionary';
import { paddingInput } from '../../context/theme/defaultValues';
import { EyeIcon, EyeMuteIcon } from '../../icons';

export const Input = forwardRef<TextInput, InputProps>(
  (
    {
      bg = 'input',
      borderColor = 'border',
      color = 'accents.2',
      defaultValue,
      onChange,
      error,
      editable = true,
      isDisabled,
      placeholder,
      shape = 'rounded',
      placeholderColor = 'border',
      startContent,
      size = 'middle',
      style = {},
      helperText,
      type = 'default',
      endContent: endContentProp,
      withMarginBottom,
      Component = TextInput,
      sx,
      styles,
      ...rest
    },
    _ref
  ) => {
    const theme = useTheme();
    const { ref } = useCreateRef<TextInput>(_ref, null);

    // states
    const [show, setShow] = React.useState<boolean>(false);

    const endContent = useMemo(() => {
      if (endContentProp) return endContentProp;
      if (type === 'password') {
        return !show ? (
          <EyeMuteIcon size={22} fill={borderColor} />
        ) : (
          <EyeIcon size={22} fill={borderColor} />
        );
      }
      return null;
    }, [borderColor, endContentProp, show, type]);

    const onInternalChange = (v: string) => {
      if (onChange) {
        onChange(v);
      }
    };

    const propsPassword = React.useMemo(() => {
      if (type !== 'password') {
        return {};
      }

      return {
        onPress: () => setShow((prev) => !prev)
      };
    }, [type]);

    return (
      <Box
        sx={sx?.root}
        style={[styles?.root, style]}
        mb={withMarginBottom ? 2 : 0}
      >
        <Box
          width="100%"
          position="relative"
          flexDirection="row"
          opacity={isDisabled && editable ? 0.5 : 1}
          sx={sx?.wrapper}
          style={styles?.wrapper}
        >
          {/* prefix icon */}
          {startContent && (
            <TouchableOpacity
              style={createSxStyle(
                {
                  sx: wrapperIcon,
                  left: 0,
                  style: styles?.wrapperIcon
                },
                theme
              )}
            >
              <Box style={styles?.start}>
                {cloneElement(startContent, {
                  color: theme.colors.get('border'),
                  ...startContent.props
                })}
              </Box>
            </TouchableOpacity>
          )}
          <Component
            {...rest}
            ref={ref}
            editable={!isDisabled && editable}
            secureTextEntry={type === 'password' && !show}
            defaultValue={defaultValue}
            keyboardType={
              type === 'password' ? 'default' : (type as KeyboardTypeOptions)
            }
            placeholder={placeholder}
            onChangeText={onInternalChange}
            placeholderTextColor={theme.colors.get(placeholderColor)}
            style={createSxStyle(
              {
                borderWidth: theme.borderWidth,
                height: theme.sizes[size],
                fontSize: 'base',
                bg: bg,
                width: '100%',
                borderColor: error ? 'error' : borderColor,
                rounded: shape === 'circle' ? 10 : `input.${shape}`,
                color: color,
                py: 1,
                pl: startContent ? 4 : paddingInput,
                pr: endContent ? 4 : paddingInput,
                sx: sx?.input,
                style: styles?.input
              },
              theme
            )}
          />

          {endContent && (
            <TouchableOpacity
              {...propsPassword}
              style={createSxStyle(
                {
                  right: 0,
                  sx: wrapperIcon,
                  style: styles?.wrapperIcon
                },
                theme
              )}
            >
              <Box style={styles?.end}>
                {React.cloneElement(endContent, {
                  color: theme.colors.get('border'),
                  ...endContent.props
                })}
              </Box>
            </TouchableOpacity>
          )}
        </Box>
        {(error || helperText) && (
          <HelperText sx={sx?.helperText} style={styles?.helperText}>
            {helperText}
          </HelperText>
        )}
      </Box>
    );
  }
);

const wrapperIcon: SxProps = {
  position: 'absolute',
  width: 40,
  height: '100%',
  bottom: 0,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  zIndex: 2
};
