import dayjs from 'dayjs';
import React, {
  createContext,
  memo,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';

import { useCalendarContext } from './calendar';
import useModal from '../../../hooks/useModal';
import { FORMAT_COMPARE_DATE } from '../constants';

export interface CalendarMonthContextProps {
  currentMonth: dayjs.Dayjs;
  inInternalYear: dayjs.Dayjs;
  onSetInternalYear: (value: dayjs.Dayjs) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onApplyDate: () => void;
  openYearList: boolean;
  onToggleYearList: (year?: number) => void;
}

const CalendarMonthContext = createContext<CalendarMonthContextProps | null>(
  null
);

const CalendarMonthProvider = ({ children }: PropsWithChildren) => {
  const { selectedDate, onSelectDate, onTrigger } = useCalendarContext();
  const [openYearList, toggleYearList] = useModal();

  const [currentMonth, setCurrentMonth] = useState<dayjs.Dayjs>(selectedDate);
  const [inInternalYear, setInternalYear] = useState<dayjs.Dayjs>(selectedDate);

  const onPrevMonth = useCallback(() => {
    setCurrentMonth((prev) => {
      const newDate = prev.startOf('month').subtract(1, 'month');

      onTrigger?.(newDate.toISOString(), 'month');
      return newDate;
    });
  }, [onTrigger]);

  const onNextMonth = useCallback(() => {
    setCurrentMonth((prev) => {
      const newDate = prev.startOf('month').add(1, 'month');

      onTrigger?.(newDate.toISOString(), 'month');
      return newDate;
    });
  }, [onTrigger]);

  const onToggleYearList = useCallback(
    (year?: number) => {
      if (openYearList) {
        if (year) {
          const newDate = inInternalYear.set('year', year);
          setInternalYear(newDate);
          onSelectDate(newDate, false);
          onTrigger?.(newDate.toISOString(), 'year');
        }
        toggleYearList();
      } else {
        toggleYearList();
      }
    },
    [inInternalYear, onSelectDate, openYearList, toggleYearList, onTrigger]
  );

  const onApplyDate = useCallback(() => {
    if (openYearList) {
      const internalYear = inInternalYear.format(FORMAT_COMPARE_DATE);
      const selectedDateFormat = selectedDate.format(FORMAT_COMPARE_DATE);

      toggleYearList();

      if (internalYear !== selectedDateFormat) {
        onTrigger?.(inInternalYear.toISOString(), 'year');
        onSelectDate(inInternalYear);
      }
    } else {
      onTrigger?.(selectedDate.toISOString(), 'day');
      onSelectDate(selectedDate);
    }
  }, [
    openYearList,
    inInternalYear,
    selectedDate,
    toggleYearList,
    onTrigger,
    onSelectDate
  ]);

  useEffect(() => {
    if (selectedDate) {
      setCurrentMonth(selectedDate);
      setInternalYear(selectedDate);
    }
  }, [selectedDate]);

  return (
    <CalendarMonthContext.Provider
      value={{
        currentMonth,
        onNextMonth,
        onPrevMonth,
        openYearList,
        onToggleYearList,
        inInternalYear,
        onApplyDate,
        onSetInternalYear: setInternalYear
      }}
    >
      {children}
    </CalendarMonthContext.Provider>
  );
};

CalendarMonthProvider.displayName = 'CalendarProvider';

export default memo(CalendarMonthProvider);

export function useCalendarMonthContext() {
  const context = useContext(CalendarMonthContext);
  if (!context) {
    throw new Error(
      'useCalendarMonthContext must be used within a CalendarMonthProvider'
    );
  }
  return context;
}
