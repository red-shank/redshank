import React from 'react';
import { scale } from 'react-native-size-matters';
import {
  Animated,
  StyleSheet,
  View,
  Modal,
  StatusBar,
  Platform,
  ScrollView,
  RefreshControl
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
    Component = isPressable ? Ripple : View,
    borderWidth = 1,
    borderColor = 'border',
    withBorder = !!borderColor,
    background = 'card',
    rippleProps = {
      disableRipple: true
    },
    componentStyle,
    style = {},
    ...restProps
  }) => {
    const { colors, activeOpacity, borderRadius, zIndices, paddingSizes } =
      useTheme();
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

    return (
      <>
        <Animated.View style={StyleSheet.flatten([styles.wrapper, style])}>
          <BaseComponent
            Component={Component}
            activeOpacity={activeOpacity}
            style={StyleSheet.flatten([
              {
                borderRadius: isOpen ? 0 : borderRadius.card,
                backgroundColor: colors[background] || background
              },
              withBorder && {
                borderWidth,
                borderColor: colors[borderColor] || borderColor
              },
              componentStyle
            ])}
            disableRipple={rippleProps?.disableRipple}
            disableTransform={rippleProps?.disableTransform}
            {...restProps}
            onPress={onInternalPress}
          >
            {children}
          </BaseComponent>
        </Animated.View>

        <Modal visible={isOpen} animationType="fade">
          <StatusBar hidden />
          <BaseComponent
            Component={ScrollView}
            refreshControl={
              <RefreshControl
                style={{ opacity: 0 }}
                refreshing={false}
                children={<View />}
                onRefresh={onInternalClose}
              />
            }
            activeOpacity={activeOpacity}
            style={StyleSheet.flatten([
              styles.openCard,
              {
                backgroundColor: colors.background
              }
            ])}
            disableRipple={true}
            disableTransform={true}
            {...restProps}
            onPress={undefined}
          >
            <Button
              type="link"
              color="text"
              style={StyleSheet.flatten([
                styles.closeButton,
                { zIndex: zIndices.max }
              ])}
              onPress={onInternalClose}
            >
              <Icon name="close-circle" type="ionicon" color="text" size={37} />
            </Button>
            {!onlyExpandContent && (
              <View style={StyleSheet.flatten([styles.openCard])}>
                {children}
              </View>
            )}
            {isOpen ? (
              <Animated.View style={[{ padding: paddingSizes.card }]}>
                {expandContent}
              </Animated.View>
            ) : null}
          </BaseComponent>
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

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    borderStyle: 'solid',
    flexDirection: 'column',
    position: 'relative'
  },
  openCard: {
    position: 'relative',
    borderRadius: 0
  },
  closeButton: {
    position: 'absolute',
    top: Platform.select({
      ios: scale(20),
      default: scale(20)
    }),
    right: 20
  }
});
