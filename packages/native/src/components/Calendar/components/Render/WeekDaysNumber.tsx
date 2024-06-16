import dayjs from 'dayjs';
import { StyleSheet, View } from 'react-native';
import React, { memo, ReactNode, useMemo } from 'react';

import Cell from './Cell';
import { useCalendarContext } from '../../context/calendar';
import { FORMAT_COMPARE_DATE } from '../../constants';
import { Target } from '../../scrollTo';

export type DayProps = {
  date: dayjs.Dayjs | null;
  id: string;
  selected?: boolean;
  isMin?: boolean;
  isMax?: boolean;
  isBeforeMonth?: boolean;
  isAfterMonth?: boolean;
};

export interface WeekDaysProps {
  id: string;
  days: [DayProps, DayProps, DayProps, DayProps, DayProps, DayProps, DayProps];
}

function WeekDaysNumber({ days, id }: WeekDaysProps) {
  const { now, selectedDate, onSelectDate, styles, disabled } =
    useCalendarContext();

  const checkSelected = useMemo(() => {
    return days.find(
      (day) => day.id === selectedDate?.format(FORMAT_COMPARE_DATE)
    );
  }, [days, selectedDate]);

  const render = useMemo(() => {
    const weeks: ReactNode[] = [];

    days.forEach((day, index) => {
      const { date, isAfterMonth, isBeforeMonth, isMin, isMax } = day;
      if (!date) weeks.push(<Cell key={index} content="" disabledRipple />);
      else {
        const formatDate = date.format(FORMAT_COMPARE_DATE);
        weeks.push(
          <Cell
            key={formatDate}
            selected={checkSelected?.date?.isSame?.(formatDate)}
            style={StyleSheet.flatten([styles?.daysOfWeekItem])}
            content={date.format('D')}
            onPress={() => onSelectDate(date, false)}
            isNow={date.isSame(now.format('YYYY-MM-DD'))}
            textColor={isAfterMonth || isBeforeMonth ? 'accents6' : 'text'}
            disabledRipple={
              disabled || isMin || isMax || isAfterMonth || isBeforeMonth
            }
          />
        );
      }
    });

    return weeks;
  }, [
    days,
    checkSelected?.date,
    styles?.daysOfWeekItem,
    now,
    disabled,
    onSelectDate
  ]);

  return (
    <Target name={id}>
      <View
        style={StyleSheet.flatten([style.wrapper, styles?.daysOfWeekWrapper])}
      >
        {render}
      </View>
    </Target>
  );
}

const style = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default memo(WeekDaysNumber);
