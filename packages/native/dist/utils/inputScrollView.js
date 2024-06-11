import React from 'react';
import ScrollView from 'react-native-input-scroll-view';
export const InputScrollView = ({ keyboardOffset = 100, ...rest }) => {
    return (<ScrollView showsVerticalScrollIndicator={false} keyboardOffset={keyboardOffset} {...rest}/>);
};
