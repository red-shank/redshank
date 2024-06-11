import React from 'react';
import { Platform, View, StyleSheet, Pressable } from 'react-native';
import Color from 'color';
import getIconType from '../../helpers/getIconType';
import getIconStyle from '../../helpers/getIconStyle';
import androidRipple from '../../helpers/androidRipple';
import useTheme from '../../context/theme/useTheme';
import { Text } from '../Text';
export const Icon = ({ type = 'material', name, size = 18, color: colorProp, iconStyle, iconProps, underlayColor = 'transparent', reverse = false, raised = false, containerStyle, reverseColor: reverseColorProp, disabled = false, disabledStyle, onPress, onLongPress, onPressIn, onPressOut, Component = onPress || onLongPress || onPressIn || onPressOut
    ? Pressable
    : View, solid = false, brand = false, ...rest }) => {
    const { colors } = useTheme();
    const color = colors[colorProp] || colorProp || colors?.text;
    const reverseColor = colors[reverseColorProp] || reverseColorProp || colors?.text;
    const IconComponent = getIconType(type);
    const iconSpecificStyle = getIconStyle(type, { solid, brand });
    const getBackgroundColor = React.useMemo(() => {
        if (reverse) {
            return color;
        }
        return raised ? colors?.white : 'transparent';
    }, [color, raised, reverse, colors?.white]);
    const buttonStyles = React.useMemo(() => ({
        borderRadius: size + 4,
        height: size * 2 + 4,
        width: size * 2 + 4
    }), [size]);
    return (<View style={StyleSheet.flatten([
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
        ])} testID="BD__ICON__CONTAINER">
      <Component {...{
        android_ripple: androidRipple(Color(reverse ? color : underlayColor)
            .alpha(0.3)
            .rgb()
            .string()),
        onPress,
        onLongPress,
        onPressIn,
        onPressOut,
        disabled,
        accessibilityRole: 'button',
        ...rest
    }} testID="RNE__ICON__CONTAINER_ACTION">
        <View style={StyleSheet.flatten([
            (reverse || raised) && buttonStyles,
            {
                backgroundColor: getBackgroundColor,
                alignItems: 'center',
                justifyContent: 'center'
            },
            disabled && styles.disabled,
            disabled && disabledStyle
        ])} testID="RNE__ICON">
          {IconComponent ? (<IconComponent testID="RNE__ICON__Component" style={StyleSheet.flatten([
                { backgroundColor: 'transparent' },
                iconStyle && iconStyle
            ])} size={size} name={name} color={reverse ? reverseColor : color} {...iconSpecificStyle} {...iconProps}/>) : (<Text size={size} color={(reverse ? reverseColor : color)} {...iconSpecificStyle} {...iconProps}>
              ?
            </Text>)}
        </View>
      </Component>
    </View>);
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
