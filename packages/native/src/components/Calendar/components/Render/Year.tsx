import dayjs from 'dayjs';
import { memo } from 'react';
import duration from 'dayjs/plugin/duration';

// import Month from './Month';
import { YearType } from '../../utils';

dayjs.extend(duration);

interface YearProps {
  year: YearType;
}

function Year({ year }: YearProps) {
  return (
    <>
      {/*{year.months.map(month => {*/}
      {/*  return <Month key={month.label} month={month.date} />;*/}
      {/*})}*/}
    </>
  );
}

export default memo(Year);
