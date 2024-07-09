import React from 'react';
import {
  Animated,
  StyleSheet,
  Modal,
  RefreshControl,
  Platform
} from 'react-native';

import Body from './Body';
import Header from './Header';
import Footer from './Footer';
import Divider from './Divider';
import { Ripple } from '../Ripple';
import useTheme from '../../context/theme/useTheme';
import { Button } from '../Button';
import { Icon } from '../Icon';
import BaseComponent from './Base';
import { useCardProvider, CardProvider } from './Context';
import type { CardProps } from './types';
import { Box } from '../Box';
import createSxStyle, { getSxStyleAndProps } from '../../lib/sx';
import { ScrollView } from '../ScrollView';

interface ComponentExport {
  Header: typeof Header;
  Divider: typeof Divider;
  Body: typeof Body;
  Footer: typeof Footer;
}

const CardRender: React.FC<CardProps> = React.memo(
  ({
    children,
    expandContent,
    onPress,
    onClose,
    isExpandCard = Boolean(expandContent),
    isPressable = isExpandCard,
    Component = isPressable ? Ripple : Box,
    borderWidth = 1,
    borderColor = 'border',
    withBorder = !!borderColor,
    background = 'card',
    rippleProps = {
      disableRipple: true
    },
    style = {},
    sx,
    styles,
    ...restProps
  }) => {
    const theme = useTheme();
    const {
      isOpen,
      toggle: toggleAction,
      onlyExpandContent
    } = useCardProvider();

    const onInternalPress = React.useCallback(
      (event) => {
        if (isPressable && expandContent) {
          toggleAction();
        }
        onPress && onPress(event);
      },
      [expandContent, isPressable, onPress, toggleAction]
    );

    const onInternalClose = React.useCallback(
      (event?: any) => {
        if (expandContent && isPressable) {
          toggleAction();
        }
        onClose && onClose(event);
      },
      [expandContent, isPressable, onClose, toggleAction]
    );

    const resolveProps = getSxStyleAndProps(
      {
        borderStyle: 'solid',
        flexDirection: 'column',
        position: 'relative',
        sx: sx?.root,
        ...sx,
        ...restProps,
        style: [style, styles?.root]
      },
      theme
    );

    return (
      <>
        <Animated.View style={resolveProps.style} {...resolveProps.props}>
          <BaseComponent
            Component={Component}
            activeOpacity={theme.activeOpacity}
            rounded={isOpen ? 0 : theme.borderRadius.card}
            overflow="hidden"
            bg={theme.colors.get(background)}
            sx={sx?.base}
            style={StyleSheet.flatten([
              withBorder && {
                borderWidth,
                borderColor: theme.colors.get(borderColor)
              },
              styles?.base
            ])}
            disableRipple={rippleProps?.disableRipple}
            disableTransform={rippleProps?.disableTransform}
            {...restProps}
            onPress={onInternalPress}
          >
            {children}
          </BaseComponent>
        </Animated.View>

        <Modal
          visible={isOpen}
          animationType="fade"
          presentationStyle="pageSheet"
          style={createSxStyle(
            {
              sx: sx?.modal,
              style: styles?.modal
            },
            theme
          )}
        >
          <Box
            flex={1}
            sx={sx?.modalBody}
            alignItems="center"
            bg="background.main"
            justifyContent="center"
            style={styles?.modalBody}
          >
            <Box
              height="100%"
              width={theme.width}
              sx={sx?.modalContent}
              style={styles?.modalContent}
            >
              {/*<StatusBar hidden />*/}
              <BaseComponent
                Component={ScrollView}
                refreshControl={
                  <RefreshControl
                    style={{ opacity: 0 }}
                    refreshing={false}
                    children={<Box />}
                    onRefresh={onInternalClose}
                  />
                }
                activeOpacity={theme.activeOpacity}
                bg="background"
                disableRipple={true}
                disableTransform={true}
                sx={sx?.modalBase}
                style={styles?.modalBase}
                {...restProps}
                onPress={undefined}
              >
                {Platform.select({
                  ios: null,
                  default: (
                    <Button
                      type="link"
                      appearance="text"
                      zIndex="max"
                      position="absolute"
                      top={20}
                      right={20}
                      onPress={onInternalClose}
                      style={styles?.modalCloseButton}
                      sx={sx?.modalCloseButton}
                    >
                      <Icon
                        name="close-circle"
                        type="ionicon"
                        color="text"
                        size={37}
                        style={styles?.modalCloseIcon}
                        sx={sx?.modalCloseIcon}
                      />
                    </Button>
                  )
                })}
                {!onlyExpandContent && (
                  <Box style={styles?.modalChildren} sx={sx?.modalChildren}>
                    {children}
                  </Box>
                )}
                {isOpen ? (
                  <Animated.View
                    style={createSxStyle(
                      {
                        padding: 2,
                        sx: sx?.modalExpand,
                        style: styles?.modalExpand
                      },
                      theme
                    )}
                  >
                    {expandContent}
                  </Animated.View>
                ) : null}
              </BaseComponent>
            </Box>
          </Box>
        </Modal>
      </>
    );
  }
);

export const Card: React.FC<CardProps> & ComponentExport = ({
  expandContent,
  onlyExpandContent,
  ...props
}) => {
  return (
    <CardProvider
      expandContent={expandContent}
      onlyExpandContent={onlyExpandContent}
    >
      <CardRender {...props} expandContent={expandContent} />
    </CardProvider>
  );
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
Card.Divider = Divider;
