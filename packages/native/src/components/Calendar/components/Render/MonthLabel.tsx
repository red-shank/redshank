import React from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
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
  const rotateAnimation = React.useRef(new Animated.Value(0)).current;
  const fadeAnimation = React.useRef(new Animated.Value(0)).current;
  const { marginSizes } = useTheme();
  const { locale } = useCalendarContext();
  const {
    onPrevMonth,
    onNextMonth,
    currentMonth,
    openYearList,
    onToggleYearList
  } = useCalendarMonthContext();

  const spin = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg']
  });

  const fadeIn = fadeAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  });

  React.useEffect(() => {
    Animated.timing(rotateAnimation, {
      toValue: openYearList ? 1 : 0,
      duration: 150,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true // To make use of native driver for performance
    }).start();
  }, [openYearList, rotateAnimation]);

  React.useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 150,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true // To make use of native driver for performance
    }).start();
  }, [fadeAnimation]);

  return (
    <View
      style={StyleSheet.flatten([
        style.wrapper,
        {
          marginBottom: marginSizes.sm
        }
      ])}
    >
      <Button
        {...buttonProps}
        onPress={() => onToggleYearList()}
        sx={{
          container: {
            gap: 1,
            flexDirection: 'row',
            alignItems: 'center'
          }
        }}
        endContent={
          <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <Icon name="right" color="primary" type="antdesign" size={18} />
          </Animated.View>
        }
      >
        <Animated.View style={[{ opacity: fadeIn }]}>
          <Title level={5} align="left" pt={0.5}>
            {`${currentMonth.locale(locale).format('MMM')} ${currentMonth.format('YYYY')}`}
          </Title>
        </Animated.View>
      </Button>

      {!openYearList && (
        <View style={style.actions}>
          <Button
            {...buttonProps}
            onPress={onPrevMonth}
            startContent={
              <Icon name="left" color="primary" type="antdesign" size={18} />
            }
          />
          <Button
            {...buttonProps}
            onPress={onNextMonth}
            startContent={
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
    justifyContent: 'space-between'
  },
  title: {
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  actions: {
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
});
