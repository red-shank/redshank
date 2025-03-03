import React from 'react';
import {
  Platform,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
  ColorValue
} from 'react-native';
import { IconProps as VectorIconProps } from '@react-native-vector-icons/common';
import getIconType, { IconType } from '../../helpers/getIconType';
import getIconStyle from '../../helpers/getIconStyle';
import useTheme from '../../context/theme/useTheme';
import { ColorName } from '../../context/theme/types';
import { Text } from '../Text';
import { Box } from '../Box';
import { Ripple, RippleProps } from '../Ripple';
import { useIconRuntime } from '../../context/runtime/runtime.context';

export type IconObject = {
  name: string;
  color?: ColorName;
  size?: number;
  type?: IconType;
  iconStyle?: StyleProp<TextStyle>;
};

export type IconProps = Omit<RippleProps, 'children'> & {
  type?: IconType;
  Component?: typeof React.Component;
  reverse?: boolean;
  raised?: boolean;
  borderRadius?: number | undefined;
  iconStyle?: TextStyle | undefined;
  style?: ViewStyle | TextStyle | undefined;
  backgroundColor?: ColorValue | number | undefined;
  name: string;
  size?: number | undefined;
  containerStyle?: StyleProp<ViewStyle>;
  iconProps?: Partial<VectorIconProps<string>>;
  reverseColor?: string;
  disabled?: boolean;
  disabledStyle?: StyleProp<ViewStyle>;
  solid?: boolean;
  brand?: boolean;
  color?: ColorName;
  fallbackIcon?: IconProps;
};

export const Icon: React.FC<IconProps> = ({
  type = 'material-design-icons',
  name,
  size = 18,
  color: colorProp,
  iconStyle,
  iconProps,
  reverse = false,
  raised = false,
  containerStyle,
  reverseColor: reverseColorProp,
  disabled = false,
  disabledStyle,
  onPress,
  onLongPress,
  onPressIn,
  onPressOut,
  fallbackIcon,
  Component = onPress || onLongPress || onPressIn || onPressOut ? Ripple : Box,
  solid = false,
  brand = false,
  ...rest
}) => {
  const { colors } = useTheme();
  const { packs } = useIconRuntime();
  const color = colors.get(colorProp || 'text');
  const reverseColor = colors.get(reverseColorProp || 'text');
  // const [IconComponent, setIconComponent] =
  //   useState<FunctionComponent<{}> | null>(null);
  const IconComponent = getIconType(type, packs);
  const FallbackIconComponent = fallbackIcon
    ? getIconType(fallbackIcon.type, packs)
    : null;
  const iconSpecificStyle = getIconStyle(type, { solid, brand });

  const getBackgroundColor = React.useMemo(() => {
    if (reverse) {
      return color;
    }
    return raised ? colors.get('white') : 'transparent';
  }, [reverse, raised, colors, color]);

  const buttonStyles = React.useMemo(
    () => ({
      borderRadius: size + 4,
      height: size * 2 + 4,
      width: size * 2 + 4
    }),
    [size]
  );

  return (
    <Box
      style={StyleSheet.flatten([
        styles.container,
        (reverse || raised) && styles.button,
        (reverse || raised) && buttonStyles,
        raised && styles.raised,
        iconStyle && iconStyle.borderRadius
          ? {
              borderRadius: iconStyle.borderRadius
            }
          : {},
        containerStyle && containerStyle
      ])}
      testID="BD__ICON__CONTAINER"
    >
      <Component
        onPress={onPress}
        onLongPress={onLongPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        disabled={disabled}
        {...rest}
      >
        <Box
          bg={getBackgroundColor}
          alignItems="center"
          justifyContent="center"
          style={StyleSheet.flatten([
            (reverse || raised) && buttonStyles,
            disabled && styles.disabled,
            disabled && disabledStyle
          ])}
        >
          {IconComponent ? (
            <IconComponent
              style={StyleSheet.flatten([
                { backgroundColor: 'transparent' },
                iconStyle && iconStyle
              ])}
              size={size}
              name={name}
              color={reverse ? reverseColor : color}
              {...iconSpecificStyle}
              {...iconProps}
            />
          ) : FallbackIconComponent ? (
            <FallbackIconComponent
              style={StyleSheet.flatten([
                { backgroundColor: 'transparent' },
                iconStyle && iconStyle
              ])}
              size={size}
              name={name}
              color={reverse ? reverseColor : color}
              {...iconSpecificStyle}
              {...iconProps}
              {...fallbackIcon}
            />
          ) : (
            <Text
              size={size}
              color={(reverse ? reverseColor : color) as any}
              {...iconSpecificStyle}
              {...iconProps}
            >
              ?
            </Text>
          )}
        </Box>
      </Component>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden'
  },
  button: {
    margin: 7
  },
  raised: {
    ...Platform.select({
      android: {
        elevation: 2
      },
      default: {
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1
      }
    })
  },
  disabled: {
    backgroundColor: '#D1D5D8'
  }
});

Icon.displayName = 'Icon';

export { IconType };
