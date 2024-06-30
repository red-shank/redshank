import { AlertProps } from '../../components/Alert/types';

export type MessageProps = AlertProps;

export type ElementListType = Pick<AlertProps, 'closable'> & {
  component: JSX.Element;
  duration?: number | false | null;
  id: string;
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
