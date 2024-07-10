import React, { Children, FC, useEffect, useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import { CarouselProps } from './types';
import useTheme from '../../context/theme/useTheme';
import { Box } from '../Box';

export const Carousel: FC<CarouselProps> = ({
  maxWidth,
  widthChild,
  variant = 'default',
  children = [],
  showScroll = false,
  scrollViewProps = {}
}) => {
  const ref = useRef<ScrollView>(null);
  const theme = useTheme();
  const width = maxWidth ?? theme.width;

  const isIos = variant === 'ios';

  useEffect(() => {
    setTimeout(() => {
      ref.current.scrollTo({ y: 0, x: 0, animated: true });
    }, 1);
  }, []);

  return (
    <ScrollView
      ref={ref}
      horizontal
      pagingEnabled
      style={styles.container}
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      bounces={false}
      showsHorizontalScrollIndicator={showScroll}
      showsVerticalScrollIndicator={showScroll}
      decelerationRate="fast"
      snapToInterval={isIos ? width - 47 : width}
      snapToAlignment="center"
      contentInset={{
        top: 0,
        left: isIos ? 0 : 0,
        bottom: 0,
        right: isIos ? 0 : 0
      }}
      {...scrollViewProps}
    >
      {Children.map(children, (child, index) => {
        const isFirst = index === 0;
        const isLast = index === Children.count(children) - 1;

        return (
          <Box
            bg="transparent"
            mx={isIos && 0.8}
            pl={!isIos && !isFirst && 1}
            pr={!isIos && !isLast && 1}
            flex={!isIos ? 1 : 0.8}
            width={isIos ? widthChild ?? width - 60 : width}
          >
            {child}
          </Box>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10
  },
  view: {
    margin: 5
  }
});
