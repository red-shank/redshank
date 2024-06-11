import React, { createContext, PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

import { renderMessage } from './Render';
import { getRandomId } from '../../utils';
import useHeaderHeight from '../../hooks/useHeaderHeight';
import type {
  ElementListType,
  ElementType,
  MessageContextType,
  MessageOptions
} from './types';

const DEFAULT_DURATION = 5000; // 5s

const MessageContext = createContext<MessageContextType>({
  setHeight() {},
  default() {},
  error() {},
  info() {},
  warning() {},
  success() {}
});

export type MessageProviderProps = PropsWithChildren<{
  height?: number;
  defaultHeight?: number;
  defaultDuration?: number;
}>;

export const MessageProvider = React.memo(
  ({
    children,
    height: defaultHeight,
    defaultDuration = DEFAULT_DURATION
  }: MessageProviderProps) => {
    const [height, setHeight] = React.useState<number>(
      defaultHeight ?? useHeaderHeight()
    );
    const [currentMessage, setCurrentMessage] =
      React.useState<ElementListType | null>(null);
    const [messagesQueue, setMessagesQueue] = React.useState<ElementListType[]>(
      []
    );

    const removeMessage = React.useCallback((id: string) => {
      setMessagesQueue((prevMessages) => {
        return prevMessages.filter((item) => item.id !== id);
      });
      setCurrentMessage(null);
    }, []);

    const addMessage = React.useCallback(
      (content: string, type: ElementType, opts?: MessageOptions) => {
        const options = {
          ...opts,
          onPress: opts?.onPress,
          closable: opts?.closable ?? true,
          duration: opts?.duration ?? defaultDuration
        };

        const id = getRandomId('message');

        const isClosable = options.closable;

        setMessagesQueue((prev) => [
          ...prev,
          {
            id,
            onPress: options.onPress,
            closable: isClosable,
            duration: options?.duration ?? defaultDuration,
            component: renderMessage[type](content, {
              ...options,
              key: options?.key ?? id
            })
          }
        ]);
      },
      []
    );

    // Render Queue
    React.useEffect(() => {
      if (messagesQueue.length) {
        const [messageToRender] = messagesQueue;

        const ref = setTimeout(() => {
          removeMessage(messageToRender.id);
        }, messageToRender.duration);

        const onPress = (event: any) => {
          if (messageToRender.closable) {
            clearTimeout(ref);
            removeMessage(messageToRender.id);
          }

          if (typeof messageToRender.onPress === 'function') {
            messageToRender.onPress(event);
          }
        };

        setCurrentMessage({
          ...messageToRender,
          component: React.cloneElement(messageToRender.component, { onPress })
        });
      }
    }, [messagesQueue, removeMessage]);

    const message = React.useMemo(() => {
      return {
        default(content: string, opts?: MessageOptions) {
          addMessage(content, 'default', opts);
        },
        error(content: string, opts?: MessageOptions) {
          addMessage(content, 'error', opts);
        },
        info(content: string, opts?: MessageOptions) {
          addMessage(content, 'info', opts);
        },
        warning(content: string, opts?: MessageOptions) {
          addMessage(content, 'warning', opts);
        },
        success(content: string, opts?: MessageOptions) {
          addMessage(content, 'success', opts);
        },
        setHeight
      };
    }, [addMessage, setHeight]);

    return (
      <MessageContext.Provider value={message}>
        <View
          style={StyleSheet.flatten([
            styles.wrapper,
            {
              height: currentMessage?.component ? height : 0
            }
          ])}
        >
          {currentMessage?.component}
        </View>
        {children}
      </MessageContext.Provider>
    );
  }
);

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flex: 1,
    backgroundColor: 'transparent',
    zIndex: 10000
  }
});

export const useMessage = (): [
  message: Pick<
    MessageContextType,
    'default' | 'info' | 'success' | 'warning' | 'error'
  >,
  setHeight: MessageContextType['setHeight']
] => {
  const context = React.useContext(MessageContext);
  if (!context) {
    throw new Error('useMessage must be used within a MessageProvider');
  }
  const { setHeight, ...message } = context;

  return [message, setHeight];
};
