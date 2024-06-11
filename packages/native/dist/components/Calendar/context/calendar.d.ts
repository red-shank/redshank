import dayjs from 'dayjs';
import { PropsWithChildren } from 'react';
import { CommonCalendarProps } from '../type';
export interface CalendarContextProps extends Pick<CommonCalendarProps, 'styles' | 'backgroundColor' | 'onClose'> {
    now: dayjs.Dayjs;
    selectedDate: dayjs.Dayjs;
    onSelectDate: (date: dayjs.Dayjs, changeDate?: boolean) => void;
    locale: string;
}
declare const _default: import("react").MemoExoticComponent<{
    ({ children, onSelectedDate, selected, locale, ...rest }: PropsWithChildren<CommonCalendarProps>): import("react").JSX.Element;
    displayName: string;
}>;
export default _default;
export declare function useCalendarContext(): CalendarContextProps;
