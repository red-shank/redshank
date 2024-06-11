import React from 'react';
import type { ButtonProps } from '../Button/types';
export declare type SocialButtonProvider = 'google' | 'facebook' | 'apple' | 'twitter';
export interface SocialButtonProps extends Pick<ButtonProps, 'loading' | 'Component' | 'disabled' | 'onPress' | 'withMarginBottom' | 'style'> {
    provider?: SocialButtonProvider;
    text?: string;
}
export declare const SocialButton: React.FC<SocialButtonProps>;
