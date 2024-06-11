import React from 'react';
import { NumberStringValue, TabItemProps, TabsVariant } from './types';
export declare function Item({ onPress, label, isActive, startAdornment, endAdornment, backgroundColors, labelColors, sx, size, labelProps, variant }: Omit<TabItemProps, 'key' | 'children'> & {
    id: NumberStringValue;
    variant: TabsVariant;
}): React.JSX.Element;
