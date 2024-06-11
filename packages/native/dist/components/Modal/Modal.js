import React from 'react';
import { Modal as RNModal, Platform, RefreshControl, ScrollView, StatusBar, TouchableOpacity, StyleSheet, View, } from 'react-native';
import { Icon } from '../Icon';
import { Button } from '../Button';
import useTheme from '../../context/theme/useTheme';
import useHeaderHeight from '../../hooks/useHeaderHeight';
import useModal from '../../hooks/useModal';
export const MIN_PADDING_VERTICAL = 20;
export const Modal = ({ children, hiddenBar, visible, onClose, fullScreen, extra, buttonCloseStyle, maskStyle, contentStyle, contentContainerStyle, closable = true, closeIconProps = {}, scrollable = false, maskClosable = false, maskComponent: Component = maskClosable ? TouchableOpacity : View, position = 'center', animationType = 'fade', }) => {
    const { zIndices, colors, paddingSizes, borderRadius, activeOpacity } = useTheme();
    const height = useHeaderHeight();
    const ComponentChild = React.useMemo(() => {
        return scrollable ? ScrollView : TouchableOpacity;
    }, [scrollable]);
    return (<RNModal transparent visible={visible} animationType={animationType}>
      {hiddenBar && <StatusBar hidden/>}
      <Component onPress={onClose} activeOpacity={activeOpacity} style={StyleSheet.flatten([
            styles.wrapper,
            styles[position],
            {
                backgroundColor: colors.modalMask,
                paddingHorizontal: paddingSizes.card,
                paddingVertical: position === 'top' ? height : MIN_PADDING_VERTICAL * 1.5,
            },
            fullScreen && styles.fullScreen,
            maskStyle,
        ])}>
        <ComponentChild activeOpacity={1} refreshControl={<RefreshControl style={{ opacity: 0 }} refreshing={false} children={<View />} onRefresh={onClose}/>} contentContainerStyle={contentContainerStyle} style={StyleSheet.flatten([
            styles.content,
            {
                borderRadius: borderRadius.modal,
                padding: paddingSizes.modal,
                backgroundColor: colors.modal,
            },
            fullScreen && !scrollable && styles.fullContent,
            contentStyle,
        ])}>
          {closable ? (<Button type="link" color="text" onPress={onClose} style={StyleSheet.flatten([
                styles.closeButton,
                scrollable && styles.closeButtonScroll,
                fullScreen && styles.closeButtonFull,
                { zIndex: zIndices.max },
                buttonCloseStyle,
            ])}>
              <Icon name="close-circle" type="ionicon" color="text" size={37} {...closeIconProps}/>
            </Button>) : null}
          {children}
        </ComponentChild>
        {extra}
      </Component>
    </RNModal>);
};
Modal.useModal = useModal;
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    content: {
        position: 'relative',
    },
    fullScreen: {
        paddingHorizontal: 0,
        paddingVertical: 0,
    },
    fullContent: {
        flex: 1,
        padding: 0,
    },
    top: {
        justifyContent: 'flex-start',
    },
    center: {
        justifyContent: 'center',
    },
    bottom: {
        justifyContent: 'flex-end',
    },
    closeButton: {
        position: 'absolute',
        top: Platform.select({
            ios: 15,
            default: 15,
        }),
        right: 15,
    },
    closeButtonFull: {
        top: 30,
        right: 20,
    },
    closeButtonScroll: {
        top: 0,
        right: 0,
    },
});
