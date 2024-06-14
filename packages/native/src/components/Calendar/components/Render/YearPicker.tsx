import dayjs from 'dayjs';
import React, { memo } from 'react';
import { FlatList } from 'react-native';
import { useCalendarMonthContext } from '../../context/CalendarMonth';
import { Ripple } from '../../../Ripple';
import { Text } from '../../../Text';
import { Box } from '../../../Box';

export interface YearProps {}

const now = dayjs();
const OFFSET_YEAR = 12;

function YearPicker({}: YearProps) {
  const { inInternalYear, onToggleYearList } = useCalendarMonthContext();
  const [yearList, setYearList] = React.useState<number[]>(() => {
    const year = inInternalYear?.get('year') || now.get('year');
    const _startYear = year - 20;
    const _endYear = year + 20;
    const offset = _endYear - _startYear;

    return Array.from(new Array(offset), (_, i) => i + _startYear);
  });

  const initialScroll = React.useMemo(() => {
    const first = yearList[0];
    const last = yearList[yearList.length - 1];

    return (last - first) / 4; // 4 is the number of columns
  }, [yearList]);

  const handleScroll = React.useCallback((event) => {
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    const distanceFromTop = contentOffset.y;
    const distanceFromBottom =
      contentSize.height - (contentOffset.y + layoutMeasurement.height);

    const threshold = 100; // Ajusta este valor según la proximidad deseada

    if (distanceFromTop < threshold) {
      setYearList((prev) => {
        const first = prev[0];
        if (first <= 1900) return prev;

        const before = Array.from(new Array(OFFSET_YEAR), (_, i) => {
          const newYear = first - 1 - i;
          if (newYear < 1900) return null;
          return newYear;
        })
          .filter(Boolean)
          .reverse();
        return [...before, ...prev];
      });
    }

    if (distanceFromBottom < threshold) {
      setYearList((prev) => {
        const last = prev[prev.length - 1];
        const next = Array.from(new Array(OFFSET_YEAR), (_, i) => i + 1 + last);
        return [...prev, ...next];
      });
    }
  }, []);

  return (
    <Box height={258.5} position="relative" px={2} pt={0}>
      <FlatList
        numColumns={4}
        data={yearList}
        initialNumToRender={20}
        initialScrollIndex={initialScroll}
        keyExtractor={(item) => item.toString()}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: 'space-around'
        }}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        getItemLayout={(data, index) => ({
          length: 100,
          offset: (175 * index) / 4,
          index
        })}
        renderItem={({ item }) => {
          const isSelected = item === inInternalYear.year();
          return (
            <Ripple
              px={2}
              py={3}
              key={item}
              alignItems="center"
              justifyContent="center"
              onPress={() => {
                onToggleYearList(item);
              }}
            >
              <Text bold={isSelected} color={isSelected ? 'primary' : 'text'}>
                {item}
              </Text>
            </Ripple>
          );
        }}
      />
    </Box>
  );
}

export default memo(YearPicker);
