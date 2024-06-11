import React from 'react';
export declare function renderChildren<T = any>(children: React.ReactNode, props?: (child: any, index: number) => T, Component?: typeof React.Component): React.JSX.Element[];
export declare function isValidChild(children: React.ReactNode): boolean;
