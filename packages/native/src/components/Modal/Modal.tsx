import React, { forwardRef } from 'react';
import {
  Animated,
  Modal as RNModal,
  RefreshControl,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import useTheme from '../../context/theme/useTheme';
import { useStatusBarHeight } from '../../hooks/useHeaderHeight';
import useModal, { UseModalType } from '../../hooks/useModal';

import type { ModalHandle, ModalProps, PositionType } from './types';
import { Box } from '../Box';
import createSxStyle from '../../lib/sx';
import { ModalProvider } from './context';
import { SxProps } from '../../lib/styleDictionary';
import { Header } from './Header';
import { Content } from './Content';
import { Footer } from './Footer';
import { ScrollView } from '../ScrollView';
import { Icon } from '../Icon';
import { Button } from '../Button';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

type ExportComponent = {
  useModal: (initial?: boolean) => UseModalType;
  Header: typeof Header;
  Content: typeof Content;
  Footer: typeof Footer;
};

const DEFAULT_ANIMATIONS = {
  fade: 0,
  fadeMask: 0,
  translate: 250
};

const RenderModal = forwardRef<ModalHandle, ModalProps>(
  (
    {
      children,
      hiddenBar,
      visible,
      onClose: _onClose,
      fullScreen,
      styles,
      sx,
      extra,
      closeIcon,
      statusHeight: _statusHeight,
      closable = true,
      scrollable = false,
      maskClosable = true,
      maskComponent: MaskComponent = maskClosable
        ? AnimatedTouchable
        : Animated.View,
      position = 'center',
      animationType = position !== 'bottom' ? 'fade' : 'slide',
      ...rest
    },
    ref
  ) => {
    const translate = React.useRef(
      new Animated.Value(DEFAULT_ANIMATIONS.translate)
    ).current;
    const fadeMask = React.useRef(
      new Animated.Value(DEFAULT_ANIMATIONS.fadeMask)
    ).current;
    const fade = React.useRef(
      new Animated.Value(DEFAULT_ANIMATIONS.fade)
    ).current;

    const theme = useTheme();

    const statusBarHeight = useStatusBarHeight();

    const ComponentChild = scrollable ? ScrollView : Box;

    const isBottom = position === 'bottom';
    const isEnabledAnimation = animationType !== 'none';

    React.useEffect(() => {
      if (visible && isEnabledAnimation) {
        if (isBottom) {
          Animated.parallel([
            Animated.timing(fadeMask, {
              toValue: 1,
              duration: 200,
              useNativeDriver: false
            }),
            Animated.timing(translate, {
              toValue: 0,
              duration: 200,
              useNativeDriver: false
            })
          ]).start();
        } else {
          Animated.parallel([
            Animated.timing(fadeMask, {
              toValue: 1,
              duration: 200,
              useNativeDriver: false
            }),
            Animated.timing(fade, {
              toValue: 1,
              duration: 200,
              useNativeDriver: false
            })
          ]).start();
        }
      }
    }, [translate, isBottom, fade, visible, isEnabledAnimation, fadeMask]);

    const onClose = () => {
      if (!isEnabledAnimation) {
        _onClose?.();
      } else if (isBottom) {
        Animated.parallel([
          Animated.timing(translate, {
            toValue: DEFAULT_ANIMATIONS.fadeMask,
            duration: 150,
            useNativeDriver: false
          }),
          Animated.timing(translate, {
            toValue: DEFAULT_ANIMATIONS.translate,
            duration: 200,
            useNativeDriver: false
          })
        ]).start(_onClose);
      } else {
        Animated.parallel([
          Animated.timing(translate, {
            toValue: DEFAULT_ANIMATIONS.fadeMask,
            duration: 150,
            useNativeDriver: false
          }),
          Animated.timing(fade, {
            toValue: DEFAULT_ANIMATIONS.fade,
            duration: 200,
            useNativeDriver: false
          })
        ]).start(_onClose);
      }
    };

    const icon = closeIcon || (
      <Icon
        name="close-circle"
        type="ionicon"
        color="text"
        size={32}
        sx={sx?.closeIcon}
        style={styles?.closeIcon}
      />
    );

    React.useImperativeHandle(ref, () => ({
      onClose
    }));

    return (
      <ModalProvider
        onClose={onClose}
        closable={closable}
        isBottom={isBottom}
        scrollable={scrollable}
      >
        <RNModal transparent visible={visible}>
          {hiddenBar && <StatusBar hidden />}

          <Animated.View
            style={createSxStyle(
              {
                style: styles?.root,
                sx: {
                  position: 'absolute',
                  rounded: 'modal',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  flex: 1,
                  height: theme.height,
                  width: theme.width,
                  mx: 'auto',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: !scrollable ? 'hidden' : undefined,
                  ...positionSx[position],
                  ...sx?.root
                }
              },
              theme
            )}
          >
            <MaskComponent
              // @ts-ignore
              onPress={onClose}
              activeOpacity={1}
              style={createSxStyle(
                {
                  position: 'absolute',
                  zIndex: 1,
                  flex: 1,
                  height: '100%',
                  width: '100%',
                  opacity: isEnabledAnimation ? fadeMask : undefined,
                  bg: fullScreen ? 'modal' : 'modalMask',
                  ...positionSx[position],
                  style: styles?.mask,
                  sx: sx?.mask
                },
                theme
              )}
            />

            <Animated.View
              style={createSxStyle(
                {
                  zIndex: 2,
                  p: !scrollable || !fullScreen ? 1 : undefined,
                  flex: fullScreen ? 1 : undefined,
                  sx: sx?.container,
                  ...sx,
                  ...rest,
                  style: [
                    {
                      paddingTop: _statusHeight ?? statusBarHeight
                    },
                    isBottom &&
                      isEnabledAnimation && {
                        transform: [{ translateY: translate }]
                      },
                    !isBottom &&
                      isEnabledAnimation && {
                        opacity: fade
                      },
                    styles?.container
                  ]
                },
                theme
              )}
            >
              <ComponentChild
                style={createSxStyle(
                  {
                    rounded: 'modal',
                    bg: 'modal',
                    overflow: !scrollable || !fullScreen ? 'hidden' : undefined,
                    mb: scrollable && !fullScreen ? 3 : undefined,
                    sx: sx?.content,
                    style: styles?.content
                  },
                  theme
                )}
                contentContainerSx={{
                  overflow: 'hidden',
                  rounded: 'modal',
                  ...sx?.contentScroll
                }}
                contentContainerStyle={styles?.contentScroll}
                refreshControl={
                  <RefreshControl
                    style={{ opacity: 0 }}
                    refreshing={false}
                    children={<Box />}
                    onRefresh={onClose}
                  />
                }
              >
                {closable && (
                  <Button
                    onlyIcon
                    type="link"
                    appearance="text"
                    onPress={onClose}
                    position="absolute"
                    top={10}
                    right={10}
                    zIndex="max"
                  >
                    {icon}
                  </Button>
                )}
                {children}
              </ComponentChild>
              {extra}
            </Animated.View>
          </Animated.View>
        </RNModal>
      </ModalProvider>
    );
  }
);

const positionSx: Record<PositionType, SxProps> = {
  top: {
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottom: {
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
};

export const Modal = RenderModal as unknown as React.FC<ModalProps> &
  ExportComponent;

Modal.useModal = useModal;
Modal.Header = Header;
Modal.Content = Content;
Modal.Footer = Footer;
