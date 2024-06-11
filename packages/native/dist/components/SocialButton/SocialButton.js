import React, { useMemo } from 'react';
import { Image } from '../Image/Image';
import { Button } from '../Button/Button';
import { resolveAssetUrl } from '../../utils';
import useTheme from '../../context/theme/useTheme';
const SwitchProvidersTextMap = {
    google: 'Continues with Google',
    facebook: 'Continues with Facebook',
    apple: 'Continues with Apple',
    twitter: 'Continues with Twitter',
};
const SwitchProvidersImageMap = {
    google: {
        light: '/social/google.png',
        dark: '/social/google.png',
    },
    facebook: {
        light: '/social/facebook.png',
        dark: '/social/facebook.png',
    },
    twitter: {
        light: '/social/twitter.png',
        dark: '/social/twitter.png',
    },
    apple: {
        light: '/social/apple-dark.png',
        dark: '/social/apple-light.png',
    },
};
export const SocialButton = ({ text, provider, ...rest }) => {
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
    return (<Button shape="circle" type="outline" color="text" textColor="text" fullWidth textAlign="left" prefix={<Image width={25} height={25} source={uri}/>} textStyle={{
            flex: 1,
            textAlign: 'center',
            alignItems: 'flex-end',
        }} {...rest}>
      {textDefault}
    </Button>);
};
