import React, { memo, useMemo } from 'react';

import Month from './Render/Month';
import { useCalendarMonthContext } from '../context/CalendarMonth';
import { Button } from '../../Button';
import { useCalendarContext } from '../context/calendar';
import { Box } from '../../Box';

export type MonthProps = {};

function PanelMonth({}: MonthProps) {
  const { onCancel, onChange, okText, cancelText } = useCalendarContext();
  const { currentMonth, onApplyDate, onToggleYearList, openYearList } =
    useCalendarMonthContext();

  const label = useMemo(() => {
    return currentMonth.format('MMMM YYYY');
  }, [currentMonth]);

  return (
    <>
      <Month key={label} withoutMarginBottom />

      <Box
        px={2}
        mt={1}
        mb={2}
        gap={1}
        flexDirection="row"
        justifyContent="flex-end"
      >
        {onCancel && (
          <Button
            type="link"
            appearance="text"
            onPress={onCancel}
            sx={{
              height: 35,
              paddingHorizontal: 10,
              opacity: openYearList ? 0 : 1
            }}
          >
            {cancelText ?? 'Cancel'}
          </Button>
        )}
        {onChange && (
          <Button
            type="link"
            sx={{
              height: 35,
              paddingHorizontal: 10,
              opacity: openYearList ? 0 : 1
            }}
            onPress={() => (openYearList ? onToggleYearList() : onApplyDate())}
          >
            {okText ?? 'Ok'}
          </Button>
        )}
      </Box>
    </>
  );
}

export default memo(PanelMonth);
