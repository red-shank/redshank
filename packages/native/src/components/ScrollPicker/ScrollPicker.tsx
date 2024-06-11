import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import {
  Animated,
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View
} from 'react-native';
import { Text } from '../Text';
import useTheme from '../../context/theme/useTheme';

export interface ScrollPickerProps {
  items: (string | number)[];
  onIndexChange?: (index: number) => void;
  onChange?: (value?: number | string) => void;
  itemHeight?: number;
  selected?: string | number;
  renderItemText?: (item: string | number) => string | number;
}

export const ScrollPicker: React.FC<ScrollPickerProps> = memo(
  ({
    items,
    onIndexChange,
    selected,
    onChange,
    renderItemText,
    itemHeight = 50
  }) => {
    const selectedIndex = useMemo(() => items.indexOf(selected), [items]);

    const { colors } = useTheme();
    const flatListRef = useRef<Animated.FlatList>(null);
    const [centerIndex, setCenterIndex] = useState<number | null>(null);

    const scrollY = useRef(new Animated.Value(0)).current;

    const renderItem = useCallback(
      ({ item, index }: ListRenderItemInfo<string>) => {
        const inputRange = [
          (index - 2) * itemHeight,
          (index - 1) * itemHeight,
          index * itemHeight
        ];
        const scale = scrollY.interpolate({
          inputRange,
          outputRange: [0.8, 1, 0.8]
        });

        return (
          <Animated.View
            style={[
              { height: itemHeight, transform: [{ scale }] },
              styles.animatedContainer
            ]}
          >
            <Text
              style={styles.pickerItem}
              color={centerIndex + 1 === index ? 'text' : 'gray700'}
            >
              {renderItemText ? renderItemText(item) : item}
            </Text>
          </Animated.View>
        );
      },
      [centerIndex, scrollY, renderItemText]
    );

    const modifiedItems = useMemo(() => ['', ...items, ''], [items]);

    const momentumScrollEnd = useCallback(
      (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const y = event.nativeEvent.contentOffset.y;
        const index = Math.round(y / itemHeight);
        setCenterIndex(index);
        onIndexChange && onIndexChange(index);
        onChange && onChange(items[index]);
      },
      [itemHeight, onIndexChange, onChange]
    );

    useEffect(() => {
      if (centerIndex !== null && flatListRef.current) {
        if (centerIndex !== -1) {
          setTimeout(() => {
            flatListRef.current.scrollToIndex({
              animated: true,
              index: centerIndex
            });
          }, 50);
        }
      }
    }, [centerIndex, items, flatListRef]);

    useEffect(() => {
      setCenterIndex((prev) => {
        if (prev === selectedIndex) return prev;
        return selectedIndex;
      });
    }, [selectedIndex]);

    return (
      <View style={{ height: itemHeight * 3 }}>
        <Animated.FlatList
          ref={flatListRef}
          data={modifiedItems}
          renderItem={renderItem}
          style={{ zIndex: 2 }}
          showsVerticalScrollIndicator={false}
          snapToInterval={itemHeight}
          onMomentumScrollEnd={momentumScrollEnd}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          getItemLayout={(_, index) => ({
            length: itemHeight,
            offset: itemHeight * index,
            index
          })}
        />
        <View
          style={[
            styles.indicatorHolder,
            {
              top: itemHeight
            }
          ]}
        >
          <View
            style={[styles.indicator, { backgroundColor: colors.border }]}
          />
          <View
            style={[
              styles.indicator,
              { marginTop: itemHeight, backgroundColor: colors.border }
            ]}
          />
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  pickerItem: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  indicatorHolder: {
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: '100%',
    zIndex: 1
  },
  indicator: {
    width: 120,
    height: 1
  },
  animatedContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
