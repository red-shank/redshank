import React, { isValidElement, useMemo } from 'react';
import { StyleSheet, Animated } from 'react-native';

import { Text } from '../../components/Text';
import { Ripple } from '../../components/Ripple';
import useTheme from '../theme/useTheme';
import { isValidChild } from '../../utils/render';
import { FuncRenderIcon, MessageProps } from './types';
import { Box } from '../../components/Box';
import createSxStyle from '../../lib/sx';

export const Base: React.FC<MessageProps> = ({
  startContent,
  endContent,
  content,
  onPress,
  onClose,
  opacityAnimation,
  translateYAnimation,
  closable = !onPress,
  withBoxShadow = true,
  withIcon = false,
  style = {},
  styleText = {},
  Component = closable || onPress ? Ripple : Box
}) => {
  const theme = useTheme();
  const { colors, isDark, activeOpacity } = useTheme();

  const boxShadowColor = React.useMemo(() => {
    return isDark ? colors.gray600 : colors.gray300;
  }, [colors, isDark]);

  const standardContent = useMemo(() => {
    return {
      title: (content as any)?.title || content,
      description: (content as any)?.description
    };
  }, [content]);

  const internalPress = (event: any) => {
    if (onPress) {
      onPress?.(event);
    }
    if (closable) {
      onClose();
    }
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

  const showStartContent = withIcon || startContent;

  return (
    <Box px={4} flex={1}>
      <Component
        width="100%"
        height="100%"
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
              borderColor: 'gray400',
              opacity: opacityAnimation,
              transform: [
                {
                  translateY: translateYAnimation
                }
              ],
              mx: 'auto',
              height: '100%',
              borderRadius: 2,
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
            borderRadius={1.6}
            alignItems="center"
            flexDirection="row"
          >
            {showStartContent ? start : null}
            <Box>
              {isValidChild(standardContent?.title) ? (
                standardContent?.title
              ) : (
                <Text fontWeight="500" style={styleText}>
                  {standardContent?.title}
                </Text>
              )}
              {isValidChild(standardContent?.description) ? (
                standardContent?.description
              ) : (
                <Text style={styleText}>{standardContent?.description}</Text>
              )}
            </Box>
          </Box>
          {end}
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
