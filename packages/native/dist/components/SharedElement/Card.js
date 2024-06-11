// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback, View, Animated } from 'react-native';
import styles from './styles';
const Card = ({ children, customContainerStyle, cardWidth, cardHeight, onPress, ...rest }) => {
    const otherStyles = {};
    if (cardWidth) {
        otherStyles.width = cardWidth;
    }
    if (cardHeight) {
        otherStyles.height = cardHeight;
    }
    const containerStyle = [styles.container, customContainerStyle, otherStyles];
    return (<TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={containerStyle}>
        <View renderToHardwareTextureAndroid style={styles.childrenContainer} {...rest}>
          {children}
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>);
};
Card.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    customContainerStyle: PropTypes.instanceOf(Object),
    onPress: PropTypes.func,
    cardWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    cardHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
Card.defaultProps = {
    children: null,
    onPress: null,
    cardWidth: 0,
    cardHeight: 0,
    customContainerStyle: {}
};
export { Card };
