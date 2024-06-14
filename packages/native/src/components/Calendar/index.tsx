import React from 'react';

import { CalendarProps } from './type';
import CalendarProvider from './context/calendar';
import PanelMonth from './components/PanelMonth';
import CalendarLayout from './components/Layout';
import CalendarMonthProvider from './context/CalendarMonth';

export function Calendar(props: CalendarProps) {
  return (
    <CalendarProvider {...props}>
      <CalendarMonthProvider>
        <CalendarLayout>
          <PanelMonth />
        </CalendarLayout>
      </CalendarMonthProvider>
    </CalendarProvider>
  );
}

export * from './locales';

export * from './type';
