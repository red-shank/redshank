/// <reference types="react" />
import dayjs from 'dayjs';
export interface CalendarMonthContextProps {
    currentMonth: dayjs.Dayjs;
    inInternalYear: dayjs.Dayjs;
    onSetInternalYear: (value: dayjs.Dayjs) => void;
    onPrevMonth: () => void;
    onNextMonth: () => void;
    onApplyDate: () => void;
    openYearList: boolean;
    onToggleYearList: () => void;
}
declare const _default: import("react").MemoExoticComponent<{
    ({ children }: {
        children?: import("react").ReactNode;
    }): import("react").JSX.Element;
    displayName: string;
}>;
export default _default;
export declare function useCalendarMonthContext(): CalendarMonthContextProps;
