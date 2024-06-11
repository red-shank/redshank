import React from 'react';
export interface ScrollPickerProps {
    items: (string | number)[];
    onIndexChange?: (index: number) => void;
    onChange?: (value?: number | string) => void;
    itemHeight?: number;
    selected?: string | number;
    renderItemText?: (item: string | number) => string | number;
}
export declare const ScrollPicker: React.FC<ScrollPickerProps>;
