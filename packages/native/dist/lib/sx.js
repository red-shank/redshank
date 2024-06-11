import { StyleSheet } from 'react-native';
import { createStyleFromSx, extractRestProps, extractSxProps } from './utils';
export default function createSxStyle({ sx, showLog, style = {}, ...otherProps } = {}, theme) {
    const sxPropExtracted = extractSxProps({
        sx,
        otherProps
    });
    const sxProps = createStyleFromSx({
        theme,
        sx: sxPropExtracted
    });
    if (showLog) {
        console.log({ sxPropExtracted, sxProps });
    }
    return StyleSheet.flatten([style, sxProps]);
}
export function getSxStyleAndProps({ sx, style = {}, ...otherProps } = {}, theme) {
    const sxProps = createSxStyle({
        sx,
        style,
        ...otherProps
    }, theme);
    const restProps = extractRestProps(otherProps);
    return {
        props: restProps,
        style: sxProps
    };
}
