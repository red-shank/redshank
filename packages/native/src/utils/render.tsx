import React from 'react';

export function renderChildren<T = any>(
  children: React.ReactNode,
  props?: (child: any, index: number) => T,
  Component?: typeof React.Component
) {
  return React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      if (Component) {
        return (
          <Component>
            {React.cloneElement<T>(
              child as any,
              props ? props(child, index) : {}
            )}
          </Component>
        );
      }
      return React.cloneElement<T>(
        child as any,
        props ? props(child, index) : {}
      );
    }
    return null;
  });
}

export function isValidChild(children: React.ReactNode) {
  return !(
    typeof children === 'string' ||
    typeof children === 'number' ||
    typeof children === 'bigint' ||
    typeof children === 'symbol' ||
    typeof children === 'boolean'
  );
}
