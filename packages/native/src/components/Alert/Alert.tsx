import React, { isValidElement, useMemo } from 'react';
import { StyleSheet, Animated } from 'react-native';

import { Text } from '../../components/Text';
import { Ripple } from '../../components/Ripple';
import useTheme from '../../context/theme/useTheme';
import { isValidChild } from '../../utils/render';
import { AlertProps, AlertType, FuncRenderIcon } from './types';
import { Box } from '../../components/Box';
import createSxStyle from '../../lib/sx';
import { Icon } from '../../components/Icon';
import { Button } from '../Button';

const icons: Record<AlertType, React.ReactNode> = {
  default: <Icon type="antdesign" name="infocirlce" />,
  success: <Icon type="antdesign" name="checkcircle" color="success" />,
  info: <Icon type="antdesign" name="infocirlce" color="info" />,
  warning: <Icon type="entypo" name="warning" color="warning" />,
  error: <Icon type="antdesign" name="closecircle" color="error" />
};

// {
//   message,
//     sx,
//     sizeIcon = 18,
//     shadow = false,
//     closable = false,
//     type = 'warning',
//     withIcon = true,
// ...restProps
// }

export const Alert: React.FC<AlertProps> = ({
  endContent,
  content,
  onPress,
  onClose,
  opacity,
  type,
  sx,
  withInternalClose = false,
  closable = !onPress,
  withBoxShadow = false,
  withIcon = true,
  translateYAnimation = new Animated.Value(0),
  startContent = withIcon ? icons[type] : null,
  style = {},
  styleText = {},
  Component = (closable || onPress) && !withInternalClose ? Ripple : Box
}) => {
  const theme = useTheme();
  const [internalClose, setInternalClose] = React.useState(false);
  const { colors, isDark, activeOpacity } = useTheme();

  const boxShadowColor = React.useMemo(() => {
    return isDark ? colors.gray800 : colors.gray200;
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
  return (
    <Box flex={1} sx={sx}>
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
              borderColor: boxShadowColor,
              opacity: opacity,
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
            pr={withInternalClose || endContent ? 3 : 0}
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
          {withInternalClose && (
            <Button
              bold
              type="link"
              color="text"
              onPress={() => setInternalClose(true)}
            >
              Close
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
