import React from 'react';
import {
  Platform,
  View,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
  Pressable,
  ColorValue,
} from 'react-native';
import {
  IconButtonProps,
  IconProps as VectorIconProps,
} from 'react-native-vector-icons/Icon';
import Color from 'color';
import getIconType from '../helpers/getIconType';
import getIconStyle from '../helpers/getIconStyle';
import androidRipple from '../helpers/androidRipple';
import useTheme from '../Context/theme/useTheme';
import { ColorType } from '../Context/theme/types';

export type IconType =
  | 'material'
  | 'material-community'
  | 'simple-line-icon'
  | 'zocial'
  | 'font-awesome'
  | 'octicon'
  | 'ionicon'
  | 'foundation'
  | 'evilicon'
  | 'entypo'
  | 'antdesign'
  | 'font-awesome-5'
  | string;

export type IconObject = {
  name: string;
  color?: ColorType;
  size?: number;
  type?: IconType;
  iconStyle?: StyleProp<TextStyle>;
};

export type IconNode = boolean | React.ReactElement<{}> | Partial<IconProps>;

export type IconProps = Omit<IconButtonProps, 'color'> & {
  type?: IconType;
  Component?: typeof React.Component;
  reverse?: boolean;
  raised?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  iconProps?: VectorIconProps;
  reverseColor?: string;
  disabled?: boolean;
  disabledStyle?: StyleProp<ViewStyle>;
  solid?: boolean;
  brand?: boolean;
  color?: ColorType;
};

export const Icon: React.FC<IconProps> = ({
  type = 'material',
  name,
  size = 18,
  color: colorProp,
  iconStyle,
  iconProps,
  underlayColor = 'transparent',
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
  Component = onPress || onLongPress || onPressIn || onPressOut
    ? Pressable
    : View,
  solid = false,
  brand = false,
  ...rest
}) => {
  const { colors } = useTheme();
  const color = colors[colorProp] || colorProp || colors?.text;
  const reverseColor =
    colors[reverseColorProp] || reverseColorProp || colors?.text;
  const IconComponent = getIconType(type);
  const iconSpecificStyle = getIconStyle(type, { solid, brand });

  const getBackgroundColor = React.useMemo(() => {
    if (reverse) {
      return color;
    }
    return raised ? colors?.white : 'transparent';
  }, [color, raised, reverse, colors?.white]);

  const buttonStyles = React.useMemo(
    () => ({
      borderRadius: size + 4,
      height: size * 2 + 4,
      width: size * 2 + 4,
    }),
    [size]
  );

  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        (reverse || raised) && styles.button,
        (reverse || raised) && buttonStyles,
        raised && styles.raised,
        iconStyle && iconStyle.borderRadius
          ? {
              borderRadius: iconStyle.borderRadius,
            }
          : {},
        containerStyle && containerStyle,
      ])}
      testID="RNE__ICON__CONTAINER"
    >
      <Component
        {...{
          android_ripple: androidRipple(
            Color(reverse ? color : (underlayColor as string))
              .alpha(0.3)
              .rgb()
              .string()
          ),
          onPress,
          onLongPress,
          onPressIn,
          onPressOut,
          disabled,
          accessibilityRole: 'button',
          ...rest,
        }}
        testID="RNE__ICON__CONTAINER_ACTION"
      >
        <View
          style={StyleSheet.flatten([
            (reverse || raised) && buttonStyles,
            {
              backgroundColor: getBackgroundColor as ColorValue,
              alignItems: 'center',
              justifyContent: 'center',
            },
            disabled && styles.disabled,
            disabled && disabledStyle,
          ])}
          testID="RNE__ICON"
        >
          <IconComponent
            testID="RNE__ICON__Component"
            style={StyleSheet.flatten([
              { backgroundColor: 'transparent' },
              iconStyle && iconStyle,
            ])}
            size={size}
            name={name}
            color={reverse ? reverseColor : color}
            {...iconSpecificStyle}
            {...iconProps}
          />
        </View>
      </Component>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  button: {
    margin: 7,
  },
  raised: {
    ...Platform.select({
      android: {
        elevation: 2,
      },
      default: {
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
    }),
  },
  disabled: {
    backgroundColor: '#D1D5D8',
  },
});

Icon.displayName = 'Icon';
