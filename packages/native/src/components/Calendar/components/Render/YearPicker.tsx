import dayjs from 'dayjs';
import { memo } from 'react';
import { View } from 'react-native';
import { ScrollPicker } from '../../../ScrollPicker';
import { useCalendarMonthContext } from '../../context/CalendarMonth';

export interface YearProps {}

// set from 1 to 50 years after current year
const YEAR_LIST = Array.from(new Array(dayjs().year() + 50), (_, i) => i + 1);

const ITEM_HEIGHT = 70;

function YearPicker({}: YearProps) {
  const { inInternalYear, onSetInternalYear } = useCalendarMonthContext();

  return (
    <View
      style={{
        height: 200,
        position: 'relative'
      }}
    >
      <ScrollPicker
        items={YEAR_LIST}
        itemHeight={ITEM_HEIGHT}
        selected={inInternalYear.year()}
        onChange={(year: number) => {
          if (!!year) {
            onSetInternalYear(inInternalYear.set('year', year));
          }
        }}
      />
    </View>
  );
}

export default memo(YearPicker);
