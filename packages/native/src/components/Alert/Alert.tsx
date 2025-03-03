import React, { isValidElement, useMemo } from 'react';
import { StyleSheet, Animated, Platform, DimensionValue } from 'react-native';

import { Text } from '../../components/Text';
import { Ripple } from '../../components/Ripple';
import useTheme from '../../context/theme/useTheme';
import { isValidChild } from '../../utils/render';
import { AlertProps, AlertType, FuncRenderIcon } from './types';
import { Box } from '../../components/Box';
import createSxStyle from '../../lib/sx';
import { Button } from '../Button';
import {
  CheckSuccessIcon,
  InfoOutlineIcon,
  WarningOutlineIcon,
  CloseOutlineIcon
} from '../../icons';

const icons: Record<AlertType, React.ReactNode> = {
  default: <CheckSuccessIcon size={25} fill="success" />,
  success: <CheckSuccessIcon size={25} fill="success" />,
  info: <InfoOutlineIcon fill="info" size={25} />,
  warning: <WarningOutlineIcon fill="warning" size={25} />,
  error: <CloseOutlineIcon size={25} fill="error" />
};

export const Alert: React.FC<AlertProps> = ({
  endContent,
  content,
  onPress,
  onClose,
  opacity,
  type,
  sx,
  closeText = 'Close',
  withInternalClose = false,
  closable = !onPress,
  withBoxShadow = false,
  withIcon = true,
  translateYAnimation = new Animated.Value(0),
  startContent = withIcon ? icons[type] : null,
  style = {},
  styleText = {},
  Component = (closable || onPress) && !withInternalClose ? Ripple : Box,
  ...restSxProps
}) => {
  const theme = useTheme();
  const [internalClose, setInternalClose] = React.useState(false);
  const { colors, isDark, activeOpacity, borderRadius } = theme;

  const boxShadowColor = React.useMemo(() => {
    return isDark ? colors.get('gray.800') : colors.get('gray.200');
  }, [colors, isDark]);

  const standardContent = useMemo(() => {
    return {
      title: (content as any)?.title || content,
      description: (content as any)?.description
    };
  }, [content]);

  const internalPress = (event: any) => {
    onPress?.(event);
    closable && onClose?.();
  };

  const start = useMemo<React.ReactNode>(() => {
    if (!startContent) return null;
    return isValidElement(startContent)
      ? (startContent as React.ReactNode)
      : (startContent as FuncRenderIcon)(onClose);
  }, [onClose, startContent]);

  const end = useMemo<React.ReactNode>(() => {
    if (!endContent) return null;
    return isValidElement(endContent)
      ? (endContent as React.ReactNode)
      : (endContent as FuncRenderIcon)(onClose);
  }, [onClose, endContent]);

  const showStartContent = withIcon || !!startContent;

  if (internalClose) return null;

  const height = Platform.select<DimensionValue>({
    default: '100%',
    web: undefined
  });

  const flex = Platform.select({
    default: 1,
    web: undefined
  });

  return (
    <Box flex={flex} sx={sx} {...restSxProps}>
      <Component
        width="100%"
        height={height}
        onPress={internalPress}
        disableRipple={false}
        disableTransform={true}
        activeOpacity={activeOpacity}
      >
        <Animated.View
          style={createSxStyle(
            {
              p: 1.5,
              gap: 1,
              width: '100%',
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: boxShadowColor,
              opacity: opacity,
              transform: [
                {
                  translateY: translateYAnimation
                }
              ],
              mx: 'auto',
              height: '100%',
              borderRadius: borderRadius.alert,
              position: 'relative',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              bg: 'notification',
              style: [
                withBoxShadow && styles.shadowStyle,
                withBoxShadow && {
                  shadowColor: boxShadowColor
                },
                style
              ]
            },
            theme
          )}
        >
          <Box
            gap={1}
            flex={1}
            height="100%"
            borderRadius={borderRadius.alert}
            alignItems="center"
            flexDirection="row"
            pr={withInternalClose || endContent ? 4 : 0}
          >
            {showStartContent ? start : null}
            <Box width={withInternalClose ? '100%' : '90%'}>
              {isValidChild(standardContent?.title) ? (
                standardContent?.title
              ) : (
                <Text
                  size="sm"
                  fontWeight={standardContent?.description ? '500' : '400'}
                  style={styleText}
                >
                  {standardContent?.title}
                </Text>
              )}
              {isValidChild(standardContent?.description) ? (
                standardContent?.description
              ) : (
                <Text style={styleText} size="sm">
                  {standardContent?.description}
                </Text>
              )}
            </Box>
          </Box>
          {end}
          {withInternalClose && (
            <Button
              bold
              type="link"
              color="text"
              onPress={() => setInternalClose(true)}
            >
              {closeText}
            </Button>
          )}
        </Animated.View>
      </Component>
    </Box>
  );
};

const styles = StyleSheet.create({
  shadowStyle: {
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 5
  }
});
