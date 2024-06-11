import dayjs from 'dayjs';

import { MONTHS_IN_YEAR_INDEX } from './constants';

export type MonthType = {
  date: dayjs.Dayjs;
  label: string;
};

export type YearType = {
  date: dayjs.Dayjs;
  label: string;
  months: MonthType[];
};

const now = dayjs();

export function getListYears(year = now.year()) {
  const newYear = now.set('year', year).startOf('year');

  if (!newYear.isValid()) {
    throw new Error(
      `${year} is no valid number please insert a valid year, e.g. 2021`
    );
  }

  const yearsWithMonth: YearType[] = [];
  const numberOfMonthInYear = now.get('month');

  const THIS_YEAR = {
    date: newYear,
    label: newYear.format('YYYY'),
    months: MONTHS_IN_YEAR_INDEX.map((monthIndex) => {
      const month = newYear.month(monthIndex);
      return {
        date: month,
        label: month.format('MMMM YYYY')
      };
    })
  };

  // if (onlyThisYear) {
  //   yearsWithMonth.push(THIS_YEAR);
  //   return {
  //     now,
  //     yearsWithMonth
  //   };
  // }

  if (numberOfMonthInYear < 6) {
    const monthsBeforeIndex = [...MONTHS_IN_YEAR_INDEX].splice(9, 12);
    const beforeYear = newYear.subtract(1, 'year');

    yearsWithMonth.push(
      {
        date: beforeYear,
        label: beforeYear.format('YYYY'),
        months: monthsBeforeIndex.map((monthIndex) => {
          const month = beforeYear.month(monthIndex);
          return {
            date: month,
            label: month.format('MMMM YYYY')
          };
        })
      },
      {
        date: newYear,
        label: newYear.format('YYYY'),
        months: MONTHS_IN_YEAR_INDEX.map((monthIndex) => {
          const month = newYear.month(monthIndex);
          return {
            date: month,
            label: month.format('MMMM YYYY')
          };
        })
      }
    );
  } else if (numberOfMonthInYear > 9) {
    const monthsAfterIndex = MONTHS_IN_YEAR_INDEX.splice(0, 4);
    const afterYear = newYear.add(1, 'year');

    yearsWithMonth.push(
      {
        date: newYear,
        label: newYear.format('YYYY'),
        months: MONTHS_IN_YEAR_INDEX.map((monthIndex) => {
          const month = newYear.month(monthIndex);
          return {
            date: month,
            label: month.format('MMMM YYYY')
          };
        })
      },
      {
        date: afterYear,
        label: afterYear.format('YYYY'),
        months: monthsAfterIndex.map((monthIndex) => {
          const month = afterYear.month(monthIndex);
          return {
            date: month,
            label: month.format('MMMM YYYY')
          };
        })
      }
    );
  } else {
    yearsWithMonth.push(THIS_YEAR);
  }

  return {
    now,
    yearsWithMonth
  };
}

export const getWeeksInMonth = (
  startMonth: dayjs.Dayjs,
  endMonth: dayjs.Dayjs
) => {
  const daysInMonth = endMonth.date();
  const firstWeekDay = startMonth.day(); // 0-indexed (0 para domingo, 1 para lunes, ..., 6 para sábado)

  // Calcula cuántas filas (semanas) se necesitarán para mostrar todos los días
  return Math.ceil((daysInMonth + firstWeekDay) / 7);
};

export const getWeekOfMonthFromDay = (day: dayjs.Dayjs, recoil = 2) => {
  const firstDayOfMonth = day.startOf('month');
  const firstWeekday = firstDayOfMonth.day(); // 0-indexed (0 para domingo, 1 para lunes, ..., 6 para sábado)

  // Calcula el número de días desde el inicio del mes hasta el día dado
  const daysFromStartOfMonth = day.diff(firstDayOfMonth, 'day');

  // Calcula la semana del mes
  const week = Math.floor((daysFromStartOfMonth + firstWeekday) / 7) + 1;

  return `${day.format('YYYY-MM')}-week-${week - recoil}`;
};
