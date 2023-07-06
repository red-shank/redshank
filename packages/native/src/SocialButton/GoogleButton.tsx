import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Ripple } from '../Ripple';
import useTheme from '../Context/theme/useTheme';

import { Image } from '../Image/Image';
import { Button } from '../Button/Button';
import type { ButtonProps } from '../Button/types';
import { Text } from '../Text/Text';
import { resolveAssetUrl } from '../utils';

interface GoogleButtonProps
  extends Pick<
    ButtonProps,
    | 'loading'
    | 'Component'
    | 'disabled'
    | 'onPress'
    | 'withMarginBottom'
    | 'style'
  > {}

export const GoogleButton: React.FC<GoogleButtonProps> = ({
  onPress,
  disabled,
  loading,
  style,
  withMarginBottom = false,
  Component = Ripple,
  ...rest
}) => {
  const {
    colors,
    borderRadius,
    isDark,
    fonts,
    sizes,
    fontSizes,
    activeOpacity,
    marginSizes,
  } = useTheme();

  return (
    <Button
      shape="circle"
      type="outline"
      color="white"
      disabled={disabled}
      icon={
        <Image
          width={25}
          height={25}
          source={{
            uri: resolveAssetUrl('/social/google.png'),
          }}
        />
      }
      textAlign="left"
      textStyle={{
        flex: 1,
        textAlign: 'center',
        alignItems: 'flex-end',
      }}
      onPress={loading || disabled ? undefined : onPress}
      {...rest}
    >
      Iniciar Sesión con Google
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
