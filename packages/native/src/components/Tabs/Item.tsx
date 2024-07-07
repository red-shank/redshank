import React from 'react';
import { Animated, TouchableOpacity } from 'react-native';

import { Text } from '../Text';
import useTheme from '../../context/theme/useTheme';
import { NumberStringValue, TabItemProps, TabsVariant } from './types';
import { Box } from '../Box';
import createSxStyle from '../../lib/sx';
import { SxProps } from '../../lib/styleDictionary';
import { ThemeProps } from '../../context';

export function Item({
  onPress,
  label,
  isActive,
  startAdornment,
  endAdornment,
  backgroundColors,
  labelColors,
  sx,
  size,
  style,
  labelProps,
  variant
}: Omit<TabItemProps, 'key' | 'children'> & {
  id: NumberStringValue;
  variant: TabsVariant;
}) {
  const theme = useTheme();
  const { activeOpacity } = useTheme();

  const [animationState] = React.useState({
    fadeAnim: new Animated.Value(0)
  });

  const fadeInAnimation = React.useCallback(() => {
    Animated.timing(animationState.fadeAnim, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true
    }).start(() => {
      Animated.timing(animationState.fadeAnim, {
        toValue: 1,
        duration: 500,
        delay: 10,
        useNativeDriver: true
      }).start();
    });
  }, [animationState.fadeAnim]);

  React.useEffect(() => {
    if (isActive) {
      fadeInAnimation();
    }
  }, [fadeInAnimation, isActive]);

  const variantStyle = getVariantStyles({
    backgroundColors,
    isActive,
    theme,
    labelColors
  })[variant];

  const isUnderlined = variant === 'underlined';

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={activeOpacity}
      style={createSxStyle(
        {
          ...variantStyle?.container,
          flexDirection: 'row',
          alignItems: 'center',
          style,
          sx
        },
        theme
      )}
    >
      <Box
        flex={1}
        gap={0.5}
        borderWidth={2}
        borderStyle="solid"
        alignItems="center"
        flexDirection="row"
        justifyContent="center"
        sx={variantStyle?.bg}
        height={theme.sizes[size] - (isUnderlined ? 0 : 1.548 * theme.spacing)}
      >
        {startAdornment}
        <Text {...labelProps} sx={variantStyle?.label}>
          {label}
        </Text>
        {endAdornment}
      </Box>
      {isUnderlined && (
        <Box
          height={4}
          width="100%"
          position="absolute"
          bottom={-2}
          rounded={1}
          bg={
            isActive
              ? backgroundColors?.activeColor || 'primary'
              : backgroundColors?.inactiveColor || 'transparent'
          }
        />
      )}
    </TouchableOpacity>
  );
}

const getVariantStyles: (
  props: Pick<TabItemProps, 'backgroundColors' | 'labelColors'> & {
    isActive: boolean;
    theme: ThemeProps;
  }
) => Record<
  TabsVariant,
  {
    bg: SxProps;
    label: SxProps;
    container: SxProps;
  }
> = ({ backgroundColors, isActive, theme, labelColors }) => {
  return {
    solid: {
      container: {},
      bg: {
        borderRadius: theme.borderRadius.tab - 0.5,
        borderColor: isActive
          ? backgroundColors?.activeColor || 'primary'
          : backgroundColors?.inactiveColor || 'card',
        backgroundColor: isActive
          ? backgroundColors?.activeColor || 'primary'
          : backgroundColors?.inactiveColor || 'card'
      },
      label: {
        color: isActive
          ? labelColors?.activeColor || 'white'
          : labelColors?.inactiveColor || 'text'
      }
    },
    underlined: {
      container: {},
      bg: {},
      label: {
        color: isActive
          ? labelColors?.activeColor || 'primary'
          : labelColors?.inactiveColor || 'text'
      }
    },
    bordered: {
      container: {},
      bg: {
        borderRadius: 0.6,
        borderWidth: 1,
        borderColor: isActive
          ? backgroundColors?.activeColor || 'border'
          : backgroundColors?.inactiveColor || 'transparent',
        backgroundColor: isActive
          ? backgroundColors?.activeColor || 'background'
          : backgroundColors?.inactiveColor || 'transparent'
      },
      label: {
        color: isActive
          ? labelColors?.activeColor || 'text'
          : labelColors?.inactiveColor || 'text'
      }
    },
    light: {
      container: {},
      bg: {
        borderRadius: 0.6,
        borderColor: 'transparent',
        backgroundColor: isActive
          ? backgroundColors?.activeColor || 'primary'
          : backgroundColors?.inactiveColor || 'transparent'
      },
      label: {
        color: isActive
          ? labelColors?.activeColor || 'white'
          : labelColors?.inactiveColor || 'text'
      }
    }
  };
};
