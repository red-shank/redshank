import React from 'react';
import { Animated } from 'react-native';
import { Text } from '../Text';
import { Ripple } from '../Ripple';
import useTheme from '../../context/theme/useTheme';
import { getOpacity } from '../../utils';
import { Box } from '../Box';
import createSxStyle from '../../lib/sx';
export const Badge = ({ content, wrapperStyle, style, isInvisible, enableShadow, children, childrenStyle, onPress, borderColor, offset, sx, styles, isPressable = !!onPress, placement = 'top-right', bold = true, size = children ? 'small' : 'middle', bordered = true, background = 'border', variant = 'default', type = 'rounded', color = variant === 'flat' ? background : 'white' }) => {
    const theme = useTheme();
    const { colors, isDark, fontSizes } = useTheme();
    const placementStyle = placementStyles[placement];
    const fontSize = fonts[size];
    const isFlat = React.useMemo(() => variant === 'flat', [variant]);
    const backgroundColor = React.useMemo(() => {
        if (isFlat) {
            return getOpacity(colors[background] || background, 0.3);
        }
        return background;
    }, [bordered, isFlat, colors, background]);
    const borderInternalColor = React.useMemo(() => {
        if (!bordered)
            return 'transparent';
        if (borderColor)
            return borderColor;
        if (isFlat)
            return 'transparent';
        return 'background';
    }, [bordered, isFlat, borderColor]);
    const Component = React.useMemo(() => {
        if (isPressable) {
            return Ripple;
        }
        return Box;
    }, [isPressable]);
    return (<Component onPress={onPress} position="relative" alignSelf="flex-start" sx={{
            ...sx,
            ...styles?.root
        }} style={wrapperStyle}>
      {!isInvisible && (<Animated.View style={createSxStyle({
                position: children ? 'absolute' : 'relative',
                p: sizesPadding[size],
                borderWidth: 2,
                borderColor: borderInternalColor,
                backgroundColor,
                flexShrink: 0,
                alignItems: 'center',
                justifyContent: 'center',
                shadowOffset: { width: 0, height: 5 },
                shadowRadius: 10,
                elevation: 10,
                zIndex: 2,
                borderRadius: type === 'square' ? 0.8 : 10,
                shadowOpacity: isDark ? 1 : 0.8,
                shadowColor: enableShadow ? background : 'transparent',
                alignSelf: placementStyle?.alignSelf,
                top: offset?.top ?? placementStyle?.top,
                left: offset?.left ?? placementStyle?.left,
                right: offset?.right ?? placementStyle?.right,
                bottom: offset?.bottom ?? placementStyle?.bottom,
                sx: styles?.badge,
                style
            }, theme)}>
          {!!content && (<Text bold={bold} color={color} p={0} m={0} flex={0} size={fontSize} height={fontSizes[fontSize] - 1} lineHeight={fontSizes[fontSize]} sx={styles?.text} style={{
                    includeFontPadding: false
                }}>
              {content}
            </Text>)}
        </Animated.View>)}

      <Box zIndex={1} style={childrenStyle} sx={styles?.content}>
        {children}
      </Box>
    </Component>);
};
const sizesPadding = {
    small: 0.5,
    middle: 0.85,
    large: 1
};
const fonts = {
    small: 'xs',
    middle: 'sm',
    large: 'md'
};
const placementStyles = {
    'top-right': {
        alignSelf: 'flex-start',
        right: 0,
        top: 0
    },
    'top-left': {
        alignSelf: 'flex-end',
        left: 0,
        top: 0
    },
    'bottom-right': {
        alignSelf: 'flex-start',
        right: 0,
        bottom: 0
    },
    'bottom-left': {
        alignSelf: 'flex-end',
        left: 0,
        bottom: 0
    }
};
