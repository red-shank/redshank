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
    | 'sx'
    | 'styles'
    | 'backgroundColor'
    | 'onCancel'
    | 'onChange'
    | 'cancelText'
    | 'okText'
    | 'disabled'
    | 'locale'
    | 'min'
    | 'max'
  > {
  now: dayjs.Dayjs;
  selectedDate: dayjs.Dayjs;
  onSelectDate: (date: dayjs.Dayjs, changeDate?: boolean) => void;
}

const now = dayjs();

const CalendarContext = createContext<CalendarContextProps | null>(null);

const CalendarProvider = ({
  children,
  onChange,
  selected,
  onSelected,
  defaultSelected,
  locale = 'en',
  ...rest
}: PropsWithChildren<CalendarProps>) => {
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs>(() => {
    if (selected || defaultSelected) {
      const selectedValidDate = dayjs(defaultSelected || selected);
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
      const formatDate = date.format('YYYY-MM-DD');
      setSelectedDate(date);
      onSelected?.(formatDate);
      !!changeDate && onChange?.(formatDate);
    },
    [onChange, onSelected]
  );

  return (
    <CalendarContext.Provider
      key={locale}
      value={{
        now,
        selectedDate,
        onSelectDate,
        locale,
        onChange,
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
