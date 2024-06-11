import React from 'react';
import { StyleSheet, View } from 'react-native';

import { usePopConfirm } from './Context';
import useTheme from '../../context/theme/useTheme';
import type { PropContentProps } from './types';

const Content: React.FC<PropContentProps> = ({
  children,
  style,
  withBorder = false,
}) => {
  const { addElement, haveHeader } = usePopConfirm();
  const { colors, paddingSizes } = useTheme();

  React.useEffect(() => {
    addElement('Content');
  }, [addElement]);

  return (
    <View
      style={StyleSheet.flatten([
        styles.wrapper,
        {
          padding: paddingSizes.md,
          borderTopColor:
            withBorder || haveHeader ? colors.border : 'transparent',
        },
        style,
      ])}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderColor: 'transparent',
    borderTopWidth: 0.5,
  },
});

export default Content;
