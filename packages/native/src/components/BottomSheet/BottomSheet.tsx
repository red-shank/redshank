import React from 'react';
import { Animated, PanResponder, Platform } from 'react-native';

import { Box } from '../Box';
import useTheme from '../../context/theme/useTheme';
import createSxStyle from '../../lib/sx';
import { BottomSheetProps } from './types';
import { Modal } from '../Modal';

export const BottomSheet: React.FC<BottomSheetProps> = ({
  children,
  visible,
  onClose,
  fullScreen,
  animationType = 'slide',
  sx,
  styles,
  containerStyle,
  containerSx,
  contentStyle,
  contentSx,
  headerPan,
  ...rest
}) => {
  const theme = useTheme();

  const pan = React.useRef(new Animated.Value(0)).current;

  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderTerminate: () => {
        Animated.spring(pan, {
          toValue: 0,
          useNativeDriver: false
        }).start();
        onClose?.();
      },
      onPanResponderMove: (evt, gestureState) => {
        const isDown = gestureState.dy > 0;
        if (isDown) {
          const newY = Math.max(-10, Math.min(gestureState.dy, 10));
          pan.setValue(newY);
        }
      },
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: 0,
          useNativeDriver: false
        }).start();
        onClose?.();
      }
    })
  ).current;

  return (
    <Modal
      p={0}
      width="100%"
      position="bottom"
      visible={visible}
      onClose={onClose}
      closable={false}
      maskClosable={false}
      height={fullScreen ? '100%' : undefined}
      animationType={animationType}
      styles={styles}
      sx={{
        ...sx,
        mask: {
          ...sx?.mask,
          bg: 'rgba(0, 0, 0, 0.7)'
        }
      }}
      {...rest}
    >
      <Box
        style={contentStyle}
        sx={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 'max',
          bg: 'transparent',
          pb: 1,
          roundedTop: theme.borderRadius.modal,
          ...contentSx
        }}
      >
        <Animated.View
          {...panResponder.panHandlers}
          style={createSxStyle(
            {
              // py: 1,
              transform: [{ translateY: pan }],
              style: Platform.select({
                web: {
                  cursor: 'pointer'
                },
                default: {}
              })
            },
            theme
          )}
        >
          {headerPan ?? (
            <Box height={5} width={50} my={1} bg="text" rounded={1} />
          )}
        </Animated.View>
      </Box>
      <Modal.Content
        pb={4}
        pt={1.2}
        rounded="modal"
        flex={fullScreen && 1}
        sx={containerSx}
        style={containerStyle}
      >
        {children}
      </Modal.Content>
    </Modal>
  );
};
