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
  default(content, options: MessageOptions) {
    return (
      <Base
        content={content}
        internalType="default"
        startContent={<Icon type="antdesign" name="infocirlce" color="text" />}
        {...options}
      />
    );
  }

  success(content, options: MessageOptions) {
    return (
      <Base
        content={content}
        internalType="success"
        startContent={<Icon type="antdesign" name="checkcircle" />}
        {...options}
      />
    );
  }

  info(content, options: MessageOptions) {
    return (
      <Base
        content={content}
        internalType="info"
        startContent={<Icon type="antdesign" name="infocirlce" />}
        {...options}
      />
    );
  }

  error(content, options: MessageOptions) {
    return (
      <Base
        content={content}
        internalType="error"
        startContent={<Icon type="antdesign" name="closecircle" />}
        {...options}
      />
    );
  }

  warning(content, options: MessageOptions) {
    return (
      <Base
        content={content}
        internalType="warning"
        startContent={<Icon type="entypo" name="warning" />}
        {...options}
      />
    );
  }
}

export const renderMessage = new RenderMessage();
