import React, { ReactElement, ReactNode } from 'react';
import { SxProps } from '../../lib/styleDictionary';
declare type SharedElementProps<T = unknown> = {
    data: Array<T>;
    renderItem: (props: {
        item: T;
        index: number;
    }) => ReactNode;
    content?: (item: T) => ReactElement;
    listProps?: any;
    cardWidth: number | string;
    styles?: {
        safeArea: SxProps;
        list: SxProps;
    };
};
export declare function SharedElement({ data, listProps, styles, content, renderItem, cardWidth }: SharedElementProps): React.JSX.Element;
export {};
