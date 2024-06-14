import dayjs from 'dayjs';
import React, {
  createContext,
  memo,
  PropsWithChildren,
  useCallback,
  useContext,
  useState
} from 'react';

import { CalendarProps, CommonCalendarProps } from '../type';

export interface CalendarContextProps
  extends Pick<
    CommonCalendarProps,
    | 'styles'
    | 'backgroundColor'
    | 'onCancel'
    | 'onSelectedDate'
    | 'cancelText'
    | 'okText'
    | 'locale'
  > {
  now: dayjs.Dayjs;
  selectedDate: dayjs.Dayjs;
  onSelectDate: (date: dayjs.Dayjs, changeDate?: boolean) => void;
}

const now = dayjs();

const CalendarContext = createContext<CalendarContextProps | null>(null);

const CalendarProvider = ({
  children,
  onSelectedDate,
  selected,
  locale = 'en',
  ...rest
}: PropsWithChildren<CalendarProps>) => {
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs>(() => {
    if (selected) {
      const selectedValidDate = dayjs(selected);
      if (!selectedValidDate.isValid()) {
        throw new Error(
          'Selected must be a valid date string or date same month and year'
        );
      }
      return selectedValidDate;
    }
    return now;
  });

  const onSelectDate = useCallback(
    (date: dayjs.Dayjs, changeDate = true) => {
      setSelectedDate(date);
      !!changeDate && onSelectedDate?.(date.toISOString());
    },
    [onSelectedDate]
  );

  return (
    <CalendarContext.Provider
      key={locale}
      value={{
        now,
        selectedDate,
        onSelectDate,
        locale,
        ...rest
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

CalendarProvider.displayName = 'CalendarProvider';

export default memo(CalendarProvider);

export function useCalendarContext() {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error(
      'useCalendarContext must be used within a CalendarProvider'
    );
  }
  return context;
}
