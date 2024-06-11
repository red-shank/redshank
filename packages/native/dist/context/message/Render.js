import React from 'react';
import { Base } from './Base';
import { Icon } from '../../components/Icon';
export class MessageRender {
}
class RenderMessage extends MessageRender {
    default(content, options = {}) {
        return (<Base content={content} internalType="default" iconLeft={<Icon type="antdesign" name="infocirlce" color="text"/>} {...options}/>);
    }
    success(content, options = {}) {
        return (<Base content={content} internalType="success" iconLeft={<Icon type="antdesign" name="checkcircle" color={options?.type === 'shadow' ? 'success' : 'white'}/>} {...options}/>);
    }
    info(content, options = {}) {
        return (<Base content={content} internalType="info" iconLeft={<Icon type="antdesign" name="infocirlce" color={options?.type === 'shadow' ? 'info' : 'white'}/>} {...options}/>);
    }
    error(content, options = {}) {
        return (<Base content={content} internalType="error" iconLeft={<Icon type="antdesign" name="closecircle" color={options?.type === 'shadow' ? 'error' : 'white'}/>} {...options}/>);
    }
    warning(content, options = {}) {
        return (<Base content={content} internalType="warning" iconLeft={<Icon type="entypo" name="warning" color={options?.type === 'shadow' ? 'warning' : 'white'}/>} {...options}/>);
    }
}
export const renderMessage = new RenderMessage();
