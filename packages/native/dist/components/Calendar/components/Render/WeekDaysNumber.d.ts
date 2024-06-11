/// <reference types="react" />
import dayjs from 'dayjs';
export declare type DayProps = {
    date: dayjs.Dayjs | null;
    id: string;
    selected?: boolean;
    isBeforeMonth?: boolean;
    isAfterMonth?: boolean;
};
export interface WeekDaysProps {
    id: string;
    days: [DayProps, DayProps, DayProps, DayProps, DayProps, DayProps, DayProps];
}
declare function WeekDaysNumber({ days, id }: WeekDaysProps): import("react").JSX.Element;
declare const _default: import("react").MemoExoticComponent<typeof WeekDaysNumber>;
export default _default;
