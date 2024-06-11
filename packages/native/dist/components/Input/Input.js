import React, { cloneElement, useEffect, forwardRef } from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon } from '../Icon';
import { TextError } from '../../utils/TextError';
import useTheme from '../../context/theme/useTheme';
import useCreateRef from '../../hooks/useCreateRef';
export const Input = forwardRef(({ background = 'inputColor', borderInputColor = 'border', color = 'accents2', defaultValue, onChange, error, editable = true, isDisabled, placeholder, placeholderColor = 'border', prefix, size = 'middle', style = {}, textError, type = 'default', suffix = type === 'password' ? (<Icon name="eye" type="antdesign"/>) : undefined, withMarginBottom, wrapperStyle, Component = TextInput, ...rest }, _ref) => {
    const { ref } = useCreateRef(_ref, null);
    const { colors, borderRadius, fontSizes, borderWidth, sizes } = useTheme();
    // states
    const [show, setShow] = React.useState(false);
    const [isError, setError] = React.useState(false);
    const onInternalChange = (v) => {
        setError(false);
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
    useEffect(() => {
        typeof error === 'boolean' && setError(error);
    }, [error]);
    return (<View>
        <View style={StyleSheet.flatten([
            styles.wrapper,
            withMarginBottom && styles.withBorder,
            isDisabled && editable && { opacity: 0.5 },
            wrapperStyle
        ])}>
          {/* prefix icon */}
          {prefix && (<TouchableOpacity style={StyleSheet.flatten([styles.wrapperIcon, { left: 0 }])}>
              <View style={styles.icon}>
                {cloneElement(prefix, {
                color: colors.border,
                ...prefix.props
            })}
              </View>
            </TouchableOpacity>)}
          <Component {...rest} ref={ref} editable={!isDisabled && editable} secureTextEntry={type === 'password' && !show} defaultValue={defaultValue} keyboardType={type === 'password' ? 'default' : type} placeholder={placeholder} onChangeText={onInternalChange} placeholderTextColor={colors[placeholderColor] || placeholderColor} style={StyleSheet.flatten([
            styles.input,
            {
                borderWidth,
                height: sizes[size],
                fontSize: fontSizes.base,
                backgroundColor: colors[background] || background,
                borderColor: isError
                    ? colors.error
                    : colors[borderInputColor] || borderInputColor,
                borderRadius: borderRadius.xl,
                color: colors[color] || color
            },
            prefix && {
                paddingLeft: 35
            },
            suffix && {
                paddingRight: 45
            },
            style
        ])}/>

          {suffix && (<TouchableOpacity {...propsPassword} style={StyleSheet.flatten([styles.wrapperIcon, { right: 0 }])}>
              <View style={styles.icon}>
                {React.cloneElement(suffix, {
                color: colors.border,
                ...suffix.props
            })}
              </View>
            </TouchableOpacity>)}
        </View>
        {isError && textError && <TextError>{textError}</TextError>}
      </View>);
});
export const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        position: 'relative'
    },
    withBorder: { marginBottom: 15 },
    input: {
        paddingRight: 10,
        paddingLeft: 10
    },
    wrapperIcon: {
        position: 'absolute',
        width: 40,
        height: '100%',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        zIndex: 2
    },
    icon: {}
});
