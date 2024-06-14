import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from '../../../Title';
import useTheme from '../../../../context/theme/useTheme';
import { useCalendarContext } from '../../context/calendar';
import { Button, ButtonType } from '../../../Button';
import { Icon } from '../../../Icon';
import { useCalendarMonthContext } from '../../context/CalendarMonth';

interface MonthLabelProps {}

const buttonProps = {
  type: 'link' as ButtonType,
  px: 1
};

export default function MonthLabel({}: MonthLabelProps) {
  const { marginSizes } = useTheme();
  const { locale } = useCalendarContext();
  const {
    onPrevMonth,
    onNextMonth,
    currentMonth,
    openYearList,
    onToggleYearList
  } = useCalendarMonthContext();

  return (
    <View
      style={StyleSheet.flatten([
        style.wrapper,
        {
          marginBottom: marginSizes.sm
        }
      ])}
    >
      <View style={style.title}>
        <Title level={5} align="left">
          {`${currentMonth.locale(locale).format('MMM')} ${currentMonth.format('YYYY')}`}
        </Title>

        <Button
          {...buttonProps}
          onPress={() => onToggleYearList()}
          icon={
            <Icon name="right" color="primary" type="antdesign" size={18} />
          }
        />
      </View>

      {!openYearList && (
        <View style={style.actions}>
          <Button
            {...buttonProps}
            onPress={onPrevMonth}
            icon={
              <Icon name="left" color="primary" type="antdesign" size={18} />
            }
          />
          <Button
            {...buttonProps}
            onPress={onNextMonth}
            icon={
              <Icon name="right" color="primary" type="antdesign" size={18} />
            }
          />
        </View>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  wrapper: {
    gap: 12,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18
  },
  title: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center'
  },
  actions: {
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
});
