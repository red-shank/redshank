import React, { Children, FC, useEffect, useRef } from 'react';
import { ScrollView as RNScrollView } from 'react-native';

import { CarouselProps } from './types';
import useTheme from '../../context/theme/useTheme';
import { Box } from '../Box';
import { ScrollView } from '../ScrollView';
import { Touchable } from '../Touchable';
import { getLighten } from '../../utils';

export const Carousel: FC<CarouselProps> = ({
  maxWidth,
  widthChild,
  sx,
  styles,
  renderDots,
  dotsBackground,
  variant = 'default',
  children = [],
  showScroll = false,
  withDots = variant !== 'ios',
  scrollViewProps = {},
  rounded = variant === 'ios' && 1.2,
  ...restSxProps
}) => {
  const [active, setActive] = React.useState(0);
  const ref = useRef<RNScrollView>(null);
  const theme = useTheme();
  const width = maxWidth ?? theme.width;

  const isIos = variant === 'ios';

  useEffect(() => {
    setTimeout(() => {
      ref.current.scrollTo({ y: 0, x: 0, animated: true });
    }, 1);
  }, []);

  const onPressDot = (index: number) => {
    ref.current.scrollTo({
      y: 0,
      x: (isIos ? Number(widthChild ?? width - 60) : width) * index,
      animated: true
    });
  };

  return (
    <Box {...sx} sx={sx?.root} style={styles?.root}>
      <ScrollView
        ref={ref}
        horizontal
        pagingEnabled
        bounces={false}
        decelerationRate={0}
        sx={{
          rounded,
          ...sx?.scrollView,
          ...restSxProps
        }}
        contentContainerSx={sx?.scrollViewContent}
        style={styles?.scrollView}
        contentContainerStyle={styles?.scrollViewContent}
        onScroll={(event) => {
          const contentOffsetX = event.nativeEvent.contentOffset.x;
          setActive(Math.round(contentOffsetX / width));
        }}
        alwaysBounceVertical={false}
        alwaysBounceHorizontal={false}
        showsHorizontalScrollIndicator={showScroll}
        showsVerticalScrollIndicator={showScroll}
        snapToInterval={isIos ? width - 47 : width}
        snapToAlignment="center"
        contentInset={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        }}
        {...scrollViewProps}
      >
        {Children.map(children, (child) => {
          return (
            <Box
              bg="transparent"
              overflow="hidden"
              mx={isIos && 0.8}
              flex={!isIos ? 1 : 0.8}
              rounded={isIos ? rounded : undefined}
              width={isIos ? widthChild ?? width - 60 : widthChild ?? width}
              sx={sx?.item}
              style={styles?.item}
            >
              {child}
            </Box>
          );
        })}
      </ScrollView>
      {withDots && (
        <Box
          left={0}
          right={0}
          gap={0.5}
          bottom={8}
          zIndex={2}
          position="absolute"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          sx={sx?.dotWrapper}
          style={styles?.dotWrapper}
        >
          {Children.map(children, (_, index) => {
            const isActive = index === active;
            if (renderDots) {
              return renderDots({
                isActive,
                index,
                onPress: onPressDot,
                totalItems: Children.count(children)
              });
            }
            return (
              <Touchable
                height={14}
                borderRadius="max"
                width={isActive ? 32 : 14}
                onPress={() => onPressDot(index)}
                bg={
                  isActive
                    ? dotsBackground?.active || 'primary'
                    : dotsBackground?.inactive ||
                      getLighten(theme.colors.get('primary.main'), 92)
                }
                sx={sx?.dot}
                style={styles?.dot}
              />
            );
          })}
        </Box>
      )}
    </Box>
  );
};
