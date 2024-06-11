import React from 'react';
const BaseComponent = ({ Component, activeOpacity, onPress, style, children, ...restProps }) => {
    return (<Component activeOpacity={activeOpacity} onPress={onPress} style={style} {...restProps}>
      {children}
    </Component>);
};
export default React.memo(BaseComponent);
