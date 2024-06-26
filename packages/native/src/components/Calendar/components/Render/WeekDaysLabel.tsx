import React from 'react';
import { StyleSheet } from 'react-native';
import { useCalendarContext } from '../../context/calendar';

import Cell from './Cell';
import { Box } from '../../../Box';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';

dayjs.extend(localeData);

interface WeekLabelProps {}

export default function WeekDaysLabel({}: WeekLabelProps) {
  const { styles, sx, locale } = useCalendarContext();

  const weekdays = dayjs().locale(locale).localeData().weekdaysShort();

  return (
    <Box
      sx={sx?.daysNameWeekWrapper}
      style={StyleSheet.flatten([style.wrapper, styles?.daysNameWeekWrapper])}
    >
      {weekdays.map((day) => (
        <Cell
          isLabel
          key={day}
          content={day}
          disabledRipple
          sx={sx?.daysNameWeekItem}
          style={StyleSheet.flatten([styles?.daysNameWeekItem])}
        />
      ))}
    </Box>
  );
}

const style = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
