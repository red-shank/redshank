import { StyleSheet, View } from 'react-native';
import { useCalendarContext } from '../../context/calendar';

import Cell from './Cell';
import { locales } from '../../locales';

interface WeekLabelProps {}

export default function WeekDaysLabel({}: WeekLabelProps) {
  const { styles, locale } = useCalendarContext();

  return (
    <View
      style={StyleSheet.flatten([style.wrapper, styles?.daysNameWeekWrapper])}
    >
      <Cell
        isLabel
        content={locales[locale].week.sun}
        textColor="accents5"
        fontSize="base"
        disabledRipple
        style={StyleSheet.flatten([styles?.daysNameWeekItem])}
      />
      <Cell
        isLabel
        content={locales[locale].week.mon}
        textColor="accents5"
        fontSize="base"
        disabledRipple
        style={StyleSheet.flatten([styles?.daysNameWeekItem])}
      />
      <Cell
        isLabel
        content={locales[locale].week.tue}
        textColor="accents5"
        fontSize="base"
        disabledRipple
        style={StyleSheet.flatten([styles?.daysNameWeekItem])}
      />
      <Cell
        isLabel
        content={locales[locale].week.wed}
        textColor="accents5"
        fontSize="base"
        disabledRipple
        style={StyleSheet.flatten([styles?.daysNameWeekItem])}
      />
      <Cell
        isLabel
        content={locales[locale].week.thu}
        textColor="accents5"
        fontSize="base"
        disabledRipple
        style={StyleSheet.flatten([styles?.daysNameWeekItem])}
      />
      <Cell
        isLabel
        content={locales[locale].week.fri}
        textColor="accents5"
        fontSize="base"
        disabledRipple
        style={StyleSheet.flatten([styles?.daysNameWeekItem])}
      />
      <Cell
        isLabel
        content={locales[locale].week.sat}
        textColor="accents5"
        fontSize="base"
        disabledRipple
        style={StyleSheet.flatten([styles?.daysNameWeekItem])}
      />
    </View>
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
