import dayjs from 'dayjs';
export declare type MonthType = {
    date: dayjs.Dayjs;
    label: string;
};
export declare type YearType = {
    date: dayjs.Dayjs;
    label: string;
    months: MonthType[];
};
export declare function getListYears(year?: number): {
    now: dayjs.Dayjs;
    yearsWithMonth: YearType[];
};
export declare const getWeeksInMonth: (startMonth: dayjs.Dayjs, endMonth: dayjs.Dayjs) => number;
export declare const getWeekOfMonthFromDay: (day: dayjs.Dayjs, recoil?: number) => string;
