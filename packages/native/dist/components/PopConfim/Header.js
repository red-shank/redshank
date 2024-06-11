import React from 'react';
import { StyleSheet, View } from 'react-native';
import { isValidChild } from '../../utils/render';
import { Text } from '../Text';
import useTheme from '../../context/theme/useTheme';
import { usePopConfirm } from './Context';
const Header = ({ image, title, description, style, }) => {
    const { addElement } = usePopConfirm();
    const { paddingSizes } = useTheme();
    React.useEffect(() => {
        addElement('Header');
    }, [addElement]);
    return (<View style={StyleSheet.flatten([
            styles.wrapper,
            {
                padding: paddingSizes.md,
            },
            style,
        ])}>
      {image ? <View style={styles.image}>{image}</View> : null}
      <View style={styles.content}>
        {isValidChild(title) ? (title) : (<Text size={18} fontWeight="500">
            {title}
          </Text>)}
        {isValidChild(description) ? description : <Text>{description}</Text>}
      </View>
    </View>);
};
const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
    },
    image: {
        marginRight: 10,
    },
    content: {
        flex: 1,
    },
});
export default Header;
