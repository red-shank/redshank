import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Input } from './Input';
const sizesMinHeight = {
    small: 45,
    middle: 60,
    large: 85
};
export const TextArea = ({ minHeight, style = {}, numberOfLines = 3, size = 'middle', ...rest }) => {
    const [height, setHeight] = useState(minHeight || sizesMinHeight[size]);
    return (<Input {...rest} multiline numberOfLines={numberOfLines} onContentSizeChange={(event) => {
            setHeight(event.nativeEvent.contentSize.height);
        }} style={StyleSheet.flatten([
            {
                height: Math.max(minHeight || sizesMinHeight[size], height)
            },
            style
        ])}/>);
};
