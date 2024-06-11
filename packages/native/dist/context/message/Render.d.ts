import React from 'react';
import type { MessageOptions } from './types';
export declare abstract class MessageRender<T = JSX.Element> {
    abstract default(content: string, opts?: MessageOptions): T;
    abstract success(content: string, opts?: MessageOptions): T;
    abstract info(content: string, opts?: MessageOptions): T;
    abstract warning(content: string, opts?: MessageOptions): T;
    abstract error(content: string, opts?: MessageOptions): T;
}
declare class RenderMessage extends MessageRender {
    default(content: any, options?: MessageOptions): React.JSX.Element;
    success(content: any, options?: MessageOptions): React.JSX.Element;
    info(content: any, options?: MessageOptions): React.JSX.Element;
    error(content: any, options?: MessageOptions): React.JSX.Element;
    warning(content: any, options?: MessageOptions): React.JSX.Element;
}
export declare const renderMessage: RenderMessage;
export {};
