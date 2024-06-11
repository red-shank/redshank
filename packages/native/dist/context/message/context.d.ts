import React, { PropsWithChildren } from 'react';
import type { MessageContextType } from './types';
export declare type MessageProviderProps = PropsWithChildren<{
    height?: number;
    defaultHeight?: number;
    defaultDuration?: number;
}>;
export declare const MessageProvider: React.MemoExoticComponent<({ children, height, defaultDuration }: MessageProviderProps) => React.JSX.Element>;
export declare const useMessage: () => [message: Pick<MessageContextType, "default" | "success" | "info" | "warning" | "error">, setHeight: (height: number) => void];
