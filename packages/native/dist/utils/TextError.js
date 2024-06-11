import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '../components/Text/Text';
import useTheme from '../context/theme/useTheme';
export const TextError = ({ children }) => {
    const { colors } = useTheme();
    return (<Text size="xs" color="error" align="left" style={StyleSheet.flatten([styles.text, { color: colors.error }])}>
      {children}
    </Text>);
};
const styles = StyleSheet.create({
    text: {
        marginTop: 5
    }
});
