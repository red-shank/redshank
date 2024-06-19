import React, { useMemo, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { Text, TextProps } from '../../../Text';
import { Ripple } from '../../../Ripple';
import useTheme from '../../../../context/theme/useTheme';
import { SxProps } from '../../../../lib/styleDictionary';

interface CellProps {
  content: string | number;
  textColor?: TextProps['color'];
  fontSize?: TextProps['size'];
  selected?: boolean;
  disabled?: boolean;
  sx?: SxProps;
  isNow?: boolean;
  disabledRipple?: boolean;
  onPress?: () => void;
  isLabel?: boolean;
  style?: TextProps['style'];
}

export default function Cell({
  selected,
  content,
  fontSize,
  isNow,
  disabledRipple,
  textColor,
  onPress,
  isLabel,
  style,
  sx
}: CellProps) {
  const { width, borderRadius, colors } = useTheme();
  const fadeAnimation = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    fadeAnimation.setValue(0);

    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true
    }).start();

    onPress?.();
  };

  const styleSize = useMemo(() => {
    const inheritWidth = width - 40;
    const MD = 25 * 7;
    const LG = 28 * 7;

    if (inheritWidth >= LG) {
      return styles.textLg;
    }
    if (inheritWidth >= MD) {
      return styles.textMd;
    }

    return styles.textSm;
  }, [width]);

  return (
    <Ripple
      p={1.1}
      sx={sx}
      onPress={handlePress}
      disabled={disabledRipple}
      style={StyleSheet.flatten([styles.content, style])}
    >
      {selected && (
        <Animated.View
          style={StyleSheet.flatten([
            {
              height: styleSize.height + 8,
              width: styleSize.width + 8
            },
            isLabel && styles.textHeightAuto,
            styles.textWrapper,
            styles.backgroundAbsolute,
            {
              opacity: fadeAnimation,
              borderRadius: borderRadius.max,
              backgroundColor: colors.primary,
              zIndex: 1
            }
          ])}
        />
      )}

      <Text
        align="center"
        size={fontSize}
        marginBottom={0}
        fontWeight={selected ? '400' : '300'}
        color={
          selected
            ? 'white'
            : disabledRipple
              ? 'accents5'
              : isNow
                ? 'primary'
                : textColor
        }
        containerStyle={StyleSheet.flatten([
          styleSize,
          isLabel && styles.textHeightAuto,
          styles.textWrapper
        ])}
        sx={{
          root: {
            zIndex: 2
          }
        }}
      >
        {content}
      </Text>
    </Ripple>
  );
}

const styles = StyleSheet.create({
  content: {
    position: 'relative',
    flex: 1 / 7,
    overflow: 'hidden',
    alignItems: 'center'
  },
  backgroundAbsolute: {
    position: 'absolute',
    bottom: 0,
    top: 1
  },
  textWrapper: {
    flexShrink: 0,
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textHeightAuto: {
    height: 'auto'
  },
  textSm: {
    width: 14,
    height: 14
  },
  textMd: {
    width: 18,
    height: 18
  },
  textLg: {
    width: 27,
    height: 27
  }
});
