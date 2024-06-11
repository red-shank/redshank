import React from 'react';
import CalendarProvider from './context/calendar';
import PanelMonth from './components/PanelMonth';
import CalendarLayout from './components/Layout';
import CalendarMonthProvider from './context/CalendarMonth';
export function Calendar({ children, ...props }) {
    return (<CalendarProvider {...props}>
      <CalendarMonthProvider>
        <CalendarLayout renderCalendar={<PanelMonth />}/>
      </CalendarMonthProvider>
    </CalendarProvider>);
}
export * from './locales';
export * from './type';
