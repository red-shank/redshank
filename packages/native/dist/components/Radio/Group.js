import React from 'react';
import { StyleSheet } from 'react-native';
import { TextError } from '../../utils/TextError';
import { useChildren } from '../../hooks/useChildren';
import { renderChildren } from '../../utils/render';
import { Box } from '../Box';
export const GAP = 10;
export const Group = ({ align = 'horizontal', children: _children, inactiveColor, value, error, onChange, size, type, textError, defaultValue, activeColor, ...sxProps }) => {
    const [internalValue, setInternalValue] = React.useState('');
    const [isError, setError] = React.useState(false);
    const children = useChildren(_children);
    const onInternalChange = (val) => {
        setInternalValue(val);
        setError(false);
        onChange && onChange(val);
    };
    React.useEffect(() => {
        setInternalValue((prev) => {
            if (prev !== value) {
                return value;
            }
            return prev;
        });
    }, [value]);
    React.useEffect(() => {
        setInternalValue((prev) => {
            if (!prev) {
                return defaultValue;
            }
            return prev;
        });
    }, [defaultValue]);
    React.useEffect(() => {
        typeof error === 'boolean' && setError(error);
    }, [error]);
    return (<Box style={StyleSheet.flatten([styles.wrapper])} {...sxProps}>
      <Box gap={1} mb={0.1} style={StyleSheet.flatten([styles.content, styles[align]])}>
        {renderChildren(children, (child) => ({
            isActive: internalValue === child?.props?.value,
            activeColor: isError ? 'error' : activeColor,
            deactiveColor: isError ? 'error' : inactiveColor,
            size,
            type,
            ...(child?.props || {}),
            onPress: onInternalChange
        }))}
      </Box>
      {isError && textError && <TextError>{textError}</TextError>}
    </Box>);
};
const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 10
    },
    content: {},
    vertical: {
        flexDirection: 'column'
    },
    horizontal: {
        flexDirection: 'row'
    }
});
