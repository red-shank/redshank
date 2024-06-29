import type { ReactNode, Component } from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';

export type ElementType = 'default' | 'success' | 'info' | 'warning' | 'error';

export type FuncRenderIcon = (onClose: () => void) => ReactNode;

export interface MessageProps {
  Component?: typeof Component;
  content:
    | ReactNode
    | {
        title?: ReactNode;
        description?: ReactNode;
      };
  startContent?: ReactNode | FuncRenderIcon;
  endContent?: ReactNode | FuncRenderIcon;
  internalType?: ElementType;
  onPress?: (event: any) => void;
  closable?: boolean;
  closeOnPress?: boolean;
  onClose?: () => void;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<ViewStyle>;
  withBoxShadow?: boolean;
  withIcon?: boolean;
  opacityAnimation: Animated.Value;
  translateYAnimation: Animated.Value;
}

export type ElementListType = {
  closable: boolean;
  component: JSX.Element;
  duration?: number | false | null;
  id: string;
  top?: number;
};

export type MessageOptions = Omit<MessageProps, 'internalType' | 'content'> & {
  key?: any;
  duration: ElementListType['duration'];
};

type MessageTypeFunction = (
  content: MessageProps['content'],
  opts?: Partial<MessageOptions>
) => void;

export type MessageContextType = MessageTypeFunction & {
  default: MessageTypeFunction;
  error: MessageTypeFunction;
  info: MessageTypeFunction;
  success: MessageTypeFunction;
  warning: MessageTypeFunction;
};
