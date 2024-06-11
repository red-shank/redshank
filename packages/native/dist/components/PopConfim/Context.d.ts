import React from 'react';
declare type PopConfirmContext = {
    haveHeader: boolean;
    haveContent: boolean;
    addElement(type: 'Header' | 'Content'): void;
};
declare const PopConfirmContext: React.Context<PopConfirmContext>;
export declare const PopConfirmProvider: ({ children, }: {
    children?: React.ReactNode;
}) => React.JSX.Element;
export declare const usePopConfirm: () => PopConfirmContext;
export {};
