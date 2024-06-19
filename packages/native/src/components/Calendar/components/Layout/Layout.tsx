import React, { memo, PropsWithChildren, useEffect } from 'react';
import useTheme from '../../../../context/theme/useTheme';
import { Animated, StyleSheet, View } from 'react-native';

import { ScrollView, useScrollTo } from '../../scrollTo';
import { useCalendarContext } from '../../context/calendar';
import { getWeekOfMonthFromDay } from '../../utils';
import { useCalendarMonthContext } from '../../context/CalendarMonth';
import { Box } from '../../../Box';
import createSxStyle from '../../../../lib/sx';

function CalendarLayout({ children }: PropsWithChildren) {
  const theme = useTheme();
  const { colors } = useTheme();
  const { openYearList } = useCalendarMonthContext();
  const { styles: stylesProp, sx, backgroundColor } = useCalendarContext();

  const Component = openYearList ? View : ScrollView;

  return (
    <Box sx={sx?.layout} style={stylesProp?.layout}>
      <Animated.View
        style={createSxStyle(
          {
            sx: sx?.container,
            style: StyleSheet.flatten([
              !!backgroundColor && {
                backgroundColor: colors?.[backgroundColor] || backgroundColor
              },
              stylesProp?.container
            ])
          },
          theme
        )}
      >
        <Component
          bounces={false}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {children}

          <CustomButton />
        </Component>
      </Animated.View>
    </Box>
  );
}

function CustomButton({ trigger }: { trigger?: boolean }) {
  const { selectedDate } = useCalendarContext();
  const { scrollTo } = useScrollTo();

  useEffect(() => {
    setTimeout(() => {
      scrollTo(getWeekOfMonthFromDay(selectedDate, 1), { offset: -25 }).then();
    }, 50);
  }, [scrollTo, selectedDate, trigger]);

  return null;
}

export default memo(CalendarLayout);
