import React, { Children, FC, useEffect, useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import { CarouselProps } from './types';
import useTheme from '../../context/theme/useTheme';

export const Carousel: FC<CarouselProps> = ({
  widthChild,
  children = [],
  showScroll = false,
  scrollViewProps = {},
}) => {
  const ref = useRef<ScrollView>(null);
  const { width } = useTheme();

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
      showsHorizontalScrollIndicator={showScroll}
      decelerationRate="fast"
      snapToInterval={width - 50}
      snapToAlignment="center"
      contentInset={{
        top: 0,
        left: 30,
        bottom: 0,
        right: 30,
      }}
      {...scrollViewProps}
    >
      {Children.map(children, (child) => {
        return (
          <View
            style={StyleSheet.flatten([
              styles.view,
              {
                width: widthChild ?? width - 60,
              },
            ])}
          >
            {child}
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  view: {
    margin: 5,
  },
});
