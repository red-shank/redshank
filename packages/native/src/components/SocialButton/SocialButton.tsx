import React, { useMemo } from 'react';

import { Image } from '../Image/Image';
import { Button } from '../Button/Button';
import { ButtonProps } from '../Button/types';
import { resolveAssetUrl } from '../../utils';
import useTheme from '../../context/theme/useTheme';

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
  google: 'Continue with Google',
  facebook: 'Continue with Facebook',
  apple: 'Continue with Apple',
  twitter: 'Continue with Twitter'
} as const;

const SwitchProvidersImageMap: Record<
  SocialButtonProvider,
  { light: string; dark: string }
> = {
  google: {
    light: '/social/google.png',
    dark: '/social/google.png'
  },
  facebook: {
    light: '/social/facebook.png',
    dark: '/social/facebook.png'
  },
  twitter: {
    light: '/social/twitter.png',
    dark: '/social/twitter.png'
  },
  apple: {
    light: '/social/apple-dark.png',
    dark: '/social/apple-light.png'
  }
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
      bg="text"
      color="text"
      fullWidth
      textAlign="left"
      prefix={<Image width={25} height={25} source={uri} />}
      sx={{
        text: {
          flex: 1,
          textAlign: 'center',
          alignItems: 'flex-end'
        }
      }}
      {...rest}
    >
      {textDefault}
    </Button>
  );
};
