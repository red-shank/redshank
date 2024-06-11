import dayjs from 'dayjs';
import { memo, useEffect } from 'react';
import { useCalendarMonthContext } from '../../context/CalendarMonth';
import { Ripple } from '../../../Ripple';
import { Text } from '../../../Text';
import { Box } from '../../../Box';
import { ScrollView, Target, useScrollTo } from '../../scrollTo';
import createSxStyle from '../../../../lib/sx';
import useTheme from '../../../../context/theme/useTheme';
// set from 1 to 50 years after current year
const YEAR_LIST = Array.from(new Array(dayjs().year() + 50), (_, i) => i + 1900);
const ITEM_HEIGHT = 70;
function YearPicker({}) {
    const theme = useTheme();
    const { inInternalYear, onSetInternalYear } = useCalendarMonthContext();
    return (<Box height={281} position="relative" px={2} pt={2}>
      <ScrollView contentContainerStyle={createSxStyle({
            gap: 2,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center'
        }, theme)}>
        {YEAR_LIST.map((item) => {
            const isSelected = item === inInternalYear.year();
            return (<Target name={item} style={{ width: '20%' }}>
              <Ripple px={2} py={3} key={item} width="100%" flexShrink={0} alignItems="center" justifyContent="center" onPress={() => {
                    onSetInternalYear(inInternalYear.set('year', item));
                }}>
                <Text bold={isSelected} color={isSelected ? 'primary' : 'text'}>
                  {item}
                </Text>
              </Ripple>
            </Target>);
        })}

        <ScrollToEffect />
      </ScrollView>
    </Box>);
}
function ScrollToEffect({ trigger }) {
    const { inInternalYear } = useCalendarMonthContext();
    const { scrollTo } = useScrollTo();
    const year = inInternalYear.year();
    useEffect(() => {
        setTimeout(() => {
            scrollTo(year, { offset: -10 }).then();
        }, 50);
    }, [scrollTo, year, trigger]);
    return null;
}
export default memo(YearPicker);
