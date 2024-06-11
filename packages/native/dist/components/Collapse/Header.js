import React from 'react';
import { scale } from 'react-native-size-matters';
import { StyleSheet, Animated, Easing } from 'react-native';
import { Text } from '../Text';
import { Ripple } from '../Ripple';
import { useCollapse } from './Context';
import useTheme from '../../context/theme/useTheme';
import { Title } from '../Title';
const Header = ({ id, title, disabled, subTitle, styleHeader = {}, onPress, isFirstElement, isLastElement }) => {
    const { openKeys, icon, borderColor, iconPosition, showArrow, headerColor, borderless } = useCollapse();
    const { fontSizes } = useTheme();
    const rotateAnimation = React.useRef(new Animated.Value(0)).current;
    const spin = rotateAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '90deg']
    });
    const collapsed = !openKeys.includes(id);
    // memos
    const internalOpenIcon = React.useMemo(() => {
        if (icon && showArrow) {
            return (<Animated.View style={StyleSheet.flatten([
                    { transform: [{ rotate: spin }] },
                    iconPosition === 'left' && styles.iconLeft,
                    iconPosition === 'right' && styles.iconRight
                ])}>
          {React.cloneElement(icon, {
                    color: disabled ? 'accents7' : 'text'
                })}
        </Animated.View>);
        }
        return null;
    }, [icon, iconPosition, showArrow, spin, disabled]);
    // effects
    React.useEffect(() => {
        // First set up animation
        Animated.timing(rotateAnimation, {
            toValue: collapsed ? 0 : 1,
            duration: 150,
            easing: Easing.linear,
            useNativeDriver: true // To make use of native driver for performance
        }).start();
    }, [rotateAnimation, collapsed]);
    return (<Ripple disabled={disabled} disableRipple={false} disableTransform={true} onPress={onPress} style={[styleHeader]} sx={{
            p: 2,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderColor: borderColor,
            backgroundColor: headerColor,
            borderTopWidth: isFirstElement || borderless ? 0 : 1,
            borderTopRadius: isFirstElement ? 1 : 0,
            borderBottomRadius: isLastElement ? 1 : 0
        }}>
      <>
        {iconPosition === 'left' ? internalOpenIcon : null}
        <Animated.View style={styles.headerContent}>
          {typeof title === 'string' || typeof title === 'number' ? (<Title level={6} color={disabled ? 'accents7' : 'text'}>
              {title}
            </Title>) : (React.cloneElement(title, {
            color: disabled ? 'accents7' : 'text'
        }))}

          {typeof subTitle === 'string' ? (<Text size={fontSizes.sm} color={disabled ? 'accents7' : 'accents5'}>
              {subTitle}
            </Text>) : subTitle ? (React.cloneElement(subTitle, {
            color: disabled ? 'accents7' : 'accents5'
        })) : null}
        </Animated.View>
        {iconPosition === 'right' ? internalOpenIcon : null}
      </>
    </Ripple>);
};
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerContent: {
        flex: 1
    },
    iconLeft: {
        marginRight: scale(5)
    },
    iconRight: {
        marginLeft: scale(5)
    }
});
export default Header;
