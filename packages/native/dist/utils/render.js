import React from 'react';
export function renderChildren(children, props, Component) {
    return React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
            if (Component) {
                return (<Component>
            {React.cloneElement(child, props ? props(child, index) : {})}
          </Component>);
            }
            return React.cloneElement(child, props ? props(child, index) : {});
        }
        return null;
    });
}
export function isValidChild(children) {
    return !(typeof children === 'string' ||
        typeof children === 'number' ||
        typeof children === 'bigint' ||
        typeof children === 'symbol' ||
        typeof children === 'boolean');
}
