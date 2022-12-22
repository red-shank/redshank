import type { ReactNode, Component } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export type ElementType = 'default' | 'success' | 'info' | 'warning' | 'error';
export type MessageType = 'default' | 'shadow';

export interface MessageProps {
  Component?: typeof Component;
  content: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  internalType?: ElementType;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<ViewStyle>;
  type?: MessageType;
  withBoxShadow?: boolean;
  withIcon?: boolean;
}

export type ElementListType = {
  closable: boolean;
  component: JSX.Element;
  duration: number;
  id: string;
  onPress?: (event: any) => void;
  top?: number;
};

export type MessageOptions = Partial<
  Omit<MessageProps, 'internalType' | 'content'>
> & {
  closable?: boolean;
  duration?: number;
  key?: any;
  onPress?: () => void;
};

export type MessageContextType = {
  message: {
    default: (content: string, opts?: MessageOptions) => void;
    error: (content: string, opts?: MessageOptions) => void;
    info: (content: string, opts?: MessageOptions) => void;
    setHeight: (height: number) => void;
    success: (content: string, opts?: MessageOptions) => void;
    warning: (content: string, opts?: MessageOptions) => void;
  };
};
