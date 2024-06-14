import React from 'react';
import { StyleSheet, View } from 'react-native';

import { usePopConfirm } from './Context';
import useTheme from '../../context/theme/useTheme';
import type { PropFooterProps } from './types';

const Footer: React.FC<PropFooterProps> = ({
  children,
  style,
  withBorder = false,
  noPadding = false
}) => {
  const { haveContent } = usePopConfirm();
  const { paddingSizes, colors } = useTheme();

  return (
    <View
      style={StyleSheet.flatten([
        styles.wrapper,
        {
          padding: noPadding ? 0 : paddingSizes.md,
          borderTopColor:
            withBorder || haveContent ? colors.border : 'transparent'
        },
        style
      ])}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderColor: 'transparent',
    borderTopWidth: 0.5
  }
});

export default Footer;
