import React from 'react';
import { ScrollView as NScrollView } from 'react-native';
import createSxStyle from '../../lib/sx';
import useTheme from '../../context/theme/useTheme';
export const ScrollView = React.forwardRef(({ sx, contentContainerSx, contentContainerStyle, style, ...props }, ref) => {
    const theme = useTheme();
    return (<NScrollView {...props} ref={ref} style={createSxStyle({
            sx,
            style
        }, theme)} contentContainerStyle={createSxStyle({
            sx: contentContainerSx,
            style: contentContainerStyle
        }, theme)}/>);
});
