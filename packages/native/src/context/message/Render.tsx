import React from 'react';

import { Base } from './Base';
import { Icon } from '../../components/Icon';
import type { MessageOptions } from './types';

export abstract class MessageRender<T = JSX.Element> {
  abstract default(content: string, opts?: MessageOptions): T;

  abstract success(content: string, opts?: MessageOptions): T;

  abstract info(content: string, opts?: MessageOptions): T;

  abstract warning(content: string, opts?: MessageOptions): T;

  abstract error(content: string, opts?: MessageOptions): T;
}

class RenderMessage extends MessageRender {
  default(content, options: MessageOptions = {}) {
    return (
      <Base
        content={content}
        internalType="default"
        iconLeft={<Icon type="antdesign" name="infocirlce" color="text" />}
        {...options}
      />
    );
  }

  success(content, options: MessageOptions = {}) {
    return (
      <Base
        content={content}
        internalType="success"
        iconLeft={
          <Icon
            type="antdesign"
            name="checkcircle"
            color={options?.type === 'shadow' ? 'success' : 'white'}
          />
        }
        {...options}
      />
    );
  }

  info(content, options: MessageOptions = {}) {
    return (
      <Base
        content={content}
        internalType="info"
        iconLeft={
          <Icon
            type="antdesign"
            name="infocirlce"
            color={options?.type === 'shadow' ? 'info' : 'white'}
          />
        }
        {...options}
      />
    );
  }

  error(content, options: MessageOptions = {}) {
    return (
      <Base
        content={content}
        internalType="error"
        iconLeft={
          <Icon
            type="antdesign"
            name="closecircle"
            color={options?.type === 'shadow' ? 'error' : 'white'}
          />
        }
        {...options}
      />
    );
  }

  warning(content, options: MessageOptions = {}) {
    return (
      <Base
        content={content}
        internalType="warning"
        iconLeft={
          <Icon
            type="entypo"
            name="warning"
            color={options?.type === 'shadow' ? 'warning' : 'white'}
          />
        }
        {...options}
      />
    );
  }
}

export const renderMessage = new RenderMessage();
