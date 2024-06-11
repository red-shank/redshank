import dayjs from 'dayjs';
import { createContext, memo, useCallback, useContext, useState } from 'react';
const now = dayjs();
const CalendarContext = createContext(null);
const CalendarProvider = ({ children, onSelectedDate, selected, locale = 'en', ...rest }) => {
    const [selectedDate, setSelectedDate] = useState(() => {
        if (selected) {
            const selectedValidDate = dayjs(selected);
            if (!selectedValidDate.isValid()) {
                throw new Error('Selected must be a valid date string or date same month and year');
            }
            return dayjs(selected);
        }
        return now;
    });
    const onSelectDate = useCallback((date, changeDate = true) => {
        setSelectedDate(date);
        !!changeDate && onSelectedDate?.(date.toISOString());
    }, [onSelectedDate]);
    return (<CalendarContext.Provider value={{
            now,
            selectedDate,
            onSelectDate,
            locale,
            ...rest
        }}>
      {children}
    </CalendarContext.Provider>);
};
CalendarProvider.displayName = 'CalendarProvider';
export default memo(CalendarProvider);
export function useCalendarContext() {
    const context = useContext(CalendarContext);
    if (!context) {
        throw new Error('useCalendarContext must be used within a CalendarProvider');
    }
    return context;
}
