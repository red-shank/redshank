import React from 'react';
export declare type CardContext = {
    isOpen: boolean;
    onlyExpandContent?: boolean;
    statusBarHeight: number;
    toggle: () => void;
    expandContent?: React.ReactNode;
};
declare type CardProviderType = {
    children: React.ReactNode;
    onlyExpandContent?: boolean;
    expandContent?: React.ReactNode;
};
export declare const CardProvider: React.FC<CardProviderType>;
export declare const useCardProvider: () => CardContext;
export {};
