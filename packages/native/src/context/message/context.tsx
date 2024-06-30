import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useRef
} from 'react';

import { getRandomId } from '../../utils';
import type {
  ElementListType,
  MessageContextType,
  MessageOptions
} from './types';
import { Box } from '../../components/Box';
import { Animated } from 'react-native';
import { SxProps } from '../../lib/styleDictionary';
// import { Base } from './Base';
import { Alert } from '../../components/Alert';
import { AlertType } from '../../components/Alert/types';

const DEFAULT_DURATION = 5000; // 5s

const MessageContext = createContext<MessageContextType | null>(null);

export type MessageProviderProps = PropsWithChildren<
  SxProps & {
    defaultDuration?: number;
  }
>;

let ref: NodeJS.Timeout = null;
const translateYDefault = 60;

export const MessageProvider = React.memo(
  ({
    children,
    defaultDuration = DEFAULT_DURATION,
    ...sx
  }: MessageProviderProps) => {
    let opacityAnimation = useRef(new Animated.Value(0)).current;
    let translateYAnimation = useRef(
      new Animated.Value(translateYDefault)
    ).current;

    const [currentMessage, setCurrentMessage] =
      React.useState<ElementListType | null>(null);

    const removeMessage = React.useCallback(
      (_id: string) => {
        Animated.parallel([
          Animated.timing(translateYAnimation, {
            toValue: translateYDefault,
            duration: 200,
            useNativeDriver: false
          }),
          Animated.timing(opacityAnimation, {
            toValue: 0,
            duration: 100,
            useNativeDriver: false
          })
        ]).start(() => setCurrentMessage(null));
      },
      [opacityAnimation, translateYAnimation]
    );

    const addMessage = React.useCallback(
      (content: string, type: AlertType, opts?: Partial<MessageOptions>) => {
        const id = getRandomId('message');
        const options = {
          withBoxShadow: true,
          ...opts,
          id,
          type,
          closable: opts?.closable ?? true,
          duration: opts?.duration ?? defaultDuration,
          sx: {
            px: 4
          }
        };

        const onClose = () => {
          clearTimeout(ref);
          removeMessage(options.id);
        };

        const component = (
          <Alert
            {...options}
            content={content}
            onClose={onClose}
            translateYAnimation={translateYAnimation}
            opacity={opacityAnimation}
            key={options?.key ?? id}
          />
        );

        if (ref) {
          Animated.parallel([
            Animated.timing(translateYAnimation, {
              toValue: translateYDefault,
              duration: 200,
              useNativeDriver: false
            }),
            Animated.timing(opacityAnimation, {
              toValue: 0,
              duration: 100,
              useNativeDriver: false
            })
          ]).start(() => {
            setCurrentMessage({
              ...options,
              component: component
            });
          });
        } else {
          setCurrentMessage({
            ...options,
            component: component
          });
        }
      },
      [defaultDuration, opacityAnimation, removeMessage, translateYAnimation]
    );

    const message = React.useMemo(() => {
      const defaultFunc: MessageContextType = function (
        content: string,
        opts?: MessageOptions
      ) {
        addMessage(content, 'default', opts);
      } as MessageContextType;

      defaultFunc.default = function (content: string, opts?: MessageOptions) {
        addMessage(content, 'default', opts);
      };

      defaultFunc.error = function (content: string, opts?: MessageOptions) {
        addMessage(content, 'error', opts);
      };

      defaultFunc.info = function (content: string, opts?: MessageOptions) {
        addMessage(content, 'info', opts);
      };

      defaultFunc.warning = function (content: string, opts?: MessageOptions) {
        addMessage(content, 'warning', opts);
      };

      defaultFunc.success = function (content: string, opts?: MessageOptions) {
        addMessage(content, 'success', opts);
      };

      return defaultFunc;
    }, [addMessage]);

    useEffect(() => {
      if (currentMessage) {
        Animated.parallel([
          Animated.timing(translateYAnimation, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false
          }),
          Animated.timing(opacityAnimation, {
            toValue: 1,
            duration: 100,
            useNativeDriver: false
          })
        ]).start();

        if (currentMessage?.duration) {
          ref = setTimeout(() => {
            removeMessage(currentMessage.id);
          }, currentMessage?.duration);
        }
      }

      return () => {
        clearTimeout(ref);
      };
    }, [currentMessage, opacityAnimation, removeMessage, translateYAnimation]);

    return (
      <MessageContext.Provider value={message}>
        <Box
          flex={1}
          left={0}
          right={0}
          bottom={10}
          zIndex="max"
          bg="transparent"
          position="absolute"
          // height={currentMessage?.component ? height : 0}
          {...sx}
        >
          {currentMessage?.component}
        </Box>
        {children}
      </MessageContext.Provider>
    );
  }
);

export const useMessage = (): MessageContextType => {
  const context = React.useContext(MessageContext);
  if (!context) {
    throw new Error('useMessage must be used within a MessageProvider');
  }
  return context;
};
