import React, { forwardRef, useMemo, useState } from 'react';
import {
  Animated,
  Modal as RNModal,
  RefreshControl,
  StatusBar
} from 'react-native';

import useTheme from '../../context/theme/useTheme';
import { useStatusBarHeight } from '../../hooks/useHeaderHeight';
import useModal, { UseModalType } from '../../hooks/useModal';

import type { ModalProps, PositionType } from './types';
import { Box } from '../Box';
import createSxStyle from '../../lib/sx';
import { SxProps } from '../../lib/styleDictionary';
import { Header } from './Header';
import { Content } from './Content';
import { Footer } from './Footer';
import { ScrollView } from '../ScrollView';
import { Button } from '../Button';
import { CloseOutlineIcon } from '../../icons';

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

const RenderModal = forwardRef<RNModal, ModalProps>(
  (
    {
      children,
      hiddenBar,
      visible: isOpen,
      onClose,
      fullScreen,
      styles,
      sx,
      extra,
      closeIcon,
      statusHeight: _statusHeight,
      closable = true,
      scrollable = false,
      maskClosable = true,
      maskComponent: MaskComponent = Animated.View,
      position = 'center',
      animationType = position !== 'bottom' ? 'fade' : 'slide',
      ...rest
    },
    ref
  ) => {
    const [visible, setVisible] = useState(false);
    const translate = React.useRef(
      new Animated.Value(DEFAULT_ANIMATIONS.translate)
    ).current;
    const fadeMask = React.useRef(
      new Animated.Value(DEFAULT_ANIMATIONS.fadeMask)
    ).current;

    const theme = useTheme();

    const statusBarHeight = useStatusBarHeight();

    const ComponentChild = scrollable ? ScrollView : Box;

    const isBottom = useMemo(() => position === 'bottom', [position]);
    const isEnabledAnimation = useMemo(
      () => animationType !== 'none',
      [animationType]
    );

    React.useEffect(() => {
      if (isOpen) {
        setVisible(true);
        if (isEnabledAnimation) {
          if (isBottom) {
            Animated.parallel([
              Animated.timing(fadeMask, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true
              }),
              Animated.timing(translate, {
                toValue: 0,
                duration: 200,
                useNativeDriver: false
              })
            ]).start();
          } else {
            Animated.timing(fadeMask, {
              toValue: 1,
              duration: 250,
              useNativeDriver: true
            }).start();
          }
        }
      } else if (!isOpen) {
        if (isBottom) {
          Animated.parallel([
            Animated.timing(fadeMask, {
              toValue: DEFAULT_ANIMATIONS.fadeMask,
              duration: 150,
              useNativeDriver: true
            }),
            Animated.timing(translate, {
              toValue: DEFAULT_ANIMATIONS.translate,
              duration: 200,
              useNativeDriver: false
            })
          ]).start(() => {
            setVisible(false);
          });
        } else {
          Animated.timing(fadeMask, {
            toValue: DEFAULT_ANIMATIONS.fadeMask,
            isInteraction: false,
            duration: 250,
            useNativeDriver: true
          }).start(() => {
            setVisible(false);
          });
        }
      }
    }, [fadeMask, isBottom, isEnabledAnimation, isOpen, translate]);

    const icon = closeIcon || (
      <CloseOutlineIcon
        fill="text"
        size={32}
        sx={sx?.closeIcon}
        style={styles?.closeIcon}
      />
    );

    // console.log({ fadeMask: (fadeMask as any)._value, visible });
    // if (!visible) return null;
    return (
      <RNModal ref={ref} transparent visible={visible} hardwareAccelerated>
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
            onTouchEnd={maskClosable ? onClose : undefined}
            activeOpacity={1}
            style={createSxStyle(
              {
                position: 'absolute',
                zIndex: 1,
                flex: 1,
                height: '100%',
                width: '100%',
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
                      opacity: fadeMask
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
