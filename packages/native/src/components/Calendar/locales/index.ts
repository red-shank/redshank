import en from './en';
import es from './es';
import { LocaleKeys } from '../type';

export const locales = {
  en: en,
  es: es
};

export const setCalendarLocale = (locale: string, data: LocaleKeys) => {
  locales[locale] = data;
};
