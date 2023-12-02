import useTheme from '../../../../context/theme/useTheme';
import { Animated, StyleSheet, View } from 'react-native';
import { memo, PropsWithChildren, ReactNode, useEffect } from 'react';

import { ScrollView, useScrollTo } from '../../scrollTo';
import { useCalendarContext } from '../../context/calendar';
import { getWeekOfMonthFromDay } from '../../utils';
import { useCalendarMonthContext } from '../../context/CalendarMonth';

export type CalendarLayoutProps = {
  renderCalendar: ReactNode;
};

function CalendarLayout({
  renderCalendar
}: PropsWithChildren<CalendarLayoutProps>) {
  const { colors } = useTheme();
  const { openYearList } = useCalendarMonthContext();
  const { styles: stylesProp, backgroundColor } = useCalendarContext();

  const Component = openYearList ? View : ScrollView;

  return (
    <View>
      <View style={StyleSheet.flatten([styles.wrapper])}>
        <Animated.View
          style={StyleSheet.flatten([
            styles.wrapper,
            stylesProp?.layout,
            !!backgroundColor && {
              backgroundColor: colors?.[backgroundColor] || backgroundColor
            }
          ])}
        >
          <Component
            bounces={false}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            {renderCalendar}

            <CustomButton />
          </Component>
        </Animated.View>
      </View>
    </View>
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

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative'
  }
});
