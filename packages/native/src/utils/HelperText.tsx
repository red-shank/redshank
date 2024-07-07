import React from 'react';
import { StyleSheet } from 'react-native';

import { Text } from '../components/Text/Text';
import { TextProps } from '../components/Text/types';

export const HelperText: React.FC<{
  children: string;
  sx?: TextProps['sx'];
  color?: TextProps['color'];
  style?: TextProps['style'];
}> = ({ children, sx, style, color = 'error' }) => {
  return (
    <Text
      size="xs"
      color={color}
      align="left"
      sx={sx}
      style={StyleSheet.flatten([styles.text, style])}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 5
  }
});
