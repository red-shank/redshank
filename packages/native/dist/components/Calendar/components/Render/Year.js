import dayjs from 'dayjs';
import { memo } from 'react';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);
function Year({ year }) {
    return (<>
      {/*{year.months.map(month => {*/}
      {/*  return <Month key={month.label} month={month.date} />;*/}
      {/*})}*/}
    </>);
}
export default memo(Year);
