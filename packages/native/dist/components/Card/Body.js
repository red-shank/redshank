import React from 'react';
import { StyleSheet, View } from 'react-native';
import useTheme from '../../context/theme/useTheme';
import { useCardProvider } from './Context';
const Body = ({ children, Component = View, withPadding, style = {}, ...restProps }) => {
    const { isOpen } = useCardProvider();
    const { activeOpacity, paddingSizes } = useTheme();
    return (<Component activeOpacity={activeOpacity} style={StyleSheet.flatten([
            styles.wrapper,
            {
                padding: isOpen || !withPadding ? 0 : paddingSizes.card,
            },
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
export default React.memo(Body);
