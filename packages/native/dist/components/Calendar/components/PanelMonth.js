import React, { memo, useMemo } from 'react';
import { View } from 'react-native';
import Month from './Render/Month';
import { useCalendarMonthContext } from '../context/CalendarMonth';
import { Button } from '../../Button';
import { useCalendarContext } from '../context/calendar';
function PanelMonth({}) {
    const { onClose } = useCalendarContext();
    const { currentMonth, onApplyDate, onToggleYearList, openYearList } = useCalendarMonthContext();
    const label = useMemo(() => {
        return currentMonth.format('MMMM YYYY');
    }, [currentMonth]);
    return (<>
      <Month key={label} withoutMarginBottom/>

      <View style={{
            gap: 10,
            flexDirection: 'row',
            paddingHorizontal: 15,
            marginTop: 10,
            marginBottom: 20,
            justifyContent: 'flex-end'
        }}>
        <Button type="link" color="text" onPress={onClose} style={{ height: 35, paddingHorizontal: 10 }}>
          Cancel
        </Button>
        <Button type="link" style={{ height: 35, paddingHorizontal: 10 }} onPress={openYearList ? onToggleYearList : onApplyDate}>
          Ok
        </Button>
      </View>
    </>);
}
export default memo(PanelMonth);
