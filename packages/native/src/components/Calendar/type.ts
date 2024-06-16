import { StyleProp, ViewStyle } from 'react-native';
import { ColorType } from '../../context/theme/types';

import { MonthProps } from './components/PanelMonth';

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
  selected?: string;
  defaultSelected?: string;
  locale?: string;
  min?: string;
  max?: string;
  disabled?: boolean;
  backgroundColor?: ColorType;
  onCancel?: () => void;
  cancelText?: string;
  okText?: string;
  onChange?: (date: string) => void;
  styles?: {
    layout?: StyleProp<ViewStyle>;
    container?: StyleProp<ViewStyle>;
    daysNameWeekWrapper?: StyleProp<ViewStyle>;
    daysNameWeekItem?: StyleProp<ViewStyle>;
    daysOfWeekWrapper?: StyleProp<ViewStyle>;
    daysOfWeekItem?: StyleProp<ViewStyle>;
    daySelected?: StyleProp<ViewStyle>;
    dayNow?: StyleProp<ViewStyle>;
  };
}

export type CalendarMonthProps = CommonCalendarProps & MonthProps;

export type CalendarProps = CalendarMonthProps;
