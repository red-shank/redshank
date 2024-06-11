import React, { PropsWithChildren } from 'react';

import CalendarProvider from './context/calendar';
import { CalendarProps } from './type';
import PanelMonth from './components/PanelMonth';
import CalendarLayout from './components/Layout';
import CalendarMonthProvider from './context/CalendarMonth';

export function Calendar({
  children,
  ...props
}: PropsWithChildren<CalendarProps>) {
  return (
    <CalendarProvider {...props}>
      <CalendarMonthProvider>
        <CalendarLayout renderCalendar={<PanelMonth />} />
      </CalendarMonthProvider>
    </CalendarProvider>
  );
}

export * from './locales';

export * from './type';
