import { StyleProp, ViewStyle } from 'react-native';
import { ColorName } from '../../context/theme/types';

import { MonthProps } from './components/PanelMonth';
import { SxProps } from '../../lib/styleDictionary';

export interface LocaleKeys {
  week: {
    sun: string;
    mon: string;
    tue: string;
    wed: string;
    thu: string;
    fri: string;
    sat: string;
  };
  month: {
    jan: string;
    feb: string;
    mar: string;
    apr: string;
    may: string;
    jun: string;
    jul: string;
    aug: string;
    sep: string;
    oct: string;
    nov: string;
    dec: string;
  };
}

export interface CommonCalendarProps {
  backgroundColor?: ColorName;
  cancelText?: string;
  defaultSelected?: string;
  disabled?: boolean;
  locale?: string;
  max?: string;
  min?: string;
  okText?: string;
  onCancel?: () => void;
  onChange?: (date: string) => void;
  onSelected?: (date: string) => void;
  selected?: string;
  sx?: {
    container?: SxProps;
    daysNameWeekItem?: SxProps;
    daysNameWeekWrapper?: SxProps;
    daysOfWeekWrapper?: SxProps;
    daysOfWeekItem?: SxProps;
    daySelected?: SxProps;
    dayNow?: SxProps;
    layout?: SxProps;
  };
  styles?: {
    container?: StyleProp<ViewStyle>;
    daysNameWeekItem?: StyleProp<ViewStyle>;
    daysNameWeekWrapper?: StyleProp<ViewStyle>;
    daysOfWeekWrapper?: StyleProp<ViewStyle>;
    daysOfWeekItem?: StyleProp<ViewStyle>;
    daySelected?: StyleProp<ViewStyle>;
    dayNow?: StyleProp<ViewStyle>;
    layout?: StyleProp<ViewStyle>;
  };
}

export type CalendarMonthProps = CommonCalendarProps & MonthProps;

export type CalendarProps = CalendarMonthProps;
