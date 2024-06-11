import React, { useState } from 'react';
import { Animated, Modal as RNModal, TouchableOpacity, View } from 'react-native';
const Modal = ({ trigger, extra }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [animation] = useState(new Animated.Value(1));
    const handleOpen = () => {
        Animated.timing(animation, {
            toValue: 1.5,
            duration: 500,
            useNativeDriver: true
        }).start(() => setModalVisible(true));
    };
    const handleClose = () => {
        setModalVisible(false);
        Animated.timing(animation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start();
    };
    const animatedStyles = {
        transform: [{ scale: animation }]
    };
    return (<View>
      <Animated.View style={animatedStyles}>
        <TouchableOpacity onPress={handleOpen}>
          {trigger}
        </TouchableOpacity>
      </Animated.View>

      <RNModal visible={modalVisible} transparent onRequestClose={handleClose}>
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)'
        }}>
          <View style={{ height: 200, width: 200, backgroundColor: 'white' }}>
            {extra}
          </View>
        </View>
      </RNModal>
    </View>);
};
export default Modal;
