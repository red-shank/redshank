import React from 'react';
import { StyleSheet, View } from 'react-native';
import useTheme from '../../context/theme/useTheme';
import { getOpacity } from '../../utils/colors';
import { useCardProvider } from './Context';
const Header = ({ children, Component = View, isAbsolute = false, withBackground = false, background = 'card', right, top = 0, left = 0, style = {}, ...restProps }) => {
    const { isOpen, statusBarHeight } = useCardProvider();
    const { colors, activeOpacity, borderRadius, zIndices, paddingSizes } = useTheme();
    const backgroundColor = React.useMemo(() => {
        if (!withBackground) {
            return 'transparent';
        }
        if (!background) {
            return background;
        }
        const color = colors[background] || background;
        if (isAbsolute) {
            return getOpacity(color, 0.6);
        }
        return color;
    }, [background, colors, isAbsolute, withBackground]);
    return (<Component activeOpacity={activeOpacity} style={StyleSheet.flatten([
            styles.wrapper,
            {
                zIndex: zIndices['2'],
                padding: paddingSizes.card,
                backgroundColor,
                position: isAbsolute ? 'absolute' : 'relative',
                borderTopLeftRadius: borderRadius.card,
                borderTopRightRadius: borderRadius.card,
            },
            isAbsolute && {
                top,
                left,
                right,
            },
            isOpen && { paddingTop: statusBarHeight },
            style,
        ])} {...restProps}>
      {children}
    </Component>);
};
const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
    },
});
export default React.memo(Header);
