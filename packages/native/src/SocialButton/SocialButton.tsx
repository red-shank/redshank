import React, { useMemo } from 'react';

import { Image } from '../Image/Image';
import { Button } from '../Button/Button';
import { resolveAssetUrl } from '../utils';
import type { ButtonProps } from '../Button/types';
import useTheme from '../Context/theme/useTheme';

export type SocialButtonProvider = 'google' | 'facebook' | 'apple' | 'twitter';

export interface SocialButtonProps
  extends Pick<
    ButtonProps,
    | 'loading'
    | 'Component'
    | 'disabled'
    | 'onPress'
    | 'withMarginBottom'
    | 'style'
  > {
  provider?: SocialButtonProvider;
  text?: string;
}

const SwitchProvidersTextMap: Record<SocialButtonProvider, string> = {
  google: 'Continues with Google',
  facebook: 'Continues with Facebook',
  apple: 'Continues with Apple',
  twitter: 'Continues with Twitter',
} as const;

const SwitchProvidersImageMap: Record<
  SocialButtonProvider,
  { light: string; dark: string }
> = {
  google: {
    light: '/social/google-dark.png',
    dark: '/social/google-light.png',
  },
  facebook: {
    light: '/social/facebook-dark.png',
    dark: '/social/facebook-light.png',
  },
  twitter: {
    light: '/social/twitter-dark.png',
    dark: '/social/twitter-light.png',
  },
  apple: {
    light: '/social/apple-dark.png',
    dark: '/social/apple-light.png',
  },
} as const;

export const SocialButton: React.FC<SocialButtonProps> = ({
  text,
  provider,
  ...rest
}) => {
  const { theme } = useTheme();

  const textDefault = useMemo(() => {
    if (text) {
      return text;
    }
    return SwitchProvidersTextMap[provider];
  }, [provider, text]);

  const uri = useMemo(() => {
    return resolveAssetUrl(SwitchProvidersImageMap?.[provider]?.[theme] || '');
  }, [provider, theme]);

  return (
    <Button
      shape="circle"
      type="outline"
      color="text"
      textColor="text"
      textAlign="left"
      prefix={
        <Image
          width={25}
          height={25}
          source={{
            uri,
          }}
        />
      }
      textStyle={{
        flex: 1,
        textAlign: 'center',
        alignItems: 'flex-end',
      }}
      {...rest}
    >
      {textDefault}
    </Button>
  );
};
