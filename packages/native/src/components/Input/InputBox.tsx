import { Ripple } from '../Ripple';
import { paddingInput } from '../../context';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle
} from 'react-native';
import createSxStyle from '../../lib/sx';
import { Box } from '../Box';
import React, { cloneElement, ReactNode } from 'react';
import { Text } from '../Text';
import { InputProps } from './types';
import { SizeType } from '../../@types/input';
import { SxProps } from '../../lib/styleDictionary';
import useTheme from '../../context/theme/useTheme';
import { HelperText } from '../../utils/HelperText';

export type InputBoxProps = Pick<
  InputProps,
  | 'background'
  | 'borderColor'
  | 'color'
  | 'shape'
  | 'size'
  | 'style'
  | 'error'
  | 'helperText'
  | 'placeholder'
  | 'isDisabled'
  | 'startContent'
  | 'endContent'
> & {
  text?: ReactNode;
  size?: SizeType;
  onPress?: () => void;
  sx?: SxProps & {
    container?: SxProps;
    toggle?: SxProps;
    wrapperIcon?: SxProps;
    icon?: SxProps;
    text?: SxProps;
    helperText?: SxProps;
  };
  styles?: {
    root?: StyleProp<ViewStyle>;
    container?: StyleProp<ViewStyle>;
    toggle?: StyleProp<ViewStyle>;
    wrapperIcon?: StyleProp<ViewStyle>;
    icon?: StyleProp<ViewStyle>;
    text?: StyleProp<ViewStyle>;
    helperText?: StyleProp<ViewStyle>;
  };
};

export function InputBox({
  sx,
  isDisabled,
  styles,
  onPress: onPressProp,
  shape,
  size,
  background,
  error,
  borderColor,
  startContent,
  endContent,
  style,
  color,
  placeholder,
  text,
  helperText
}: InputBoxProps) {
  const theme = useTheme();
  const { colors, sizes, borderWidth } = theme;

  const onPress = () => {
    !isDisabled && onPressProp?.();
  };

  return (
    <>
      <Box
        sx={sx?.container}
        opacity={isDisabled ? 0.5 : 1}
        style={[_styles.wrapper, _styles.relative, styles?.container]}
      >
        <Ripple
          disableTransform
          onPress={onPress}
          rounded={`input.${shape}`}
          borderWidth={borderWidth}
          height={sizes[size]}
          backgroundColor={background}
          borderColor={error ? 'error' : borderColor}
          pl={startContent ? 4.4 : paddingInput}
          pr={endContent ? 11.25 : paddingInput}
          sx={sx?.toggle}
          style={[_styles.wrapper, style, styles?.toggle]}
        >
          {startContent && (
            <TouchableOpacity
              onPress={onPress}
              style={createSxStyle(
                {
                  left: 0,
                  sx: sx?.wrapperIcon,
                  style: [_styles.wrapperIcon, styles?.wrapperIcon]
                },
                theme
              )}
            >
              <Box sx={sx?.icon} style={[_styles.icon, styles?.icon]}>
                {cloneElement(startContent, {
                  color: colors.border,
                  ...startContent.props
                })}
              </Box>
            </TouchableOpacity>
          )}
          <Text sx={sx?.text} style={styles?.text} color={color}>
            {text || placeholder}
          </Text>
        </Ripple>

        {endContent && (
          <TouchableOpacity
            onPress={onPress}
            activeOpacity={isDisabled ? 1 : 0.8}
            style={createSxStyle(
              {
                right: 0,
                pr: 1.4,
                style: [_styles.wrapperIcon, styles?.wrapperIcon]
              },
              theme
            )}
          >
            <Box sx={sx?.icon} style={[_styles.icon, styles?.icon]}>
              {React.cloneElement(endContent, {
                color: colors.get('border'),
                ...endContent.props
              })}
            </Box>
          </TouchableOpacity>
        )}
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
    </>
  );
}

const _styles = StyleSheet.create({
  relative: {
    position: 'relative'
  },
  wrapper: {
    justifyContent: 'center'
  },
  wrapperIcon: {
    position: 'absolute',
    backgroundColor: 'transparent'
  },
  icon: {},
  modal: {
    flex: 1,
    justifyContent: 'center'
  }
});
