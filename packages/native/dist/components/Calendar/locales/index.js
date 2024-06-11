import en from './en';
import es from './es';
export const locales = {
    en: en,
    es: es
};
export const setCalendarLocale = (locale, data) => {
    locales[locale] = data;
};
