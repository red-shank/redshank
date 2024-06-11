import { createContext, memo, useCallback, useContext, useEffect, useState } from 'react';
import { useCalendarContext } from './calendar';
import useModal from '../../../hooks/useModal';
import { FORMAT_COMPARE_DATE } from '../constants';
const CalendarMonthContext = createContext(null);
const CalendarMonthProvider = ({ children }) => {
    const { selectedDate, onSelectDate } = useCalendarContext();
    const [openYearList, toggleYearList] = useModal();
    const [currentMonth, setCurrentMonth] = useState(selectedDate);
    const [inInternalYear, setInternalYear] = useState(selectedDate);
    const onPrevMonth = useCallback(() => {
        setCurrentMonth((prev) => prev.startOf('month').subtract(1, 'month'));
    }, []);
    const onNextMonth = useCallback(() => {
        setCurrentMonth((prev) => prev.startOf('month').add(1, 'month'));
    }, []);
    const onToggleYearList = useCallback(() => {
        if (openYearList && inInternalYear) {
            toggleYearList();
            onSelectDate(selectedDate.set('year', inInternalYear.year()), false);
        }
        else {
            toggleYearList();
        }
    }, [selectedDate, openYearList, inInternalYear]);
    const onApplyDate = useCallback(() => {
        if (openYearList) {
            const internalYear = inInternalYear.format(FORMAT_COMPARE_DATE);
            const selectedDateFormat = selectedDate.format(FORMAT_COMPARE_DATE);
            toggleYearList();
            if (internalYear !== selectedDateFormat) {
                onSelectDate(inInternalYear);
            }
        }
        else {
            onSelectDate(selectedDate);
        }
    }, [selectedDate, inInternalYear, openYearList]);
    useEffect(() => {
        if (!!selectedDate) {
            setCurrentMonth(selectedDate);
            setInternalYear(selectedDate);
        }
    }, [selectedDate]);
    return (<CalendarMonthContext.Provider value={{
            currentMonth,
            onNextMonth,
            onPrevMonth,
            openYearList,
            onToggleYearList,
            inInternalYear,
            onApplyDate,
            onSetInternalYear: setInternalYear
        }}>
      {children}
    </CalendarMonthContext.Provider>);
};
CalendarMonthProvider.displayName = 'CalendarProvider';
export default memo(CalendarMonthProvider);
export function useCalendarMonthContext() {
    const context = useContext(CalendarMonthContext);
    if (!context) {
        throw new Error('useCalendarMonthContext must be used within a CalendarMonthProvider');
    }
    return context;
}
