import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import React, { memo, ReactNode, useMemo } from 'react';
import duration from 'dayjs/plugin/duration';
import { StyleSheet, View } from 'react-native';

import WeekDaysLabel from './WeekDaysLabel';
import MonthLabel from './MonthLabel';
import WeekDaysNumber, { WeekDaysProps } from './WeekDaysNumber';
import { FORMAT_COMPARE_DATE, FORMAT_COMPARE_MONTH } from '../../constants';
import { getWeeksInMonth } from '../../utils';
import YearPicker from './YearPicker';
import { useCalendarMonthContext } from '../../context/CalendarMonth';
import { useCalendarContext } from '../../context/calendar';

dayjs.extend(duration);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

export interface MonthProps {
  withoutMarginBottom?: boolean;
}

const getWeeksIndex = (size: number) => Array.from(new Array(size).keys());

const daysOfWeekIndex = Array.from(new Array(7).keys());

function Month({ withoutMarginBottom }: MonthProps) {
  const { min, max, calendarProps } = useCalendarContext();
  const { currentMonth, openYearList } = useCalendarMonthContext();

  const hiddenCalendar = calendarProps?.hidden;

  const render = useMemo(() => {
    if (hiddenCalendar) return null;
    const startMonth = dayjs(currentMonth).startOf('month');
    const endMonth = dayjs(currentMonth).endOf('month');
    const firstDayOfMonth = startMonth.day();
    const lastDayOfMonth = endMonth.day();
    const totalWeeks = getWeeksInMonth(startMonth, endMonth);
    const weeksIndex = getWeeksIndex(6);

    const weeks: ReactNode[] = [];

    for (const week of weeksIndex) {
      const days: WeekDaysProps['days'] = [] as never;

      daysOfWeekIndex.forEach((day) => {
        const offset = week * 7 + day - firstDayOfMonth;
        const date = startMonth.add(offset, 'days');

        const isBeforeMonth = week === 0 && day < firstDayOfMonth;
        const isAfterMonth =
          (week === totalWeeks - 1 && day > lastDayOfMonth) ||
          date.format(FORMAT_COMPARE_MONTH) !==
            startMonth.format(FORMAT_COMPARE_MONTH);

        const isValidDate = !(isAfterMonth || isBeforeMonth);
        const isMin = min && date.isSameOrBefore(min, 'day');
        const isMax = max && date.isSameOrAfter(max, 'day');

        days.push({
          date: date,
          id: isValidDate
            ? date.format(FORMAT_COMPARE_DATE)
            : `${startMonth.format('MMMM')}-${week}-${day}`,
          isBeforeMonth,
          isAfterMonth,
          isMin,
          isMax
        });
      });

      weeks.push(
        <WeekDaysNumber
          key={`week-${week}`}
          id={`${startMonth.format('YYYY-MM')}-week-${week}`}
          days={days}
        />
      );
    }

    return weeks;
  }, [currentMonth, min, max, hiddenCalendar]);

  return (
    <View style={StyleSheet.flatten([!withoutMarginBottom && styles.panel])}>
      <MonthLabel />

      {!openYearList && !hiddenCalendar && <WeekDaysLabel />}
      {openYearList ? <YearPicker /> : render}
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    marginBottom: 50
  }
});

export default memo(Month);
